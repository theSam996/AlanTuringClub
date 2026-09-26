import React, { useState } from 'react';

const NAV_LINKS = [
  { label: 'HOME', href: '#' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EVENTS', href: '#events' },
  { label: 'TEAM', href: '#team' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('HOME');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (label) => {
    setActiveLink(label);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] bg-white border-b border-primary">
      <div className="max-w-[1600px] mx-auto px-4 min-[481px]:px-6 min-[769px]:px-10 py-3 min-[481px]:py-3.5 min-[769px]:py-4 flex justify-between items-center relative">
        {/* Brand / Logo */}
        <div className="flex items-center">
          <a href="#" className="block">
            <img
              src="/ATC LOGO ONLY.svg"
              alt="ATC Alan Turing Logo"
              className="h-[35px] min-[361px]:h-[40px] min-[481px]:h-[50px] w-auto block"
            />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center list-none md:gap-4 min-[993px]:gap-4 min-[1101px]:gap-5 min-[1401px]:gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = activeLink === link.label;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.label)}
                  className={`font-body text-[0.7rem] min-[993px]:text-[0.75rem] font-bold tracking-[2px] min-[993px]:tracking-widest-plus text-primary hover:text-secondary pb-2 transition-colors duration-300 relative uppercase ${
                    isActive
                      ? "after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-[2px] after:bg-primary"
                      : ''
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Nav Actions (CTA + Mobile Toggle) */}
        <div className="flex items-center gap-[15px]">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-pill border border-primary text-primary font-body font-bold text-[0.6rem] min-[361px]:text-[0.65rem] min-[481px]:text-[0.75rem] tracking-[1.5px] min-[481px]:tracking-widest-plus px-2.5 py-1.5 min-[361px]:px-3.5 min-[361px]:py-2 min-[481px]:px-[35px] min-[481px]:py-3 gap-1.5 min-[481px]:gap-3 hover:bg-[#f9f9f9] transition-all duration-300 uppercase cursor-pointer"
          >
            <span className="text-[0.65rem] leading-none">▲</span> JOIN ATC
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="flex md:hidden flex-col justify-between w-6 h-[18px] bg-transparent border-0 cursor-pointer p-0 z-[1001]"
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block w-full h-[2px] bg-primary transition-all duration-300 ${
                isMobileMenuOpen ? 'translate-y-[8px] rotate-45' : ''
              }`}
            />
            <span
              className={`block w-full h-[2px] bg-primary transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-full h-[2px] bg-primary transition-all duration-300 ${
                isMobileMenuOpen ? '-translate-y-[8px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden absolute top-full left-0 w-full bg-white border-b border-primary flex flex-col items-center py-6 gap-5 shadow-[0_10px_25px_rgba(0,0,0,0.06)] list-none z-[1000]">
            {NAV_LINKS.map((link) => {
              const isActive = activeLink === link.label;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.label)}
                    className={`font-body text-[0.75rem] font-bold tracking-widest-plus text-primary hover:text-secondary pb-1 transition-colors duration-300 relative uppercase ${
                      isActive
                        ? "after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-primary"
                        : ''
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
}
