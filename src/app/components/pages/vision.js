import { useEffect, useState } from "react";
import DonatorList from "../home/DonatorList";
import MainLayout from "./MainLayout";

const VisionPage = () => {
  const [donator, setDonator] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDonator = async () => {
            try {
                const response = await fetch('/api/donator');

                const result = await response.json();
                if (result.success) {
                  const sortedDonators = result.donators.sort((a, b) => b.donationAmount - a.donationAmount);
                  setDonator(sortedDonators);
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
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50  py-12 px-4 sm:px-6 lg:px-8">
        {isLoading ? <div className="flex items-center justify-center ">Loading</div> : <DonatorList donators={donator} />}
        </div>
    </MainLayout>
  );
};

export default VisionPage;
