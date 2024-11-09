import Image from 'next/image';
import {portfolyo_data} from "@/Assets/assets"
import '../app/globals.css';

export default function PortfolyoItem({category, images, index }) {
  return (
    <div key={index}>
      <img src={images} alt="" width={400} height={400} className="border-1 border-black"/>
      <p className="hidden">{category}</p>
    </div>
  )
}