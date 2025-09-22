"use client";
import React, { useState, useRef, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";

interface NavbarLink {
  label?: string;
  href: string;
  icon?: string;
}

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null); // Ref for dropdown

  const navbarLinks: NavbarLink[] = [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Get In Touch", href: "#GetInTouch" },
  ];

  const socialMediaLinks: NavbarLink[] = [
    {
      label: "LinkedIn",
      icon: "FaLinkedinIn",
      href: "www.linkedin.com/in/zeinab-ahmad-0b25561b2",
    },
    {
      label: "WhatsApp",
      icon: "FaWhatsapp",
      href: "https://wa.me/963969108928",
    },
    {
      label: "Github",
      icon: "FaGithub",
      href: "https://github.com/Zaynab-ahmad",
    },
  ];

  const iconMap: { [key: string]: React.ComponentType } = {
    FaLinkedinIn: FaLinkedinIn,
    FaWhatsapp: FaWhatsapp,
    FaGithub: FaGithub,
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="dark:bg-[#1B1B1B] bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <div className="text-xl font-bold">My Portfolio</div>
        <button
          className="lg:hidden text-3xl focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center justify-around lg:space-x-8">
          {navbarLinks.map((item, i) => (
            <a key={i} href={item.href} className="hover:text-gray-300">
              {item.label}
            </a>
          ))}
          {socialMediaLinks.map((item, i) => {
            if (!item.icon) return null;
            const Icon = iconMap[item.icon];
            return (
              <a
                key={i}
                href={item.href}
                className="hover:text-gray-300"
                aria-label={item.label}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          ref={menuRef}
          className="lg:hidden bg-white dark:bg-[#1B1B1B] px-4 pb-4"
        >
          <ul className="flex flex-col justify-center items-center space-y-4">
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
              const Icon = iconMap[item.icon];
              return (
                <li key={i}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex justify-between hover:text-gray-300 gap-2 items-center"
                    aria-label={item.label}
                  >
                    <Icon />
                    {item.label}
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
