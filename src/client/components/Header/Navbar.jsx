import React, { useContext, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { Context } from "../Context.jsx"
import { FaSchool } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { FiLogIn } from "react-icons/fi"
import { SiGnuprivacyguard } from "react-icons/si"
import { MdDashboard } from "react-icons/md"
import Button from "../common/Button.jsx"

// const Button = ({btnName}) => {
//   return (
//     <button className="relative py-2 px-4 text-[#b5594f] text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#b5594f] before:to-[#c26e65] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
//       {btnName}
//     </button>
//   )
// }

const Navbar = () => {
  const { user, setUser } = useContext(Context)
  const navigate = useNavigate()

  return (
    <nav className=" border-blue-500 bg-white px-2 lg:px-6 p-1">
      <div className="flex flex-wrap justify-between p-1 items-center mx-auto max-w-screen-xl">
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
               <Button btnName='SignIn' />
              </Link>
              <Link to="/signup" className="mr-1">
              <Button btnName='SignUp' />
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
