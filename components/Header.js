"use client"
import Link from 'next/link';
import '../app/globals.css';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <section>
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <span className="font-bold text-2xl text-slate-200">Umut Durmuşoğlu</span>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          {menuOpen && (
            <div className="flex flex-col justify-stretch fixed top-0 left-0 w-full h-full md:hidden bg-white shadow-md">
              <div className="flex justify-between p-4">
                <Link href="/">
                  <span className="font-bold text-3xl text-slate-500">Umut Durmuşoğlu</span>
                </Link>
                <button onClick={() => setMenuOpen(!menuOpen)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              
              <nav className="flex flex-col items-start p-4 space-y-2">
                <Link href="/about">
                  <span className="font-bold text-3xl text-gray-600 hover:text-blue-600">About</span>
                </Link>
                <Link href="/portfoy">
                  <span className="font-bold text-3xl text-gray-600 hover:text-blue-600">Portfoy</span>
                </Link>
                <Link href="/contact">
                  <span className="font-bold text-3xl text-gray-600 hover:text-blue-600">Contact</span>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </section>
      <section>
        <nav className="hidden md:flex space-x-6">
          <Link href="/about">
            <span>About</span>
          </Link>
          <Link href="/portfoy">
            <span>Portfoy</span>
          </Link>
          <Link href="/contact">
            <span>Contact</span>
          </Link>
        </nav>
      </section>
    </header>
  );
}
