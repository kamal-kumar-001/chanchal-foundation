import SectionTitle from "../home/sectionTitle";
import { Element } from "react-scroll";
import Cta from "../home/cta";
import Faq from "../home/faq";
import Carousel from "../home/carousal";
import ImpactSection from "../home/impact";
import Missions from "../home/mission";
import MainLayout from "./MainLayout";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      <Carousel />
      <Element name="product">
        <SectionTitle
          pretitle=""
          title="">
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
      <Cta />
    </MainLayout>
  );
}
