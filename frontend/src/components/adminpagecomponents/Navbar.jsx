import React from 'react'

const AdminPanel = () => {
  return (
    <div className="justify-between bg-slate-100 items-center flex flex-row ">
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
        <h1 className="text-black font-semibold font-customNormal text-md md:text-3xl text-nowrap text-center">Admin Panel</h1>
      </div>
    </div>
  )
}

export default AdminPanel