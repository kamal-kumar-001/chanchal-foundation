import { useEffect, useState } from "react";

const DonatorList = () => {
  const [donators, setDonators] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDonator = async () => {
      try {
        const response = await fetch('/api/donator');

        const result = await response.json();
        if (result.success) {
          const sortedDonators = result.donators.sort((a, b) => b.donationAmount - a.donationAmount);
          setDonators(sortedDonators);
        } else {
          console.error('Failed to fetch donator:', result.message);
        }
      } catch (error) {
        console.error('Error fetching donator:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDonator();
  }, []);
  return (
      <div className=" flex items-center justify-center bg-gray-50  py-12 px-4 sm:px-6 lg:px-8">
        {isLoading ? <div className="flex items-center justify-center ">Loading</div> : (
          <div className="w-5/6 mx-auto">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y border-2 divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr className="divide-x divide-gray-200">
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Amount
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Address
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y  divide-gray-200">
                      {donators.map((donator, index) => (
                        <tr  className="hover:bg-gray-200 divide-x divide-gray-200" key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{donator.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{donator.amount} ₹</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{donator.email}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
          </div>
        )}
      </div>
  );
};

export default DonatorList;
