import { createContext, useEffect, useState } from "react"

export const Context = createContext()

export function ContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [cardData, setCardData] = useState(null)

  const fetchData = async () => {
    const data = await fetch("/api/v1/user/getcurrentuser")
    const user = await data.json()
    if (user.data == null) return setUser({})
    setUser(user.data)
  }

  useEffect(() => {
    async function fetchCourses() {
      try {
        const responce = await fetch("/api/v1/courses/get-courses-details")
        const courseDetails = await responce.json()
        if (!courseDetails.data) return setCardData(null)
        const result = courseDetails.data.reverse()
        setCardData(result)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCourses()
  }, [])

  
  return (
    <Context.Provider value={{ user, setUser, fetchData, cardData }}>
      {children}
    </Context.Provider>
  )
}
