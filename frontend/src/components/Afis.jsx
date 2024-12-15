import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const Afis = () => {

  const [portfolyolar, setPortfolyolar] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedImage, setSelectedImage] = useState(null);
 
  const fetchPortfolyo = async (tur) => {

    try {
      const response = await axios.get(`http://localhost:5000/portfolio/afis`);
      console.log('Fetched Portfolyolar:', response.data);
      setPortfolyolar(response.data);
    } catch (err) {
      console.log('Error fetching Portfolyolar:', err);
    }
  };

  useEffect(() => {
    fetchPortfolyo()
  }, []);


  const handleLoadMore = async () => {
    setVisibleCount((prevCount) => prevCount + 6)
  }



  return (
    <div className="bg-neutral-100 h-full w-full min-h-screen">
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 gap-x-9 px-10 sm:px-20 md:px-72 justify-items-center items-center">
      {portfolyolar.filter((item) => item.turler === "Afiş").slice(0, visibleCount).map((item, index) => (
        <div key={item.id || item._id || index} className="portfolio-item">
         <img src={`/portfolyophotos/${item.photo}`} alt={item.name} className="w-36 h-36 md:w-72 md:h-72 object-cover md:mb-20 md:mt-10"  onClick={() => setSelectedImage(item.photo)}/>
         </div>
       ))}

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

      {visibleCount < portfolyolar.length &&(
        <div className="flex justify-center mt-10">
          <button onClick={handleLoadMore} className="bg-neutral-800 text-white font-semibold text-xl py-4 px-20 rounded-lg mb-20 mt-10">Daha fazla yükle</button>
        </div>
      )}
    </div>
    </div>
  )
}

export default Afis
