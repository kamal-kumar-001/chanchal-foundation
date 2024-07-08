import Link from "next/link";

const Work = () => {
    const workImages = [
        '/work/work-image50.jpeg',
        '/work/work-image52.jpeg',
        '/work/work-image53.jpeg',
        '/work/work-image51.jpeg',
        '/work/work-image54.jpeg',
    ]
    return (
        <>
            <style jsx global>
                {`
      .scroll-hidden::-webkit-scrollbar {
        height: 0px;
        background: transparent; /* make scrollbar transparent */
      }
      `}
            </style>
            <div className=" container max-w-7xl mx-auto pb-10 px-4 subpixel-antialiased">
                <div className="overflow-x-auto  scroll-hidden flex space-x-4 sm:space-x-8 md:space-x-10 lg:space-x-12">
                    {workImages.map((item, index) => (
                        <div key={index} className="flex-none" style={{ width: "250px" }}>
                            <img
                                src={item}
                                className="object-cover select-none w-full h-auto bg-gray-200 rounded  aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
                                alt={`photo gallery image ${index + 1}`}
                            />
                        </div>
                    ))}
                    <div className="object-cover flex items-center text-center justify-center select-none w-[250px] h-auto bg-gray-200 rounded  aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" >
                        <Link className="w-[250px]" href='/our-work'>
                          <span className="border-2 rounded-md px-4 py-2 border-gray-500 text-gray-500">
                            View More
                            </span>  
                            </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Work;