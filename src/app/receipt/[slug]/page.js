"use client";
import { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import MainLayout from '@/app/components/pages/MainLayout';

export default function Index({params}) {
  const slug = params.slug;
  const [donationDetails, setDonationDetails] = useState(null);

  useEffect(() => {
    if (slug) {
      fetchDonationDetails(slug);
    }
  }, [slug]);

  const fetchDonationDetails = async (id) => {
    try {
      const response = await fetch(`/api/donation/${id}`);
      const result = await response.json();
      if (result.success) {
        setDonationDetails(result.donation);
      } else {
        console.error('Failed to fetch donation details:', result.message);
      }
    } catch (error) {
      console.error('Error fetching donation details:', error);
    }
  };

  const generatePDF = () => {
    if (!donationDetails) return;

    const doc = new jsPDF();

    doc.text("Donation Receipt", 20, 20);
    autoTable(doc, {
      startY: 30,
      head: [['Field', 'Details']],
      body: [
        ['Receipt No.', donationDetails._id],
        ['Name', donationDetails.name],
        ['Email', donationDetails.email],
        ['Phone', donationDetails.phone],
        ['Amount', donationDetails.amount],
        ['Payment Status', donationDetails.paymentStatus ? 'Paid' : 'Unpaid'],
        ['Date', new Date(donationDetails.createdAt).toLocaleDateString()],
      ],
    });

    doc.save(`receipt_${donationDetails._id}.pdf`);
  };

  if (!donationDetails) return (
    <MainLayout>
    <div className="min-h-screen flex items-center justify-center ">
      <div className="animate-pulse">
        {" "}
        <div className="w-20 h-20 bg-[#ff5722]/80 rounded-full"></div>
      </div>
    </div>
    </MainLayout>
);

  return (
    <MainLayout>
     <div className="bg-white shadow-md rounded-lg p-6 max-w-xl mx-auto my-10">
        <h1 className="text-2xl font-bold mb-6 text-center">Donation Receipt</h1>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Receipt No:</span>
            <span>{donationDetails._id}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Name:</span>
            <span>{donationDetails.name}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Email:</span>
            <span>{donationDetails.email}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Phone:</span>
            <span>{donationDetails.phone}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Amount:</span>
            <span>{donationDetails.amount}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Payment Status:</span>
            <span>{donationDetails.paymentStatus ? 'Paid' : 'Unpaid'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Date:</span>
            <span>{new Date(donationDetails.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
        <button
          onClick={generatePDF}
          className="mt-6 w-full bg-[#ff5722]/80 text-white py-2 rounded hover:bg-[#ff5722] transition-colors"
        >
          Download PDF
        </button>
      </div>
    </MainLayout>
  );
}
