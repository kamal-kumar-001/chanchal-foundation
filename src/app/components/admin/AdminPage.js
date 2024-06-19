import MainLayout from './Mainlayout';
import { useRouter } from 'next/navigation';
const AdminPage = () => {
    const router = useRouter();
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin');
        router.push('/login');
    };
    return (
        <MainLayout>
        <div className="min-h-screen flex items-center justify-center bg-gray-50  py-12 px-4 sm:px-6 lg:px-8">
        Admin Dashboard
        <button onClick={logout} className="mt-4 mb-4 bg-red-500 text-white px-4 py-2 rounded">
                        Logout
                    </button>
        </div>
        </MainLayout>
    )}
    export default AdminPage
