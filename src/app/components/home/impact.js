import React from "react";
import CountUp from 'react-countup';

const ImpactSection = () => {
    return (
        <div className=" -z-10">
            <section
                className="relative bg-gray-200 block px-6 py-10 md:py-20 md:px-10  "
            >
                <div className="relative text-gray-800 mx-auto max-w-5xl text-center">
                    <h2 className="block w-full text-gray-800 bg-clip-text font-bold  text-3xl sm:text-4xl">
                        OUR IMPACT
                    </h2>
                </div>

                <div className=" mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-md   p-8 text-center shadow">
                        <div className="text-[#ff5722] opacity-80  text-7xl font-bold mx-auto flex  items-center justify-center rounded-md ">
                            <CountUp end={1000} />+
                        </div>
                        <h3 className="mt-6 text-4xl font-semibold opacity-80 text-[#ff5722]">Lac</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-700">
                            children and their families are impacted every year
                        </p>
                    </div>
                    <div className="rounded-md   p-8 text-center shadow">
                        <div className="text-[#ff5722] opacity-80  text-7xl font-bold mx-auto flex  items-center justify-center rounded-md ">
                            <CountUp end={100} />+
                        </div>
                        <h3 className="mt-6 text-4xl font-semibold opacity-80 text-[#ff5722]">Villagess</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-700">
                            and slums are reached out to across the country
                        </p>
                    </div>

                    <div className="rounded-md   p-8 text-center shadow">
                        <div className="text-[#ff5722] opacity-80  text-7xl font-bold mx-auto flex  items-center justify-center rounded-md ">
                            <CountUp end={300} />+
                        </div>
                        <h3 className="mt-6 text-4xl font-semibold opacity-80 text-[#ff5722]">Projects</h3>
                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-700">
                            focused on education, healthcare, and women empowerment
                        </p>
                    </div>
                </div>

                <div
                    className="absolute bottom-0 left-0 z-0 h-1/3 w-full -b"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
                    }}
                ></div>
                <div
                    className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
                    style={{
                        backgroundImage:
                            "linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
                    }}
                ></div>
            </section>
        </div>
    );
};

export default ImpactSection;

