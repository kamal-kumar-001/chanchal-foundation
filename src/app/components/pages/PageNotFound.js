import MainLayout from "./MainLayout";
import Link from 'next/link';
const NotFoundPage = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50  py-12 px-4 sm:px-6 lg:px-8">
    <div className="container flex flex-col items-center ">
        <div className="flex flex-col gap-6 max-w-md text-center">
            <h2 className="font-extrabold text-9xl text-gray-600 ">
                <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl md:text-3xl ">Sorry, we couldn&apos;t find this page.</p>
            <Link href="/" className="px-8 py-4 text-xl font-semibold rounded bg-[#ff5722] text-gray-50 hover:text-gray-200">Back to home</Link>
        </div>
    </div>
        </div>
    </MainLayout>
  );
};

export default NotFoundPage;
