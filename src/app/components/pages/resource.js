import MainLayout from './MainLayout';

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
      role: '3rd Director',
      imgSrc: '/doctor.png',
      quote: "Your health is our priority. Free health check-ups for a healthier tomorrow."
    },
  ];
  return (
    <div className="container mx-auto justify-center flex flex-wrap gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white w-96 md:w-[250px] lg:w-[260] xl:w-[260] rounded-lg shadow-md p-6 my-6 text-center">
                <img
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

{/* <MainLayout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl">
        <section id="our-team" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Meet Our Team</h2>
          <div className="flex flex-wrap gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white w-96 md:w-[250px] lg:w-[260] xl:w-[260] rounded-lg shadow-md p-6 my-6 text-center">
                <img
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
        </div>
      </section>
        </div>
      </div>
    </MainLayout> */}