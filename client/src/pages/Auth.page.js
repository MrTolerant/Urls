import React, { useState } from 'react'
import useHttp from '../hooks/http.hook'
export const AuthPage = () => {
  const { loading, error, request } = useHttp()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form })
      console.log('DATA', data)
    } catch (error) {}
  }
  return (
    <div className="flex flex-row h-screen my-auto">
      <div className="flex flex-col mx-auto">
        <p className="text-6xl text-gray-800 font-black text-center">Short you URL</p>
        <div className="my-auto shadow-xl p-10 bg-white max-w-xl rounded">
          <h1 className="text-4xl text-gray-800 font-black mb-4">Login</h1>
          <div className="mb-4 relative">
            <label
              htmlFor="email"
              className="label  mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text"
            >
              Email Address
            </label>
            <input
              className="shadow input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
              id="email"
              onChange={changeHandler}
              type="text"
              autoFocus
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="label mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text"
            >
              Password
            </label>
            <input
              className="shadow input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
              id="password"
              onChange={changeHandler}
              disabled={loading}
              type="password"
              autoFocus
            />
          </div>
          <div className="flex justify-between">
            <button className="shadow-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded focus:outline-none">
              Login
            </button>
            <button
              onClick={registerHandler}
              disabled={loading}
              className="shadow-xl bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded focus:outline-none"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
