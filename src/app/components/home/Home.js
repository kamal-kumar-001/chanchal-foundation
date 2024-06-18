import Navbar from "./navbar";
import SectionTitle from "./sectionTitle";
import { Element } from "react-scroll";

// import { benefitOne, benefitTwo } from "./data";
// import Benefits from "./benefits";
import Footer from "./footer";
import Cta from "./cta";
import Faq from "./faq";
import Carousel from "./carousal";
import ImpactSection from "./impact";
import Missions from "./mission";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Navbar />
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
          
          <button className="text-[#ff5722] ">
            read more &gt;
          </button>
        </SectionTitle>
      </Element>
      <Element name="impact">
        <ImpactSection/>
      </Element>
      <Element name="mission">
        <Missions />
      </Element>
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
