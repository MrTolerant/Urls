import React, { useState, useCallback, useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { Loader } from '../components/Loader'
import { LinksList } from '../components/LinksList'

export const LinksPage = () => {
  const [links, setLinks] = useState([])
  const { loading, request } = useHttp()
  const { token } = useContext(AuthContext)

  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request('/api/link', 'GET', null, { Authorization: `Bearer ${token}` })
      setLinks(fetched)
    } catch (error) {}
  }, [request, token])

  useEffect(() => {
    fetchLinks()
  }, [fetchLinks])

  return <>{loading ? <Loader /> : <LinksList links={links} />}</>
}
