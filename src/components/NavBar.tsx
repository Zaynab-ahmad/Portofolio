"use client";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";

interface NavbarLink {
  label?: string;
  href: string;
  icon?: string;
}

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarLinks: NavbarLink[] = [
    { label: "Home", href: "#home" },
    { label: "Case Studies", href: "#CaseStudies" },
    { label: "Testimonials", href: "#Testimonials" },
    { label: "Recent work", href: "#Recentwork" },
    { label: "Get In Touch", href: "#GetInTouch" },
  ];

  const socialMediaLinks: NavbarLink[] = [
    {
      label: "LinkedIn",
      icon: "FaLinkedinIn",
      href: "https://linkedin.com/yourprofile",
    },
    { label: "WhatsApp", icon: "FaWhatsapp", href: "https://wa.me/yournumber" },
    {
      label: "Github",
      icon: "FaGithub",
      href: "https://github.com/yourusername",
    },
  ];

  // Icon mapping object: Maps string keys to actual components
  const iconMap: { [key: string]: React.ComponentType } = {
    FaLinkedinIn: FaLinkedinIn,
    FaWhatsapp: FaWhatsapp,
    FaGithub: FaGithub,
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="dark:bg-[#1B1B1B] bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Hamburger Button */}
        <div className="text-xl font-bold">My Porotofolio</div>
        <button
          className="lg:hidden text-3xl focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center  justify-around  lg:space-x-8">
          {navbarLinks.map((item, i) => (
            <a key={i} href={item.href} className="hover:text-gray-300">
              {item.label}
            </a>
          ))}
          {socialMediaLinks.map((item, i) => {
            if (!item.icon) return null; // Skip if no icon
            const Icon = iconMap[item.icon]; // Get the component from map
            return (
              <a
                key={i}
                href={item.href}
                className="hover:text-gray-300"
                aria-label={item.label} // For accessibility
              >
                <Icon /> {/* Add class for size/color */}
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-[#1B1B1B] px-4 pb-4">
          <ul className="flex flex-col space-y-4">
            {navbarLinks.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-gray-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
            {socialMediaLinks.map((item, i) => {
              if (!item.icon) return null;
              const Icon = iconMap[item.icon]; // Get the component from map
              return (
                <li key={i}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block hover:text-gray-300 flex items-center" // Flex for icon + label
                    aria-label={item.label}
                  >
                    <Icon /> {/* Icon with margin */}
                    {item.label} {/* Show label on mobile for clarity */}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
