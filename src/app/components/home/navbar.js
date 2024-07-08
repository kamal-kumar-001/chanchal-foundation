import Link from "next/link";
import { useState } from "react";

export default function Navbar({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  // const token = localStorage.getItem('token');
  // if (token) {
  //   setIsLogin(true)
  // }

  const nav = [
    { name: "About Us", href: "/about-us" },
    { name: "Donators", href: "/donators" },
    { name: "Contact Us", href: "/contact-us" },
  ];
  if (!navigation) navigation = nav;

  return (
    <div className="w-full z-50 bg-white sticky top-0">
      <nav className="container flex items-center justify-between px-4 py-4 mx-auto lg:justify-between xl:px-4">
        {/* Logo */}
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
          <Link href="/">
            <span className="flex items-center space-x-2 text-2xl font-medium text-[#ff5722]">
              <img src="/logo.png" alt="logo image" className="w-36 md:w-44 lg:w-44" />
            </span>
          </Link>
          <div className="flex gap-2 items-center">
            <Link className="lg:hidden xl:hidden" href="/donate">
              <button className="w-full px-6 py-1 text-center text-white bg-[#ff5722] rounded-md lg:ml-5">
                Donate
              </button>
            </Link>

            <button
              aria-label="Toggle Menu"
              className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-[#ff5722] focus:text-[#ff5722] focus:bg-indigo-100 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-8 h-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>

          <div
            className={`${
              menuOpen ? "block animate-slideIn" : "hidden"
            } flex space-y-3 items-center flex-col w-full my-5 lg:hidden`}
          >
            {navigation.map((item, index) => (
              <Link key={index} href={item.href}>
                <span className="w-full font-semibold uppercase text-base cursor-pointer px-4 py-2 -ml-4 text-gray-500 rounded-md hover:text-[#ff5722] focus:text-[#ff5722] focus:bg-indigo-100 focus:outline-none">
                  {item.name}
                </span>
              </Link>
            ))}
            <Link href="/donate">
              <button className="w-full px-6 py-2 my-3 text-center text-white bg-[#ff5722] rounded-md lg:ml-5">
                Make a Contribution
              </button>
            </Link>
            {isLogin ? (<Link href="/dashboard">
            <span className="px-6 py-2 text-white bg-[#ff5722] rounded-md md:ml-5">
              Dashboard
            </span>
          </Link>) :(<Link href="/signup">
            <span className="px-6 py-2 text-white bg-[#ff5722] rounded-md md:ml-5">
              Became a Volunteer 
            </span>
          </Link>)}
          </div>
        </div>

        {/* Menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={menu.href}>
                  <span className="inline-block text-base font-semibold uppercase cursor-pointer px-4 py-2   text-gray-600 no-underline rounded-md hover:text-[#ff5722] focus:text-[#ff5722] focus:bg-indigo-100 focus:outline-none">
                    {menu.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-3 lg:flex nav__item">
          <Link href="/donate">
            <span className="px-6 py-2 text-white bg-[#ff5722] rounded-md md:ml-5">
              Contribute
            </span>
          </Link>
          {isLogin ? (<Link href="/dashboard">
            <span className="px-6 py-2 text-white bg-[#ff5722] rounded-md md:ml-5">
              Dashboard
            </span>
          </Link>) :(<Link href="/signup">
            <span className="px-6 py-2 text-white bg-[#ff5722] rounded-md md:ml-5">
              Volunteer 
            </span>
          </Link>)}
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
