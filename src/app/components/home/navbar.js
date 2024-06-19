import Link from "next/link";
import { Disclosure } from "@headlessui/react";

export default function Navbar({ navigation }) {
  const nav = [
    { name: "About Us", href: "/about-us" },
    { name: "Donators", href: "/donators" },
    { name: "Resource Center", href: "/resource-center" },
    { name: "Contact Us", href: "/contact-us" },
  ];
  if (!navigation) navigation = nav;

  return (
    <div className="w-full z-50 bg-white sticky top-0">
      <nav className="container flex  items-center justify-between px-8 py-4 mx-auto lg:justify-between xl:px-4">
        {/* Logo */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-[#ff5722]">
                    <span>
                      <img
                        src="/logo.png"
                        alt="logo image"
                        className="w-36"
                      />
                    </span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-[#ff5722] focus:text-[#ff5722] focus:bg-indigo-100 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open ? (
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
                </Disclosure.Button>

                <Disclosure.Panel className="flex space-y-3 flex-col w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href={item.href}>
                        <span className="w-full cursor-pointer px-4 py-2 -ml-4 text-gray-500 rounded-md hover:text-[#ff5722] focus:text-[#ff5722] focus:bg-indigo-100 focus:outline-none">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                    <Link href="/contact-us">
                      <span className="w-full cursor-pointer px-4 py-2 -ml-4 text-gray-500 rounded-md hover:text-[#ff5722] focus:text-[#ff5722] focus:bg-indigo-100 focus:outline-none">
                        Contact Us
                      </span>
                    </Link>
                    <Link href="/donate">
                      <button className="w-full px-6 py-2 mt-3 text-center text-white bg-[#ff5722] rounded-md lg:ml-5">
                        Make a Contribution
                      </button>
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* Menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={menu.href}>
                  <span className="inline-block cursor-pointer px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-[#ff5722] focus:text-[#ff5722] focus:bg-indigo-100 focus:outline-none">
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
          <Link href="/signup">
            <span className="px-6 py-2 text-white bg-[#ff5722] rounded-md md:ml-5">
            Volunteer
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
