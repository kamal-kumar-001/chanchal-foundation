import React from "react";

const features = [
  {
    title: "Medical help for girl child",
    description:
      "You don't need to be an expert to customize this plugin. Our code is very readable and well documented.",
    svg: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
      ></svg>
    ),
  },
  {
    title: "Girl child education",
    description:
      "With mobile, tablet & desktop support it doesn't matter what device you're using. This plugin is responsive in all browsers.",
    svg: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
      ></svg>
    ),
  },
  {
    title: "Arrange blood for girl child from blood bank",
    description:
      "Our plugins are supported by sponsors who provide community support. Sponsors will get email support on weekdays.",
    svg: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
      ></svg>
    ),
  },
  {
    title: "Free medical camp",
    description:
      "We make sure our plugins are working perfectly with all modern browsers available such as Chrome, Firefox, Safari.",
    svg: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
      ></svg>
    ),
  },
  {
    title: "Women empowerment",
    description:
      "We strictly follow a set of guidelines along with unit tests to make sure your implementation as easy as possible.",
    svg: "/mhelp.svg",
  },
  {
    title: "Social work",
    description:
      "This template is actively maintained by the core plugin team. We are working on fixing each of the issues reported.",
    svg: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
      ></svg>
    ),
  },
];

const Missions = () => {
  return (
    <div className="max-w-4xl mx-auto px-5 mt-16">
      <div className="text-center">
        <h2 className="font-semibold text-3xl">OUR MISSIONS</h2>
        <p className="max-w-md mx-auto mt-2 text-gray-500">
          A responsive documentation template built for everyone who wants to
          create a plugin.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {features.map((feature, index) => (
          <div className="flex gap-4 items-start" key={index}>
            {/* <span className="text-[#ff5722]/70 bg-[#ff5722]/40 p-3   rounded-full">
              {feature.svg}
              <img src={feature.svg} alt={feature.title} />
            </span> */}
              <img className=" w-20" src='/mhelp.svg' alt={feature.title} />
            <div>
              <h3 className="font-semibold text-xl">{feature.title}</h3>
              <p className="mt-1 text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Missions;
