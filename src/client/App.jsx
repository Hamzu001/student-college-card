import "./App.css"
import { useContext, useEffect, useState } from "react"
import { Routes, Route, Navigate, Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Loading from "./Loading.jsx"
import {
  CreateCollegeCard,
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
import CourseDetails from "./components/Courses/CourseDetails.jsx"
import QuizeEnroll from "./components/studentPortal/quize/QuizeEnroll.jsx"

function Private({ func, path }) {
  return func() ? <Outlet /> : <Navigate to={path} replace={true} />
}

function App() {
  const { user, fetchData } = useContext(Context)

  useEffect(() => {
    fetchData()
  }, [])

  if (!user) return <Loading type="spinningBubbles" color="#734055" height="10%" width="10%" />

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        closeOnClick
        theme="light"
      />
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />

        <Route element={<Private func={() => user?.userName} path="/signin" />}>
          <Route
            path="/student-portal/dashboard"
            element={<Sidebar component={<Dashboard />} />}
          />

          <Route
            path="/student-portal/create-college-card"
            element={<Sidebar component={<CreateCollegeCard />} />}
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
          <Route
            path="/student-portal/quizes/:id"
            element={<Sidebar component={<QuizeEnroll />} />}
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
