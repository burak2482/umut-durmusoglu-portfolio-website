import React, { useState } from 'react'
import { useLogin } from '../hooks/loginHook';

const AdminLoginPage = () => {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)

  }

  return (
    <div className="bg-white min-h-screen w-full flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit} className="bg-slate-50 flex flex-col gap-2 py-24 text-black px-36 rounded-3xl">
          <h1 className="text-2xl font-customNormal font-semibold text-center mb-10">Giriş Ekranı</h1>
          <label className="text-2xl font-customNormal font-medium">Kullanıcı Adı</label>
          <input type="text" placeholder='Kullanıcı adınız' className="text-base rounded-xl py-1 px-4" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <label className="text-2xl font-customNormal font-medium mt-5">Şifre</label>
          <input type="password" placeholder='Şifreniz' className="rounded-xl px-4 py-1" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <button type="submit" className="py-1 font-customNormal bg-neutral-800 px-28 text-white text-xl rounded-full mt-5">Giriş yap</button>
          {error && <div className="border-2 border-red-400 bg-red-200 font-semibold rounded-sm py-1 px-2 mt-3">{error}</div>}
        </form>
      </div>
    </div>
  )
}

export default AdminLoginPage
