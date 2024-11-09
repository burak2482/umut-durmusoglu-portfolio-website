"use client"

import PortfolyoItem from "./PortfolyoItem";
import '../app/globals.css';
import {portfolyo_data} from "@/Assets/assets";
import { useState } from "react";

export default function PortfolyoList({ category, images }) {
  const [menu, setMenu] = useState("Hepsi");

  return (
    <>
      <div>
        <button
          onClick={() => setMenu("Hepsi")}
          className={menu === "Hepsi" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}
        >
          Hepsi
        </button>
        <button
          onClick={() => setMenu("Kitap Kapağı")}
          className={menu === "Kitap Kapağı" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}
        >
          Kitap Kapağı
        </button>
        <button
          onClick={() => setMenu("Logo")}
          className={menu === "Logo" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}
        >
          Logo
        </button>
        <button
          onClick={() => setMenu("Ödül")}
          className={menu === "Ödül" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}
        >
          Ödül
        </button>
        <button
          onClick={() => setMenu("Afiş")}
          className={menu === "Afiş" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}
        >
          Afiş
        </button>
        <button
          onClick={() => setMenu("İlüstrasyon")}
          className={menu === "İlüstrasyon" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}
        >
          İlüstrasyon
        </button>
      </div>

      <div>
        {portfolyo_data.filter((item) => (menu === "Hepsi" ? true : item.category === menu)).map((item, index) => {
            return <PortfolyoItem key={index} images={item.images} category={item.category} />;
          })}
      </div>
    </>
  );
}
