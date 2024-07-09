import MainLayout from './Mainlayout';
import { useEffect, useState } from 'react';
import DataTable from '../../components/DataTable';


const ContactPage = () => {
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFetching, setIsFetching] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState('');
    

    useEffect(() => {
        const fetchContacts = async () => {
            setIsFetching(true);
            try {
                const response = await fetch('/api/contact');

                const result = await response.json();
                if (result.success) {
                    setContacts(result.contacts);
                } else {
                    console.error('Failed to fetch contacts:', result.message);
                }
            } catch (error) {
                console.error('Error fetching contacts:', error);
            } finally {
                setIsLoading(false);
                setIsFetching(false);
            }
        };

        fetchContacts();
    }, []);

    const searchKeywordOnChangeHandler = (e) => {
        setSearchKeyword(e.target.value);
    };

    const searchKeywordOnSubmitHandler = (e) => {
        e.preventDefault();
        // Implement search functionality if required
    };

    const tableHeaderTitleList = ['Name', 'Email', 'Message', 'Date'];
    return (
        <MainLayout>
            <div className="min-h-screen flex justify-center bg-gray-50  py-12 px-4 sm:px-6 lg:px-8">
                    <DataTable
                        dataListName="List of Contacts"
                        searchKeywordOnSubmitHandler={searchKeywordOnSubmitHandler}
                        searchInputPlaceHolder="Search by name..."
                        searchKeywordOnChangeHandler={searchKeywordOnChangeHandler}
                        searchKeyword={searchKeyword}
                        tableHeaderTitleList={tableHeaderTitleList}
                        isLoading={isLoading}
                        isFetching={isFetching}
                        data={contacts}
                    >
                        {contacts?.map((contact, index) => (
                            <tr key={index}>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {contact.name}
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {contact.email}
                                </td>
                                {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {contact.phone}
                                </td> */}
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {contact.message}
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {new Date(contact.createdAt).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </DataTable>
            </div>
        </MainLayout>
    )
}
export default ContactPage

