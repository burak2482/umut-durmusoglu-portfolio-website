import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <footer className="bottom-0 left-0 w-full bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="w-full max-w-md p-4 bg-black rounded-lg mx-auto md:hidden">
          {/* Accordion Item 1 */}
          <div className="">
            <button
              className="flex justify-between w-full p-4 text-left text-white font-semibold focus:outline-none"
              onClick={() => toggleAccordion(0)}
            >
              <span className="font-white font-customNormal text-xl">Tasarımlar</span>
              <svg
                className={`w-5 h-5 transition-transform transform ${
                  activeIndex === 0 ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`px-4 py-1 text-white ${
                activeIndex === 0 ? 'block' : 'hidden'
              }`}
            >
              <Link to="/portfolyo/kitap-kapagi" className="block text-white font-customNormal text-sm mb-3">
                Kitap Kapağı
              </Link>
              <Link to="/portfolyo/logo" className="block text-white font-customNormal text-sm mb-3">
                Logo
              </Link>
              <Link to="/portfolyo/afis" className="block text-white font-customNormal text-sm mb-3">
                Afiş
              </Link>
              <Link to="/portfolyo/poster" className="block text-white font-customNormal text-sm mb-3">
                Poster
              </Link>
              <Link to="/portfolyo/odul" className="block text-white font-customNormal text-sm mb-3">
                Ödül
              </Link>
              <Link to="/portfolyo/ilustrasyon" className="block text-white font-customNormal text-sm mb-3">
                İlüstrasyon
              </Link>
            </div>
          </div>

          {/* Accordion Item 4 */}
            <div className="">
              <button
                className="flex justify-between w-full p-4 text-left text-white font-semibold focus:outline-none"
                onClick={() => toggleAccordion(3)}
              >
                <span className="font-white font-customNormal text-xl">İletişim</span>
                <svg
                  className={`w-5 h-5 transition-transform transform ${
                    activeIndex === 3 ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-4 py-1 text-gray-600 flex flex-col ${
                  activeIndex === 3 ? 'block' : 'hidden'
                }`}
              >
                <Link to="/pages/kargo" className="block text-white font-customNormal text-sm mb-3">
                  umutdworks@gmail.com
                </Link>
                <Link to="/pages/gizlilik-sozlesmesi" className="block text-white font-customNormal text-sm mb-3">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>

           {/* Desktop Items */}
           <div className="flex flex-col justify-center items-center hidden w-full md:flex">
          <div className="flex flex-row justify-center items-start w-full px-40 ml-20">
            <div className="flex flex-col justify-start items-start w-full mt-4">
              <h4 className="text-lg font-bold">Tasarımlar</h4>
              <div className="mt-2">
                <Link to="/portfolyo/kitap-kapagi" className="block text-white font-customNormal text-sm mb-3">
                  Kitap Kapağı
                </Link>
                <Link to="/portfolyo/logo" className="block text-white font-customNormal text-sm mb-3">
                  Logo
                </Link>
                <Link to="/portfolyo/odul" className="block text-white font-customNormal text-sm mb-3">
                  Ödül
                </Link>
                <Link to="/portfolyo/afis" className="block text-white font-customNormal text-sm mb-3">
                  Afiş
                </Link>
                <Link to="/portfolyo/ilustrasyon" className="block text-white font-customNormal text-sm mb-3">
                  İlüstrasyon
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start w-full mt-4">
              <h4 className="text-lg font-bold">İletişim</h4>
              <div className="mt-2">
                <Link to="/pages/iletisim" className="block text-white font-customNormal text-sm mb-3">
                  umutdworks@gmail.com
                </Link>
                <Link to="/pages/sorular" className="block text-white font-customNormal text-sm mb-3">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="text-center mt-8 flex flex-row w-full border-t-2 border-white border-solid">
              <p className='font-customNormal text-white text-sm mt-3 ml-2'>&copy; 2024 <span>SOUL</span> Tüm haklar saklıdır.</p>
            </div>
    </footer>
  );
};

export default Footer;
