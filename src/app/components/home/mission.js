import React from "react";

const features = [
  {
    title: "Education",
    description:
      "Education, nutrition and holistic development of children",
    svg: "/mission/education.webp",
    color: '#f0c774',
  },
  {
    title: "Health Care",
    description:
      "Taking healthcare services to doorsteps of hard to reach communities",
    svg: "/mission/health.webp",
    color: '#c0adcc',
  },
  {
    title: "Women Empowerment",
    description:
      "Empowering adolescent girls & women through community engagement",
    svg: "/mission/wimpower.webp",
    color: '#b3d2d1',
  },
  {
    title: "Livlihood",
    description:
      "Skill training and placement support for underprivileged youth",
    svg: "/mission/livly.webp",
    color: '#debfae',
  },
  {
    title: "Medical Camps",
    description:
      "Reach out and respond to the needs of the disaster-affected people",
    svg: "/mission/mcamp.webp",
    color: 'salmon',
  },
  {
    title: "Social work",
    description:
      "Helping community-based organizations become locally sustainable",
    svg: "/mission/swork.webp",
    color: '#50c878',
  },
];

const Missions = () => {
  return (
    <div className="max-w-4xl mx-auto px-5 my-16">
      <div className="text-center">
        <h2 className="font-semibold text-3xl">OUR MISSIONS</h2>
        {/* <p className="max-w-md mx-auto mt-2 text-gray-500">
          A responsive documentation template built for everyone who wants to
          create a plugin.
        </p> */}
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {features.map((feature, index) => (
          <div className="flex gap-4 items-start" key={index}>
            <span className="">
              <img className="mix-blend-multiply w-20" src={feature.svg} alt={feature.title} />
            </span>
            <div>
              <h3 className="font-semibold text-2xl" style={{ color: feature.color }}>
                {feature.title.toUpperCase()}
              </h3>

              <p className="mt-1 text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Missions;
