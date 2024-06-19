import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <div className="!p-0">
      <div className="w-full max-w-4xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-base text-left text-gray-800 rounded-lg bg-gray-50  hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 ">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "" : "transform rotate-180"
                      } w-5 h-5 text-[#ff5722]`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 ">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
}

const faqdata = [
  {
    question: "What is the impact of my donation on the education of underserved children through the Mission Education(ME) programme?",
    answer: "Your donation to the Mission Education(ME) programme has a direct and significant impact on the education of underprivileged children. It helps provide access to quality education, learning resources, and support services. Your contribution enables these children to break the cycle of poverty, gain knowledge and skills, and have a brighter future.",
  },
  {
    question: "How will Smile Foundation keep me updated on the progress of the children supported through my donation?",
    answer: "Smile Foundation values transparency and keeps donors updated on the progress of the children supported through regular communication. You will receive newsletters, impact reports, or personalized updates on the children's achievements, academic progress, and success stories.",
  },
  {
    question: "Are my donations to the Mission Education(ME) programme eligible for tax benefits? ",
    answer: "Yes, donations made to Smile Foundation's Mission Education programme are eligible for tax benefits under the applicable provisions of the income tax laws in your country. You will receive a tax receipt for your donation, which you can use for tax purposes.",
  },
  {
    question: "Is there a minimum or maximum donation amount to support the ME programme",
    answer: "Smile Foundation maintains strict financial guidelines and undergoes regular audits to ensure transparency and accountability in the utilization of funds. We publish financial reports on our website, providing a breakdown of the expenses and impact created by the programmes.",
  },
];
