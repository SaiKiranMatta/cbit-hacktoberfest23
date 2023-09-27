"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image"; // Import Image from Next.js

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/", section: "home" },
    { name: "About", link: "/#about", section: "about" },
    { name: "Schedule", link: "/#schedule", section: "schedule" },
    { name: "Mentors", link: "/#mentors", section: "mentors" },
    { name: "Contact", link: "/#contact", section: "contact" },
    { name: "Register", link: "/register", section: "register" },
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const pathname = usePathname();

  // Helper function to get the active section/page
  const getActiveSection = () => {
    const sections = document.querySelectorAll(".section");
    for (const section of sections) {
      const sectionTop = section.getBoundingClientRect().top - 10000;
      const sectionBottom = section.getBoundingClientRect().bottom;
      if (sectionTop <= 0 && sectionBottom >= 0) {
        return section.id;
      }
    }

    return null;
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollDownOnLoad = () => {
    const scrollAmount = 1; // Adjust this value as needed
    window.scrollBy(0, scrollAmount);
  };

  const handleLink = (event, link) => {
    event.preventDefault();
    window.location.href = link;
    scrollDownOnLoad();
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const activeSection = getActiveSection();

      setActiveSection(activeSection);

      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full bg-void px-4 text-md py-1 text-bblue-200 flex justify-center">
        <span className="shimmer">Learn. Code. Share.</span>
      </div>
      <div
        className={`${
          isSticky
            ? "sticky top-0 h-16 backdrop-blur-3xl bg-[#0f0913] bg-opacity-70 shadow-md navbar-ios"
            : "bg-void"
        } left-0 h-16 py-2 px-4 flex justify-between items-center w-full transition-all duration-300 z-10 text-2xl `}
        style={{
          "z-index": 2,
        }}
      >
        <div className="flex items-center">
          <Link href="/" className=" flex items-center">
            <Image
              src="/images/hf10iconCrop.png" // Replace with your logo image path
              width={51}
              height={45}
              alt="Hf10 Logo"
              style={{ padding: 0, scale: 1.0 }}
            />
            <div className="w-[1px] h-5 bg-[#efedef] mx-2"></div>
            <div className="relative w-10 h-10">
              {isSticky ? (
                <div>
                  <Image
                    src="/images/LogoCOSCRing.svg" // Replace with your logo image path
                    layout="fill"
                    alt="Sticky Logo"
                    style={{
                      transition: "opacity 0.3s ease-in-out",
                      opacity: 1,
                    }}
                  />
                  <Image
                    src="/images/LogoCOSC.png" // Replace with your logo image path
                    layout="fill"
                    alt="Normal Logo"
                    style={{
                      transition: "opacity 0.3s ease-in-out",
                      opacity: 0,
                    }}
                  />
                </div>
              ) : (
                <div>
                  <Image
                    src="/images/LogoCOSCRing.svg" // Replace with your logo image path
                    layout="fill"
                    alt="Sticky Logo"
                    style={{
                      transition: "opacity 0.3s ease-in-out",
                      opacity: 0,
                    }}
                  />
                  <Image
                    src="/images/LogoCOSC.png" // Replace with your logo image path
                    layout="fill"
                    alt="Normal Logo"
                    style={{
                      transition: "opacity 0.3s ease-in-out",
                      opacity: 1,
                    }}
                  />
                </div>
              )}
            </div>
          </Link>
        </div>
        <div className="md:flex hidden px-4">
          <ul className="md:flex md:items-center">
            {Links.map((link, index) => (
              <li
                key={index}
                className={`md:mx-2 ${
                  (pathname === "/register" && link.link == "/register") ||
                  (pathname === "/" && link.section == activeSection)
                    ? " text-bblue-200" // Apply 'active' class to the current page or section
                    : ""
                }`}
              >
                <Link
                  href={link.link}
                  onClick={(event) => handleLink(event, link.link)}
                  className=" text-xl"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-[#0f0913] py-2 px-4 rounded-lg">
            <ul>
              {Links.map((link, index) => (
                <li key={index} className="my-2 ">
                  <Link
                    href={link.link}
                    onClick={(event) => handleLink(event, link.link)}
                    className="hover:text-[#d2b863] duration-300 text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
