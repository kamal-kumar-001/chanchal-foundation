import SectionTitle from "../home/sectionTitle";
import Faq from "../home/faq";
import Carousel from "../home/carousal";
import ImpactSection from "../home/impact";
import Missions from "../home/mission";
import MainLayout from "./MainLayout";
import Link from "next/link";
import Heading from "../heading";
import Work from "../home/work";
import ResourcePage from "./resource";

export default function Home() {
  return (
    <MainLayout>
      <Carousel />
        <SectionTitle
          pretitle=""
          title="Chanchal Veer foundation">
          Founded in memory of Chanchal Yadav by Vijay Veer Sunaria, Chanchal Veer Foundation is dedicated to social service, organizing medical and blood donation camps.
<br />
<br />
          The Foundation, registered with the Ministry of Corporate Affairs, also provides free blood to girls under one year old in Rewari, aiming to improve medical conditions in society. Haryanvi actor Kuldeep Kaushik (KD), our brand ambassador, attended the camp, which was praised by all participants.
          <br />
<br />
          Vijay Veer Sunaria encourages everyone to join the Foundation to enhance our social service efforts, with many community members already pledging their support.<br />
          <Link href='/about-us' className="text-[#ff5722] ">
            read more &gt;
          </Link>
        </SectionTitle>
        <ImpactSection />
        <Missions />
      <SectionTitle title="OUR WORK">
      </SectionTitle>
      <Work />
      <SectionTitle title="TEAM">
      </SectionTitle>
      <ResourcePage />
      <SectionTitle title="Frequently Asked Questions">
      </SectionTitle>
      <Faq />
      <Heading title={'Donate'} subtitle={'SUPPORT US AND CHANGE THE COURSE OF A CHILD’S LIFE TODAY!'} />
      <div className='flex justify-center items-center'>
        <Link className='flex justify-center w-48  mb-10  -mt-20 border-2 px-5 py-2 border-white rounded-full bg-white text-orange-600 hover:text-white hover:bg-orange-600' href={'/donate'}>Donate Now</Link>
      </div>
    </MainLayout>
  );
}
