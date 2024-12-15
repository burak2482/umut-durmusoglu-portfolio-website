import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { useLogout } from '../hooks/logoutHook';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenTwo, setMenuOpenTwo] = useState(false);
  const {logout} = useLogout()
  const { user } = useAuthContext()

  const handleLogout = () => {
    logout();
  }

  const toggleMenu = () => {
    setMenuOpenTwo(!menuOpenTwo);
  };

  return (
    <header>
      <div className="bg-black flex flex-row justify-between items-center py-3 md:py-4 md:px-16">
        <div>
        <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-600 focus:outline-none"
            >
            <img src='/menu.png' className="w-8 h-8 ml-3"/>
            </button>
        </div>
        <div className='hidden sm:flex flex-row justify-center items-center space-x-4'>
          <Link to='/' className="text-white font-customNormal font-semibold text-lg mr-3">Anasayfa</Link>
          <div className="relative">
              <h1
                className="text-white font-semibold font-customNormal text-lg flex items-center"
                onClick={toggleMenu}
              >
                Tasarımlar
                <img src='/toggledown.png' width={17} height={17} className="ml-1" />
              </h1>
              {menuOpenTwo && (
                <div className="absolute left-0 bg-black text-white rounded-lg shadow-lg mt-2 w-48">
                  <Link to="/portfolio/kitap-kapagi" className="block py-2 px-4 hover:bg-gray-700">Kitap Kapağı</Link>
                  <Link to="/portfolio/logo" className="block py-2 px-4 hover:bg-gray-700">Logo</Link>
                  <Link to="/portfolio/poster" className="block py-2 px-4 hover:bg-gray-700">Poster</Link>
                  <Link to="/portfolio/odul" className="block py-2 px-4 hover:bg-gray-700">Ödül</Link>
                  <Link to="/portfolio/afis" className="block py-2 px-4 hover:bg-gray-700">Afiş</Link>
                  <Link to="/portfolio/illustrasyon" className="block py-2 px-4 hover:bg-gray-700">İllüstrasyon</Link>
                </div>
              )}
            </div>
          <Link to='/pages/iletisim' className="text-white font-semibold font-customNormal text-lg flex items-center ml-4">
            İletişim
          </Link>
        </div>
       </div>
        <div>
          <Link to='/' className="text-white font-customNormal font-extrabold text-2xl md:text-5xl text-center items-center tracking-widest text-nowrap ml-1">Umut Durmuşoğlu</Link>
        </div>
        <div>
          {user && (<div>
            <Link to='/user/portfolyo-list'  className="mr-2 text-lg md:mr-4 md:text-2xl font-semibold px-2 border-4 text-customGreen border-white rounded-sm text-white">Admin Panel</Link>
            <button className="mr-2 text-lg md:mr-16 md:text-2xl font-semibold px-2 border-4 text-customGreen border-white rounded-sm text-white" onClick={handleLogout}>Çıkış yap</button>
          </div>)}
          {!user && (<div className="hidden md:block">
            <Link to="/user/login-page" className="mr-2 text-lg md:mr-16 md:text-2xl font-semibold px-2 border-4 border-white text-white rounded-sm">Giriş Yap</Link>
          </div>)}
        </div>
        {menuOpen && (
            <div className="flex flex-col justify-stretch fixed top-0 left-0 w-full h-full md:hidden bg-black shadow-md">
              <div className="flex justify-between p-4 border-b py-5">
                <Link href="/" className="">
                  <span className="text-3xl text-white font-customInter text-nowrap ">Umut Durmuşoğlu</span>
                </Link>
                <button onClick={() => setMenuOpen(!menuOpen)}>
                  <img src='./close.png' width={30} height={30}/>
                </button>
              </div>
              
              <nav className="flex flex-col items-start p-4 space-y-2 mt-3">
                <div className="relative">
                <Link onClick={toggleMenu} className='mt-4 mb-5'>
                  <span className="font-customNormal text-3xl text-white flex mb-5">Tasarımlar</span>
                </Link>
                {menuOpenTwo && (
                  <div className="bg-black text-white rounded-lg shadow-lg mt-2 w-48">
                    <Link to="/portfolio/kitap-kapagi" className="block py-2 px-4 hover:bg-gray-700">Kitap Kapağı</Link>
                    <Link to="/portfolio/logo" className="block py-2 px-4 hover:bg-gray-700">Logo</Link>
                    <Link to="/portfolio/poster" className="block py-2 px-4 hover:bg-gray-700">Poster</Link>
                    <Link to="/portfolio/odul" className="block py-2 px-4 hover:bg-gray-700">Ödül</Link>
                    <Link to="/portfolio/afis" className="block py-2 px-4 hover:bg-gray-700">Afiş</Link>
                    <Link to="/portfolio/illustrasyon" className="block py-2 px-4 hover:bg-gray-700">İllüstrasyon</Link>
                   </div>
                )}
                </div>
                <Link href="/koleksiyonlar" className='mt-4'>
                  <span className="font-customNormal text-3xl text-white">İletişim</span>
                </Link>
              </nav>
            </div>
          )}
      </div>
    </header>
  )
}

export default Navbar
