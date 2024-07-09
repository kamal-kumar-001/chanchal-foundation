import MainLayout from './Mainlayout';
import Link from 'next/link';

const AdminPage = () => {
    return (
        <MainLayout>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {/* Total Donations */}
                                <div className="bg-green-100 p-6 rounded-lg shadow-md">
                                    <h2 className="text-xl font-bold text-gray-800 mb-2">Total Donations</h2>
                                    <p className="text-gray-600">$10,000</p>
                                </div>
                                {/* New Donations */}
                                <Link href={'/admin/donator'} className="bg-blue-100 p-6 rounded-lg shadow-md">
                                    <h2 className="text-xl font-bold text-gray-800 mb-2">New Donations</h2>
                                    <p className="text-gray-600">5 new donations</p>
                                </Link>


                                {/* New Contact Submissions */}
                                <Link href={'/admin/contacts'} className="bg-yellow-100 p-6 rounded-lg shadow-md">
                                    <h2 className="text-xl font-bold text-gray-800 mb-2">New Contact Submissions</h2>
                                    <p className="text-gray-600">3 new contacts</p>
                                </Link>

                                {/* New Volunteers */}
                                <Link href={'/admin/members'} className="bg-purple-100 p-6 rounded-lg shadow-md">
                                    <h2 className="text-xl font-bold text-gray-800 mb-2">New Volunteers</h2>
                                    <p className="text-gray-600">2 new volunteers</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default AdminPage;

