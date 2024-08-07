import Image from 'next/image';
import { useEffect, useState } from 'react';
import SectionTitle from '../home/sectionTitle';

const Team = () => {
    const [members, setMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    

    useEffect(() => {
        const fetchMembers = async () => {
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
            }
        };

        fetchMembers();
    }, []);
  const teamMembers = [
    {
      name: 'Vijay Veer Sunariya',
      role: 'Director',
      imgSrc: '/man.png',
      quote: "Empowering our daughters with free medical facilities ensures a healthier and brighter future for our nation."
    },
    {
      name: 'Nidhi Veer Sunariya',
      role: '2nd Director',
      imgSrc: '/women.png',
      quote: "Women empowerment is not just a goal; it's a necessity. Together, we can build a world where every woman thrives."
    },
    {
      name: 'Dr. Sanjeev Arora',
      role: 'Chair Person',
      imgSrc: '/doctor.png',
      quote: "Your health is our priority. Free health check-ups for a healthier tomorrow."
    },
  ];
  return (
        <>
        <SectionTitle title="Late Chanchal Veer Sunariya">
      </SectionTitle>
        <div className='w-[384px] h-[384px] mb-5  mx-auto flex justify-center '>
        <Image
                width={384} 
                height={384}
                  src='/chanchal.jpeg'
                  alt={`chanchal photo`}
                  className="rounded-lg p-5  border-2 border-gray-300"
                />
        </div>
        <SectionTitle title="TEAM">
      </SectionTitle>
    <div className="container mx-auto justify-center flex flex-wrap gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white w-96 md:w-[250px] lg:w-[260] xl:w-[260] rounded-lg shadow-md p-6 my-6 text-center">
                <Image
                width={384} 
                height={384}
                  src={member.imgSrc}
                  alt={`Team Member ${index + 1}`}
                  className="w-full rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-700">{member.role}</p>
                {member.quote && (
                  <p className="text-gray-500 italic mt-4">{member.quote}</p>
                )}
              </div>
            ))}
          </div>
          <SectionTitle title="Volunteers">
      </SectionTitle>
            <div className=" flex items-center justify-center   pb-12 px-4 sm:px-6 lg:px-8">
        {isLoading ? <div className="flex container items-center justify-center ">Loading</div> : (
          <div className="md:w-2/3 lg:w-2/3 xl:w-2/3 mx-auto">
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
                          Phone
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y  divide-gray-200">
                      {members.map((member, index) => (
                        <tr  className="hover:bg-gray-200 divide-x divide-gray-200" key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{member.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{member.phone}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
          </div>
        )}
      </div>
      </>
  );
};

export default Team;