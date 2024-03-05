import React, { useContext, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { Context } from "../Context.jsx"
import { FaSchool } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { FiLogIn } from "react-icons/fi"
import { SiGnuprivacyguard } from "react-icons/si"
import { MdDashboard } from "react-icons/md"

const Navbar = () => {
  const { user, setUser } = useContext(Context)
  const navigate = useNavigate()

  return (
    <nav className=" border-gray-200 px-2 lg:px-6 p-2">
      <div className="flex flex-wrap justify-between p-1 items-center mx-auto max-w-screen-xl">
        <Link to="/" className="flex ml-1 items-center">
          <FaSchool />
          <span className=" ml-2 text-xl font-bold whitespace-nowrap"></span>
          GMGC
        </Link>
        <div className="flex items-center lg:order-2">
          {user?.userName ? (
            <div className="cursor-pointer">
              <span onClick={() => navigate("/student-portal/dashboard")}>
                <MdDashboard />
              </span>
            </div>
          ) : (
            <div className="flex row">
              <Link to="/signin" className="mr-4">
                <div className="group flex relative">
                  <span className="">
                    <FiLogIn />
                  </span>
                  <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-2 text-sm text-gray-100 rounded-md absolute right-1/2 -translate-x-1/2 translate-y-4/4 opacity-0 ">
                    SignIn
                  </span>
                </div>
                {/* SignIn */}
              </Link>
              <Link to="/signup" className="mr-1">
                <div >
                {/* SignUp */}
                    <SiGnuprivacyguard />
                </div>
              </Link>
            </div>
          )}
          {user?.userName ? (
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg sm:hidden"
            >
              <GiHamburgerMenu />
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
