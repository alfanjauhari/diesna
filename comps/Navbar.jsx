import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <nav className="block md:flex px-6 md:px-12 lg:px-24 py-6 bg-white justify-between items-center shadow-lg">
      <div className="flex items-center">
        <button
          className="p-2 rounded bg-gray-300 mr-4 block md:hidden shadow-lg focus:outline-none focus:ring-2"
          onClick={openMenu}
        >
          {isMenuOpen ? (
            <svg
              viewBox="0 0 24 24"
              width={24}
              height={24}
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-900"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width={24}
              height={24}
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-900"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-900 font-bold text-xl">
          Dies Natalis 2021
        </h1>
      </div>
      <ul
        className={
          isMenuOpen
            ? 'block md:flex items-center'
            : 'hidden md:flex items-center'
        }
      >
        <li className="mt-6 mr-0 md:mr-6 md:mt-0">
          <Link href="/" passHref>
            <a className="text-blue-600 hover:text-blue-800 duration-200">
              Home
            </a>
          </Link>
        </li>
        <li className="mt-4 mr-0 md:mr-6 md:mt-0">
          <Link href="/about" passHref>
            <a className="text-blue-600 hover:text-blue-800 duration-200">
              Tentang
            </a>
          </Link>
        </li>
        <li className="mt-4 md:mt-0">
          <Link href="/contact" passHref>
            <a className="text-blue-600 hover:text-blue-800 duration-200">
              Kontak
            </a>
          </Link>
        </li>
      </ul>
      <div
        className={
          isMenuOpen
            ? 'flex items-center mt-6 md:mt-0'
            : 'hidden md:flex items-center'
        }
      >
        <Link href="/login">
          <a className="text-blue-900 font-semibold mr-4 hover:text-blue-800 duration-200">
            Masuk
          </a>
        </Link>
        <button
          type="button"
          className="px-8 py-2 rounded bg-blue-900 text-white font-semibold shadow-lg hover:bg-blue-800 duration-300"
        >
          Daftar
        </button>
      </div>
    </nav>
  );
}
