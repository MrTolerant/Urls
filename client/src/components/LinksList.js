import React from 'react'
import { Link } from 'react-router-dom'

export const LinksList = ({ links }) => {
  return (
    <div className="flex flex-row min-h-screen overflow-hidden">
      <div className="flex flex-col m-auto">
        <div className="mb-4  shadow-xl rounded p-6   m-auto rounded">
          {!links.length ? (
            <p>The is no URLs</p>
          ) : (
            <table className="border-collapse w-full">
              <thead>
                <tr>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    №
                  </th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Origin
                  </th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Shortened
                  </th>
                  <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {links.map((link, index) => {
                  return (
                    <tr
                      key={link._id}
                      className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
                    >
                      <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                          №
                        </span>
                        {index + 1}
                      </td>
                      <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                          Origin
                        </span>
                        {link.from}
                      </td>
                      <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                          Shortened
                        </span>
                        <a
                          className="text-lg text-blue-600"
                          href={link.to}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="rounded text-red-400 py-1 px-3 text-xs font-bold">
                            {link.to}
                          </span>
                        </a>
                      </td>
                      <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                          Action
                        </span>
                        <Link
                          to={`/detail/${link._id}`}
                          className="text-blue-400 hover:text-blue-600 underline"
                        >
                          Open
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
