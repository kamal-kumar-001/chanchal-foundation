import Image from 'next/image';

const ResourcePage = () => {
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
  );
};

export default ResourcePage;