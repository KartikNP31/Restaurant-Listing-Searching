import React from "react";
import { Disclosure } from "@headlessui/react";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Location Search", href: "/locationSearch", current: false },
  { name: "Image Search", href: "/imageSearch", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-gradient-to-tl from-transparent to-black">
      <Disclosure as="nav" className="bg-transparant">
          <div className="relative flex h-16 items-center ">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start md:justify-center lg:justify-center">
              <div className="flex flex-shrink-0 items-center">
                <img
                  alt="Zomato"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
                  className="h-12 sm:w-auto lg:w-[3vw]"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "text-gray-100" // Bold and larger text for current page
                          : "text-white",
                        "rounded-md px-3 py-2 text-bold text-lg"
                      )}
                    >
                      <strong>{item.name}</strong>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
      </Disclosure>
    </div>
  );
};

export default Navbar;
