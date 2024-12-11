import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthContext } from '../hooks/useAuthContext';

function Home() {
  const [portfolyolar, setPortfolyolar] = useState([]);
  const [menu, setMenu] = useState('Hepsi');

  const {user} = useAuthContext();


  const fetchPortfolyo = async () => {
    try {
      const response = await axios.get('http://localhost:5000/portfolio/get', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log('Fetched Portfolyolar:', response.data);
      setPortfolyolar(response.data);
    } catch (err) {
      console.log('Error fetching Portfolyolar:', err);
    }
  };
  

  useEffect(() => {
    fetchPortfolyo();
  }, []);

  return (
    <div className="bg-neutral-100 h-full w-full min-h-screen">
      <div className="items-center justify-center flex flex-row">
        <div className="mt-20">
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
            onClick={() => setMenu('İlüstrasyon')}
            className={`mr-3 ${menu === 'İlüstrasyon' ? 'bg-white text-black font-semibold py-1 px-4 rounded-sm' : 'bg-slate-200 py-1 px-4 rounded-sm font-semibold'}`}
          >
            İlüstrasyon
          </button>
        </div>
        </div>

      <div className="grid grid-cols-3 gap-4 justify-items-center items-center mt-28">
        {portfolyolar
          .filter((item) => (menu === 'Hepsi' ? true : item.turler === menu))
          .map((item, index) => (
            <div key={item.id || item._id || index} className="portfolio-item">
              <img src={`/portfolyophotos/${item.photo}`} alt={item.name} className="w-40 h-40 object-cover" />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;