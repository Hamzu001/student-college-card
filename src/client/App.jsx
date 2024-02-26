import "./App.css"
import { useContext, useEffect } from "react"
import { Routes, Route, Navigate, Outlet } from "react-router-dom"
import { Context } from "./components/Context.jsx"
import Home from "./components/Home.jsx"
import SignIn from "./components/SignIn/SignIn.jsx"
import Oops from "./components/Oops.jsx"
import SignUp from "./components/SignUp/SignUp.jsx"
import Portal from "./components/studentPortal/Portal.jsx"
import Navbar from "./components/Header/Navbar.jsx"
import Courses from "./components/Courses/Courses.jsx"

function Private({ func, path }) {
  return func() ? <Outlet /> : <Navigate to={path} replace={true} />
}

function App() {
  const { user, fetchData } = useContext(Context)

  useEffect(() => {
    fetchData()
  }, [])

  if (!user) return null

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />

        <Route element={<Private func={() => user?.userName} path="/signin" />}>
          <Route path="/student-protal" element={<Portal />} />
        </Route>

        <Route element={<Private func={() => !user?.userName} path="/home" />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>

        <Route path="*" element={<Oops />} />
      </Routes>
    </>
  )
}

export default App
