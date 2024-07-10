import React from "react";

const footerSections = [
  {
    title: "IMPORTANT LINKS",
    links: [
      { name: "About Us", href: "/about-us" },
      { name: "Receipts", href: "/receipt" },
      { name: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "FINANCIAL DETAILS",
    details: [
      "CHANCHAL VEER FOUNDATION",
      "Corporate Identity Number: U85300HR2022NPL106768",
      "Permanent Account Number (PAN): AAKCC6112A",
      "Tax Deduction and Collection Account Number (TAN): RTKC07441A",
    ],
  },
  {
    title: "ADDRESS",
    details: [
      "CHANCHAL VEER FOUNDATION",
      "Head Office - H. NO. 225/3, UTTAM NAGAR, REWARI, Haryana, India - 123110",
      "Branch Office - Village - Java, District - Charkhi Dadri, Haryana, India",
      "+91 9466394803",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#1A1D2B]">
      <div className="container mx-auto p-0 md:p-8 xl:px-0">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
          <div className="">
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:col-span-2 xl:mt-0">
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-md font-semibold leading-6 text-[#ff5722]/80">{section.title}</h3>
                  {section.links ? (
                    <ul role="list" className="mt-6 space-y-4">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a href={link.href} className="text-md leading-6 text-gray-100 hover:text-gray-50">
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul role="list" className="mt-6 space-y-2">
                      {section.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-md leading-6 text-gray-100">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <div>
                <h3 className="text-md font-semibold leading-6 text-[#ff5722]/80">FOLLOW US</h3>
                <div className="flex mt-6 space-x-5 text-gray-100">
                  <a href="https://www.facebook.com/people/Chanchal-veer-foundation/100080059512739/" target="_blank" rel="noopener">
                    <span className="sr-only">Facebook</span>
                    <Facebook />
                  </a>
                  <a href="https://www.instagram.com/chanchal_veer_foundation/" target="_blank" rel="noopener">
                    <span className="sr-only">Instagram</span>
                    <Instagram />
                  </a>
                  <a href="https://www.youtube.com/@chanchalveersunariya8897" target="_blank" rel="noopener">
                    <span className="sr-only">Youtube</span>
                    <Youtube />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
            <div className="text-md text-center text-white">
              Copyright © {new Date().getFullYear()}. Crafted with
              <span className="text-gray-50"> ♥ </span> by Chanchal Veer Foundations
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Youtube = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor"  viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg>
);
