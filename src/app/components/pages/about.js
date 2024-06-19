import MainLayout from "./MainLayout";

const AboutPage = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50  py-12 px-4 sm:px-6 lg:px-8">
        <div>
            <img className="mix-blend-multiply pb-12 w-1/2 h-1/3" src='/about_img.png' alt="about_img"/>
        </div>
        <p className="text-gray-800 text-xl">
        Established in 2002, Chanchal Veer Foundation is an Indian development organization dedicated to improving the lives of over 1.5 million children and their families each year. We manage more than 400 projects focused on education, healthcare, livelihood, and women empowerment across 2,000 remote villages and urban slums in 25 states of India.
          <br />
          <br />
          Chanchal Veer Foundation acts as a catalyst in the cycle of change, working in tandem with government efforts to achieve the Sustainable Development Goals. We engage and collaborate with like-minded institutions and individuals to implement high-impact programs that enhance access, improve quality, and foster long-term behavioral change at the grassroots level. 
          <br />
        </p>
        </div>
    </MainLayout>
  );
};

export default AboutPage;
