import MainLayout from './Mainlayout';
import { useEffect, useState } from 'react';
import DataTable from '../../components/DataTable';


const DonatorPage = () => {
    const [donator, setDonator] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFetching, setIsFetching] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState('');
    

    useEffect(() => {
        const fetchDonator = async () => {
            setIsFetching(true);
            try {
                const response = await fetch('/api/donator');

                const result = await response.json();
                if (result.success) {
                    setDonator(result.donators);
                } else {
                    console.error('Failed to fetch donator:', result.message);
                }
            } catch (error) {
                console.error('Error fetching donator:', error);
            } finally {
                setIsLoading(false);
                setIsFetching(false);
            }
        };

        fetchDonator();
    }, []);

    const searchKeywordOnChangeHandler = (e) => {
        setSearchKeyword(e.target.value);
    };

    const searchKeywordOnSubmitHandler = (e) => {
        e.preventDefault();
        // Implement search functionality if required
    };

    const tableHeaderTitleList = ['Name', 'Email', 'Phone', 'Amount', 'Date'];
    return (
        <MainLayout>
            <div className="min-h-screen flex items-center justify-center bg-gray-50  py-12 px-4 sm:px-6 lg:px-8">
                    <DataTable
                        dataListName="List of Donator"
                        searchKeywordOnSubmitHandler={searchKeywordOnSubmitHandler}
                        searchInputPlaceHolder="Search by name..."
                        searchKeywordOnChangeHandler={searchKeywordOnChangeHandler}
                        searchKeyword={searchKeyword}
                        tableHeaderTitleList={tableHeaderTitleList}
                        isLoading={isLoading}
                        isFetching={isFetching}
                        data={donator}
                    >
                        {donator?.map((donator, index) => (
                            <tr key={index}>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {donator.name}
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {donator.email}
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {donator.phone}
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {donator.amount}
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {new Date(donator.createdAt).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </DataTable>
            </div>
        </MainLayout>
    )
}
export default DonatorPage

