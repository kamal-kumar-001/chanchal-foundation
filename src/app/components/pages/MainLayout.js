// import React from "react";
import Footer from "../home/footer";
import Navbar from "../home/navbar";

const MainLayout = ({ children }) => {
  const navigation = [
    { name: "About Us", href: "/about-us" },
    { name: "Vision", href: "/vision" },
    { name: "Campaigns", href: "/campaigns" },
    { name: "Resource Center", href: "/resource-center" },
    { name: "Contact Us", href: "/contact-us" },
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
