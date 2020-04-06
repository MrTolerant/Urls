import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const NavBar = () => {
  const auth = useContext(AuthContext)
  const history = useHistory()
  const logoutHandler = (event) => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  return (
    <div className="bg-gray-100 shadow-xl rounded w-screen flex flex-row items-center p-1  bg-white shadow-xs">
      <div className="ml-8 text-lg text-gray-700 hidden md:flex">
        <a href="/">URL shortener</a>
      </div>
      <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
        <i className="fas fa-bars"></i>
      </div>
      <div className="flex flex-row mr-8 hidden md:flex justify-start">
        <NavLink to="/create">
          <div className="shadow-xl rounded text-gray-700 text-center bg-gray-300 px-4 py-2 m-2">
            Create
          </div>
        </NavLink>
        <NavLink to="/links">
          <div className="shadow-xl rounded text-gray-700 text-center bg-gray-300 px-4 py-2 m-2">
            Links
          </div>
        </NavLink>
      </div>
      <div className="ml-auto flex flex-row mr-8 hidden md:flex justify-end">
        <button type="button" onClick={logoutHandler}>
          <div className="shadow-xl rounded text-gray-700 text-center bg-gray-300 px-4 py-2 m-2">
            Logout
          </div>
        </button>
      </div>
    </div>
  )
}
