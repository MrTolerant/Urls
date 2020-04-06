import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'

export const CreatePage = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const [link, setLink] = useState('')
  const { request } = useHttp()

  const pressHandler = async (e) => {
    if (e.key === 'Enter') {
      try {
        const data = await request(
          '/api/link/generate',
          'POST',
          { from: link },
          { Authorization: `Bearer ${auth.token}` }
        )
        history.push(`/detail/${data.link._id}`)
      } catch (error) {}
    }
  }
  return (
    <div className="flex flex-row min-h-screen">
      <div className="flex flex-col  m-auto">
        <div className="mb-4 relative shadow-xl rounded p-4">
          <label
            htmlFor="link"
            className="label  mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-600 text-base mt-2 cursor-text text-lg"
          >
            Enter URL
          </label>
          <input
            className="shadow input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
            id="link"
            placeholder="Enter url"
            onChange={(e) => {
              setLink(e.target.value)
            }}
            name="link"
            value={link}
            onKeyPress={pressHandler}
            type="text"
            autoFocus
          />
        </div>
      </div>
    </div>
  )
}
