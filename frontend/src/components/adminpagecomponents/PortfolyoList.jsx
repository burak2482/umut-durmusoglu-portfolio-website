import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext';

const PortfolyoList = () => {
  const [turler, setTurler] = useState('');
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [portfolyolar, setPortfolyolar] = useState([]);

  const {user} = useAuthContext()



  const fetchPortfolyo = async () => {
    try {
      const response = await axios.get('http://localhost:5000/portfolio/get', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(response.data);
      setPortfolyolar(response.data);
    } catch (err) {
      console.log('Error while fetching:', err);
    }
  };

  useEffect(() => {
    fetchPortfolyo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!user) {
      console.log('Bu işlemi yapabilmek için giriş yapmış olmalısın')
    }

    if (!name || !photo || !turler) {
      console.error('All fields are required!');
      return;
    }
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('photo', photo);
    formData.append('turler', turler);
  
    try {
      const response = await axios.post(
        'http://localhost:5000/portfolio/add',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
  
      console.log('Portfolyo added', response.data);
  
      setPortfolyolar((prev) => [...prev, response.data]);
  
      setName('');
      setPhoto(null);
      setTurler('');
    } catch (err) {
      console.log('Error:', err.response?.data || err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/portfolio/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setPortfolyolar((prevPortfolyolar) =>
        prevPortfolyolar.filter((portfolyo) => portfolyo.id !== id)
      );
      fetchPortfolyo();
      console.log("Portfolio deleted successfully");
    } catch (error) {
      console.error("Error deleting portfolio:", error.response?.data || error.message);
    }
  };


  return (
    <main className="bg-white min-h-screen w-full flex flex-col justify- items-center">
      <section className="flex justify-center items-center">
        <form onSubmit={handleSubmit} className="bg-slate-50 flex flex-col gap-2 py-24 px-44 text-black rounded-3xl">
          <h1 className="text-center font-semibold text-2xl mb-10 underline">Portfolyo Oluştur</h1>
          <label className="font-medium font-customNormal text-xl">Ad</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="bg-slate-200 rounded-xl mb-10 px-3 text-sm font-semibold py-1"
            placeholder='Portfolyo öğesine girilecek ad'
          />
          
          <label className="font-medium font-customNormal text-xl">Fotoğraf</label>
            <input 
              type="file" 
              onChange={(e) => setPhoto(e.target.files[0])} 
              className="bg-slate-200 mb-10 rounded-lg "
            />
            
          <label className="font-medium font-customNormal text-xl">Tür</label>
          <select 
            value={turler} 
            onChange={(e) => setTurler(e.target.value)} 
            className="bg-slate-200 font-semibold rounded-lg py-1"
          >
            <option value="">Bir tür seç</option>
            <option value="Kitap Kapağı">Kitap Kapağı</option>
            <option value="Logo">Logo</option>
            <option value="Ödül">Ödül</option>
            <option value="Afiş">Afiş</option>
            <option value="Poster">Poster</option>
            <option value="İllüstrasyon">İllüstrasyon</option>
          </select>
          
          <button type="submit" className="bg-neutral-800 text-white font-semibold py-2 px-2 mt-2 rounded-full text-xl mt-10">Ekle</button>
        </form>
      </section>

      <section className="flex items-center justify-center h-full w-full">
        <div className="flex items-center justify-center h-full w-1/4 rounded mt-7">
          <table className="w-1/4 h-full bg-slate-50">
            <thead>
              <tr>
                <th className="border py-3 md:py-6 text-center">Ad</th>
                <th className="border py-3 md:py-6 text-center">Türü</th>
                <th className="border py-3 md:py-6 text-center">Fotoğraf</th>
              </tr>
            </thead>
            <tbody>
              {portfolyolar && portfolyolar.length > 0 ? (
                portfolyolar.map((portfolyo) => (
                  <tr key={portfolyo.id || portfolyo._id || index}>
                    <td className="border px-2 md:px-9 font-semibold py-2 md:py-4">{portfolyo.name}</td>
                    <td className="border px-2 md:px-9 font-semibold py-2 md:py-4">{portfolyo.turler}</td>
                    <td className="border px-2 md:px-16 font-semibold py-2 md:py-4 ">
                      <img src={`/portfolyophotos/${portfolyo.photo}`} alt={portfolyo.name} className="w-full block h-14 object-cover"></img>
                    </td>
                    <td>
                      <button
                          className="bg-black text-white font-semibold py-1 px-4 mt-10 mr-2 ml-2 text-center text-nowrap"
                          onClick={() => handleDelete(portfolyo._id)}
                        >
                          Portfolyo Sil
                        </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center font-semibold py-4">
                    Herhangi bir portfolyo yok.
                  </td>
               </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default PortfolyoList;
