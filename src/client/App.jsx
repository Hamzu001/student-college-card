import "./App.css"
import { useContext, useEffect, useState } from "react"
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom"
import { Context } from "./components/Context.jsx"
import Home from "./components/Home.jsx"
import SignIn from "./components/SignIn/SignIn.jsx"
import Oops from "./components/Oops.jsx"
import SignUp from "./components/SignUp/SignUp.jsx"
import HomePage from "./components/HomePage/HomePage.jsx"
import Navbar from "./components/Header/Navbar.jsx"
import Courses from "./components/Courses/Courses.jsx"

function Private({ func, path }) {
  return func() ? <Outlet /> : <Navigate to={path} replace={true} />
}

function App() {
  const { user, setUser, fetchData } = useContext(Context)
  const location = useLocation()

  useEffect(() => {
    // if (
    //   ["/", "/home", "/signin", "/signup"].some(
    //     (path) => path == location.pathname
    //   )
    // ) {
    fetchData()
    // } else setUser({})
  }, [])

  if (!user) return null

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />

        <Route element={<Private func={() => user?.userName} path="/signin" />}>
          <Route path="/home" element={<HomePage />} />
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
