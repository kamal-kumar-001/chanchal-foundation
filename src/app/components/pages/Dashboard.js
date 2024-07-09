import { signOut } from "next-auth/react";
import MainLayout from "./MainLayout";
import ReceiptPage from "./receipt";
import Link from "next/link";

const DashboardLayout = ({ user }) => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container ">
          <div className="flex flex-wrap justify-center gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <h1 className="text-xl font-bold">{user.name || "John Doe"}</h1>
                  <p className="text-gray-700">{user.email || "Software Developer"}</p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <button onClick={() => signOut()}>
                      <span className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                        Logout
                      </span>
                    </button>
                    {user.isAdmin && (
                      <Link href="/admin">
                        <span className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                          Admin Page
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
              <h2 className="text-2xl font-semibold my-2">Total Donation</h2>
              <p><strong>Rs:</strong> {user.donation || 'N/A'}</p>
              <hr className="my-6 border-t border-gray-300" />
              <h2 className="text-2xl font-semibold my-2">Tax Certificates</h2>
              <Link href="/contact">
                        <span className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                         Request Tax Certificates
                        </span>
                      </Link>
              <hr className="my-6 border-t border-gray-300" />
                <h2 className="text-2xl font-semibold mb-2">User Details</h2>
              <p><strong>Name:</strong> {user.name || 'N/A'}</p>
              <p><strong>Email:</strong> {user.email || 'N/A'}</p>
              <p><strong>Phone:</strong> {user.phone || 'N/A'}</p>
              <p><strong>Pan:</strong> {user.pan || 'N/A'}</p>
              <p><strong>Address:</strong> {user.address || 'N/A'}</p>
              <p><strong>Pincode:</strong> {user.pincode || 'N/A'}</p>
                </div>
              </div>
            </div>
              <div className="bg-white shadow rounded-lg p-6">
              <div className="min-h-screen flex  justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
              <ReceiptPage member={user} />
            </div>
              </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardLayout;
