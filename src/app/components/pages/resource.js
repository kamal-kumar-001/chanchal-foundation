import MainLayout from './MainLayout';

const ResourcePage = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl">
          {/* Org Chart */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 text-white p-4 rounded-lg mb-4">
              <p> Director: Vidhi</p>
            </div>
            <div className="bg-blue-500 text-white p-4 rounded-lg mb-4">
              <p>2nd Director: Nidhi</p>
            </div>

            <div className="flex flex-row space-x-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="bg-blue-500 text-white p-4 rounded-lg mb-4">
                  <p>Manager 1</p>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="bg-green-500 text-white p-4 rounded-lg mb-4">
                    <p>Tom</p>
                  </div>
                  <div className="bg-green-500 text-white p-4 rounded-lg mb-4">
                    <p>Jerry</p>
                  </div>
                  <div className="bg-green-500 text-white p-4 rounded-lg mb-4">
                    <p>Ken</p>
                  </div>
                  <div className="bg-green-500 text-white p-4 rounded-lg mb-4">
                    <p>Jason</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-blue-500 text-white p-4 rounded-lg mb-4">
                  <p>Manager 2</p>
                </div>
                <div className="flex flex-row space-x-4">
                  <div className="bg-green-500 text-white p-4 rounded-lg mb-4">
                    <p>Mary</p>
                  </div>
                  <div className="bg-green-500 text-white p-4 rounded-lg mb-4">
                    <p>Riya</p>
                  </div>
                  <div className="bg-green-500 text-white p-4 rounded-lg mb-4">
                    <p>Roy</p>
                  </div>
                  <div className="bg-green-500 text-white p-4 rounded-lg mb-4">
                    <p>Lee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Addresses */}
          <div className="text-gray-800 text-xl text-center mt-8">
            <p>
              Head Office: 225/3 Uttam Nagar, Rewari, Haryana
              <br />
              <br />
              Branch Office: Village- Jawa, Charkhi Dadri, Haryana, India
              <br />
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ResourcePage;
