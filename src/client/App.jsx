import "./App.css"
import { useContext, useEffect } from "react"
import { Routes, Route, Navigate, Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import {
  Register,
  Sidebar,
  Quizes,
  Notifications,
  Enrolled,
  Dashboard,
  SignIn,
  SignUp,
  Oops,
  Home,
  Navbar,
  Courses,
  Context,
} from "./utils/imports.js"

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
      <ToastContainer
        position="top-left"
        autoClose={3000}
        closeOnClick
        theme="light"
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />

        <Route element={<Private func={() => user?.userName} path="/signin" />}>
          <Route
            path="/student-portal/dashboard"
            element={<Sidebar component={<Dashboard />} />}
          />
          <Route
            path="/student-portal/register"
            element={<Sidebar component={<Register />} />}
          />
          <Route
            path="/student-portal/enrolled"
            element={<Sidebar component={<Enrolled />} />}
          />
          <Route
            path="/student-portal/courses"
            element={<Sidebar component={<Courses />} />}
          />
          <Route
            path="/student-portal/notifications"
            element={<Sidebar component={<Notifications />} />}
          />
          <Route
            path="/student-portal/quizes"
            element={<Sidebar component={<Quizes />} />}
          />
        </Route>

        <Route
          element={
            <Private
              func={() => !user?.userName}
              path="/student-portal/dashboard"
            />
          }
        >
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>

        <Route path="*" element={<Oops />} />
      </Routes>
    </>
  )
}

export default App
