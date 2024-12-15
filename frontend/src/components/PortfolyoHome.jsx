import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthContext } from '../hooks/useAuthContext';

function Home() {
  const [portfolyolar, setPortfolyolar] = useState([]);
  const [menu, setMenu] = useState('Hepsi');
  const [selectedImage, setSelectedImage] = useState(null);

  const [visibleCount, setVisibleCount] = useState(6);


  const {user} = useAuthContext();


  const fetchPortfolyo = async () => {
    try {
      const response = await axios.get('http://localhost:5000/portfolio/get');
      console.log('Fetched Portfolyolar:', response.data);
      setPortfolyolar(response.data);
    } catch (err) {
      console.log('Error fetching Portfolyolar:', err);
    }
  };
  

  useEffect(() => {
    fetchPortfolyo();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((previousCount) => previousCount + 6);
  }

  return (
    <div className="bg-neutral-100 h-full w-full min-h-screen">
      <div className="flex flex-row justify-center items-center w-ful h-full">
        <div className="ml-2 md:ml-0 md:flex md:flex-row md:justify-center md:items-center mt-20">
        <div className="ml-7 md:ml-0 mb-5">
            <button
            onClick={() => setMenu('Hepsi')}
              className={`mr-3 ${menu === 'Hepsi' ? 'bg-white text-black font-semibold py-1 px-4 rounded-sm' : 'bg-slate-200 py-1 px-4 rounded-sm font-semibold'}`}
            >
              Hepsi
            </button>
            <button
              onClick={() => setMenu('Kitap Kapağı')}
              className={`mr-3 ${menu === 'Kitap Kapağı' ? 'bg-white text-black font-semibold py-1 px-4 rounded-sm' : 'bg-slate-200 py-1 px-4 rounded-sm font-semibold'}`}
            >
              Kitap Kapağı
            </button>
            <button
              onClick={() => setMenu('Logo')}
              className={`mr-3 ${menu === 'Logo' ? 'bg-white text-black font-semibold py-1 px-4 rounded-sm' : 'bg-slate-200 py-1 px-4 rounded-sm font-semibold'}`}
            >
              Logo
            </button>
          </div>
          <div className="mb-5">
            <button
              onClick={() => setMenu('Poster')}
              className={`mr-3 ${menu === 'Poster' ? 'bg-white text-black font-semibold py-1 px-4 rounded-sm' : 'bg-slate-200 py-1 px-4 rounded-sm font-semibold'}`}
            >
              Poster
            </button>
            <button
              onClick={() => setMenu('Ödül')}
              className={`mr-3 ${menu === 'Ödül' ? 'bg-white text-black font-semibold py-1 px-4 rounded-sm' : 'bg-slate-200 py-1 px-4 rounded-sm font-semibold'}`}
            >
              Ödül
            </button>
            <button
              onClick={() => setMenu('Afiş')}
              className={`mr-3 ${menu === 'Afiş' ? 'bg-white text-black font-semibold py-1 px-4 rounded-sm' : 'bg-slate-200 py-1 px-4 rounded-sm font-semibold'}`}
            >
              Afiş
            </button>
            <button
              onClick={() => setMenu('İllüstrasyon')}
              className={`mr-3 ${menu === 'İllüstrasyon' ? 'bg-white text-black font-semibold py-1 px-4 rounded-sm' : 'bg-slate-200 py-1 px-4 rounded-sm font-semibold'}`}
            >
              İllüstrasyon
            </button>
          </div>
        </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 gap-x-9 px-10 sm:px-20 md:px-72 justify-items-center items-center mt-10">
        {portfolyolar
          .filter((item) => (menu === 'Hepsi' ? true : item.turler === menu))
          .slice(0, visibleCount)
          .map((item, index) => (
            <div key={item.id || item._id || index} className="portfolio-item">
              <img src={`/portfolyophotos/${item.photo}`} alt={item.name} className="w-36 h-36 md:w-72 md:h-72 object-cover md:mb-20"  onClick={() => setSelectedImage(item.photo)}/>
            </div>
          ))}
      </div>

      {visibleCount < portfolyolar.length &&(
        <div className="flex justify-center mt-10">
          <button onClick={handleLoadMore} className="bg-neutral-800 text-white font-semibold text-xl py-4 px-20 rounded-lg mb-20 mt-10">Daha fazla yükle</button>
        </div>
      )}

      {selectedImage && (
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
        onClick={() => setSelectedImage(null)}
      >
        <img
          src={`/portfolyophotos/${selectedImage}`}
          alt="Selected"
          className="max-w-full max-h-full"
        />
      </div>
    )}

    </div>
  );
}

export default Home;