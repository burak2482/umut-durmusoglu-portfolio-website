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
            <img src='/menu.png' width={50} height={50}/>
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
                  <Link to='/tasarımlar/kitap-kapagi' className="block py-2 px-4 hover:bg-gray-700">Kitap Kapağı</Link>
                  <Link to='/tasarımlar/ilustrasyon' className="block py-2 px-4 hover:bg-gray-700">İllüstrasyon</Link>
                  <Link to='/tasarımlar/web-design' className="block py-2 px-4 hover:bg-gray-700">Web Design</Link>
                </div>
              )}
            </div>
          <Link to='/pages/iletisim' className="text-white font-semibold font-customNormal text-lg flex items-center ml-4">
            İletişim
          </Link>
        </div>
       </div>
        <div>
          <Link to='/' className="text-white font-customNormal font-extrabold text-5xl md:text-5xl text-center items-center tracking-widest ml-1">Umut Durmuşoğlu</Link>
        </div>
        <div>
          {user && (<div>
            <Link to='/user/portfolyo-list'  className="mr-2 text-lg md:mr-4 md:text-2xl font-semibold px-2 border-4 text-customGreen border-white rounded-sm text-white">Admin Panel</Link>
            <button className="mr-2 text-lg md:mr-16 md:text-2xl font-semibold px-2 border-4 text-customGreen border-white rounded-sm text-white" onClick={handleLogout}>Çıkış yap</button>
          </div>)}
          {!user && (<div>
            <Link to="/user/login-page" className="mr-2 text-lg md:mr-16 md:text-2xl font-semibold px-2 border-4 border-white text-white rounded-sm">Giriş Yap</Link>
          </div>)}
        </div>
        {menuOpen && (
            <div className="flex flex-col justify-stretch fixed top-0 left-0 w-full h-full md:hidden bg-pink-100 shadow-md">
              <div className="flex justify-between p-4">
                <Link href="/">
                  <span className="text-3xl text-white font-customInter">Umut Durmuşoğlu</span>
                </Link>
                <button onClick={() => setMenuOpen(!menuOpen)}>
                  <img src='./close.png' width={30} height={30}/>
                </button>
              </div>
              
              <nav className="flex flex-col items-start p-4 space-y-2 mt-3">
                <Link href="/" className='mt-4'>
                  <span className="font-customNormal text-3xl text-white">Tasarımlar</span>
                </Link>
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
