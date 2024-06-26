import SectionTitle from "../home/sectionTitle";
import { Element } from "react-scroll";
import Faq from "../home/faq";
import Carousel from "../home/carousal";
import ImpactSection from "../home/impact";
import Missions from "../home/mission";
import MainLayout from "./MainLayout";
import Link from "next/link";
import Heading from "../heading";

export default function Home() {
  return (
    <MainLayout>
      <Carousel />
      <Element name="product">
        <SectionTitle
          pretitle=""
          title="Chanchal Veer foundation">
          Established in 2002, Smile Foundation is an Indian development organization impacting the lives of over 15 lakh children and their families every year. We have more than 400 projects on education, healthcare, livelihood, and women empowerment in over 2,000 remote villages and urban slums across 25 states of India.
          <br />
          <br />
          Smile Foundation works as a catalyst in the cycle of change, complementing and supplementing government efforts (view details) to achieve the Sustainable Development Goals. We sensitize and partner with like-minded institutions and individuals to implement high-impact programmes that enable access, enhance quality and help bring long term behavioural change at the grassroots.
          <br />
          
          <Link href='/about-us' className="text-[#ff5722] ">
            read more &gt;
          </Link>
        </SectionTitle>
      </Element>
      <Element name="impact">
        <ImpactSection/>
      </Element>
      <Element name="mission">
        <Missions />
      </Element>
      <SectionTitle  title="Frequently Asked Questions">
      </SectionTitle>
      <Faq />
      <Heading title={'Donate'} subtitle={'SUPPORT US AND CHANGE THE COURSE OF A CHILD’S LIFE TODAY!'} />
    <div className='flex justify-center items-center'>
    <Link className='flex justify-center w-48  mb-10  -mt-20 border-2 px-5 py-2 border-white rounded-full bg-white text-orange-600 hover:text-white hover:bg-orange-600' href={'/donate'}>Donate Now</Link>
    </div>
    </MainLayout>
  );
}
