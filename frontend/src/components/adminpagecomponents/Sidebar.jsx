import React from 'react'
import { Link } from 'react-router-dom'


const AdminPanel = () => {
  return (
    <div className="fixed top-20 left-0 border-r bg-slate-200 border-black w-44 md:w-64 h-full">
      <div className="grid grid-cols-1 gap-y-4">
        <Link 
          to="/user/portfolyo-list" 
          className="flex justify-center items-center w-full h-16 bg-slate-800 font-customNormal text-white font-medium text-lg tracking-wide text-nowrap mt-5 underline">
          <img 
            src="/add.png" 
            alt="Add Icon" 
            width="16" 
            height="16" 
            className="mr-2"
          />
          Portfolyo Ekle/Sil
      </Link>
       <Link 
          to="/user/account-edit" 
          className="flex justify-center items-center w-full h-16 bg-slate-800 font-customNormal text-white font-medium text-lg tracking-wide text-nowrap underline">
           <img 
            src="/person.png" 
            alt="Person Icon" 
            width="16" 
            height="16" 
            className="mr-2"
          />
          Hesap İşlemleri
       </Link>
      </div>
    </div>
  )
}

export default AdminPanel