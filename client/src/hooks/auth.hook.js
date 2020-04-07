import { useState, useCallback, useEffect } from 'react'

const storageName = 'UserData'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [userId, setuserId] = useState(null)
  const [ready, setReady] = useState(null)

  const login = useCallback((jwtToken, id) => {
    setuserId(id)
    setToken(jwtToken)
    localStorage.setItem(
      storageName,
      JSON.stringify({
        userId: id,
        token: jwtToken
      })
    )
  }, [])

  const logout = useCallback(() => {
    setuserId(null)
    setToken(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))
    if (data && data.token) {
      login(data.token, data.userId)
    }
    setReady(true)
  }, [login])

  return { login, logout, token, userId, ready }
}