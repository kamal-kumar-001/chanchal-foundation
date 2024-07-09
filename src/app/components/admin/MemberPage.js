import MainLayout from './Mainlayout';
import { useEffect, useState } from 'react';
import DataTable from '../../components/DataTable';


const MemberPage = () => {
    const [members, setMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFetching, setIsFetching] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState('');
    

    useEffect(() => {
        const fetchMembers = async () => {
            setIsFetching(true);
            try {
                const response = await fetch('/api/member');

                const result = await response.json();
                if (result.success) {
                    setMembers(result.members);
                } else {
                    console.error('Failed to fetch members:', result.message);
                }
            } catch (error) {
                console.error('Error fetching members:', error);
            } finally {
                setIsLoading(false);
                setIsFetching(false);
            }
        };

        fetchMembers();
    }, []);

    const searchKeywordOnChangeHandler = (e) => {
        setSearchKeyword(e.target.value);
    };

    const searchKeywordOnSubmitHandler = (e) => {
        e.preventDefault();
        // Implement search functionality if required
    };

    const tableHeaderTitleList = ['Name', 'Email', 'Admin', 'Date'];
    return (
        <MainLayout>
            <div className="min-h-screen flex  justify-center bg-gray-50  py-12 px-4 sm:px-6 lg:px-8">
                    <DataTable
                        dataListName="List of Members"
                        searchKeywordOnSubmitHandler={searchKeywordOnSubmitHandler}
                        searchInputPlaceHolder="Search by name..."
                        searchKeywordOnChangeHandler={searchKeywordOnChangeHandler}
                        searchKeyword={searchKeyword}
                        tableHeaderTitleList={tableHeaderTitleList}
                        isLoading={isLoading}
                        isFetching={isFetching}
                        data={members}
                    >
                        {members?.map((member, index) => (
                            <tr key={index}>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {member.name}
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {member.email}
                                </td>
                                {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {member.phone}
                                </td> */}
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {member.isAdmin ? 'true' : 'false'}
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    {new Date(member.createdAt).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </DataTable>
            </div>
        </MainLayout>
    )
}
export default MemberPage

