'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center transition-all duration-700">
      {/* Brand Name */}
      <h1 className="text-yellow-500 ml-4 font-bold italic">WatchStore</h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-10">
        <Link href="/home">
          <span className="text-white text-lg italic hover:underline">Home</span>
        </Link>
        <Link href="/about">
          <span className="text-white text-lg italic hover:underline">About</span>
        </Link>
        <Link href="/watches">
          <span className="text-white text-lg italic hover:underline">Watches</span>
        </Link>
        <Link href="/contact">
          <span className="text-white text-lg italic hover:underline">Contact</span>
        </Link>
        <FaShoppingCart className="text-white mt-2 text-2xl" />
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <HiMenuAlt3
          className="text-white text-3xl cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-blue-500 p-5 z-20 md:hidden">
          {/* Close Icon */}
          <div className="flex justify-end">
            <HiX
              className="text-white text-3xl cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex flex-col items-start gap-5 text-white font-bold mt-5">
            <Link href="/home" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/about" onClick={closeMenu}>
              About
            </Link>
            <Link href="/watches" onClick={closeMenu}>
              Watches
            </Link>
            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>
            <FaShoppingCart className="text-white text-xl" />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
