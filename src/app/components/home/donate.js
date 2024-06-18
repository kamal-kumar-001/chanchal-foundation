"use client";

import DonatorList from "./DonatorList";
import Footer from "./footer";
import Navbar from "./navbar";
import SupportSection from "./SupportSection";
import DonatorReceipt from "./DonatorRecipt";

const exampleDonator = {
    name: 'John Doe',
    phone: '+234XXXXXXXX',
    email: 'info@example.com',
    txnId: '#5033',
    amount: '$320',
  };

export default function Donate() {
  return (
    <>
    <Navbar/>
    <SupportSection />
    <DonatorList /> 
    <DonatorReceipt donator={exampleDonator} />
    <Footer/>
    </>
  );
}