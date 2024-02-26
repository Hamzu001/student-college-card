import { createContext, useState } from "react"

export const Context = createContext()

export function ContextProvider({ children }) {
  const [user, setUser] = useState(null)

  const fetchData = async () => {
    const data = await fetch("/api/v1/user/getcurrentuser")
    const user = await data.json()
    if (user.data == null) return setUser({})
    setUser(user.data)
  }

  return (
    <Context.Provider value={{ user, setUser, fetchData }}>
      {children}
    </Context.Provider>
  )
}
