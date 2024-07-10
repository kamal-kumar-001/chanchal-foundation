'use client';
import Footer from "../home/footer";
import Navbar from "../home/navbar";

const MainLayout = ({ children }) => {
  const navigation = [
    {
      name: 'About Us', href: '/about-us', subNav: [
        { name: 'About Us', href: '/about-us' },
        { name: 'Our Work', href: '/our-work' },
      ]
    },
    { name: 'Our Work', href: '/our-work', subNav: [] },
    { name: 'Our Team', href: '/our-team', subNav: [] },
    { name: 'Contact Us', href: '/contact-us', subNav: [] },
  ];
  return (
    <>
      <Navbar navigation={navigation} />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
