import React, { useContext, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { Context } from "../Context.jsx"
import Button from "../common/Button.jsx"

const Navbar = () => {
  const { user, isVisible, setIsVisible } = useContext(Context)
  const navigate = useNavigate()

  return (
    <nav className=" border-blue-500 bg-red-200 rounded-b-3xl px-2 lg:px-6 p-1">
      <div className="flex flex-wrap justify-between gap-4 p-1 items-center mx-auto max-w-screen-xl">
        <Link to="/" className="flex ml-1 items-center">
          <ul className="home">
            <li
              className="homeli"
              style={{ "--i": "#b5594f", "--j": "#c26e65" }}
            >
              <span className="icon">🏠</span>
              <span className="title">GMGC</span>
            </li>
          </ul>
        </Link>

        {user?.userName ? (
          <div className="px-10 cursor-cell bg-red-300 py-2 rounded-3xl">
            <span className="text-[#b5594f] font-bold">Student Dashboard</span>
          </div>
        ) : (
          ""
        )}

        <div className="flex items-center lg:order-2">
          {user?.userName ? (
            <div className="cursor-pointer">
              <span onClick={() => navigate("/student-portal/dashboard")}>
                <img
                  class="h-6 w-6 object-cover object-center"
                  src="././../dashboard.png"
                  alt="content"
                />
              </span>
            </div>
          ) : (
            <div className="flex row">
              <Link to="/signin" className="mr-4">
                <Button btnName="SignIn" />
              </Link>
              <Link to="/signup" className="mr-1">
                <Button btnName="SignUp" />
              </Link>
            </div>
          )}
          {user?.userName ? (
            <button
              onClick={() => setIsVisible(!isVisible)}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg sm:hidden"
            >
              <img
                class="h-6 w-6 object-cover object-center"
                src="././../hamburger.png"
                alt="content"
              />
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
