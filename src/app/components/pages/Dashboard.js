import MainLayout from "./MainLayout";
import ReceiptPage from "./receipt";

const DashboardLayout = ({user}) => {
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50  py-12 px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
            <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">User Details</h2>
              <p><strong>Name:</strong> {user.name || ''}</p>
              <p><strong>Email:</strong> {user.email || ''}</p>
              <p><strong>Phone:</strong> {user.phone || 'None'}</p>
            </div>
          </div>
          <ReceiptPage member={user} />
        </div>
    </MainLayout>
  );
};

export default DashboardLayout;


