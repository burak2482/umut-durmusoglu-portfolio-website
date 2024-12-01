"use client"
import React from 'react'
import Image from 'next/image';
import assets from '@assets/assets';
import { useState } from 'react';


const page = () => {

  const [image, setImage ] = useState(false);
  const [data , setData ] = useState({
    title:"",
    category:"",
  })
  
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
    console.log(data)
  }


  return (
    <div>
      <form>
        <p className="text-xl">Portfolyo Fotoğrafı Yükle</p>
        <label hmtlFor="image">
          <Image className="mt-4" src={!image?assets.upload_area:URL.createObject(image)} width={140} height={70} />
        </label>
        <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required></input>
        <p className="text-xl mt-4">Portfolyo Öğesi Adı</p>
        <input name="title" onChange={onChangeHandler} value={data.title} className="w-full mt-4 px-4 py-3 border" type="text" placeholder="Öğenin Adı"></input>
        <p className="text-xl mt-4">Portfolyo Öğesi Adı</p>
        <input className="w-full mt-4 px-4 py-3 border" type="text" placeholder="Öğenin Adı"></input>
        <p className="text-xl mt-4">Portfolyo Kategorisi</p>
        <select name="category" onChange={onChangeHandler} value={data.category} className="w-40 mt-4 px-4 py-3 border text-gray-500">
          <option value="Kitap Kapağı">Kitap Kapağı</option>
          <option value="Logo">Logo</option>
          <option value="Ödül">Ödül</option>
          <option value="Afiş">Afiş</option>
          <option value="İlüstrasyon">İlüstrasyon</option>
        </select>
        <br></br>
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">EKLE</button>
      </form>
    </div>
  )
}

export default page
