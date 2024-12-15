import React from 'react'
import { Link } from 'react-router-dom'

const AdminPanel = () => {
  return (
    <div className="fixed w-full justify-between bg-slate-100 items-center flex flex-row ">
      <div className="justify-start">
      <div className="flex">
        <div className="border-r border-b border-black pr-28 h-20 w-44 md:w-64 flex items-center">
          <h1 className="text-black font-semibold font-customNormal text-lg md:text-2xl text-nowrap ml-3">
            Umut Durmuşoğlu
          </h1>
        </div>
      </div>
      </div>
      <div className="w-36 md:w-full justify-center">
        <h1 className="text-black font-semibold font-customNormal text-md md:text-3xl text-nowrap text-center mt-2">Admin Panel</h1>
      </div>
      <Link to="/" className="px-10 py-2 bg-black text-white text-xl text-nowrap mr-20 font-semibold">Ana Sayfaya Dön</Link>
    </div>
  )
}

export default AdminPanel