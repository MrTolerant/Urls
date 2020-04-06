import React from 'react'

export const LinkCard = ({ link }) => {
  return (
    <div className="flex flex-row min-h-64 my-auto">
      <div className="flex flex-col m-auto">
        <div className="">
          <p className="text-4xl font-black text-center">Link</p>
          <p className="text-xl">
            Link:
            <a
              className="text-lg text-blue-600"
              href={link.to}
              target="_blank"
              rel="noopener norelerer"
            >
              {link.to}
            </a>
          </p>
          <p className="text-xl">
            From:
            <a
              className="text-lg text-blue-600"
              href={link.from}
              target="_blank"
              rel="noopener noreferer"
            >
              {link.from}
            </a>
          </p>
          <p className="text-xl">
            Clicks count:
            <span className="font-bold">{link.clicks}</span>
          </p>
          <p className="text-xl">
            Date created:
            <span className="font-bold">{new Date(link.date).toLocaleDateString()}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
