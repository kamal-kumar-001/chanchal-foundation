// import React from "react";
import Footer from "../home/footer";
import Navbar from "../home/navbar";

const MainLayout = ({ children }) => {
  const navigation = ["Home", "Donators", "Users","Members"]
  return (
    <>
      <Navbar navigation={navigation} />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
