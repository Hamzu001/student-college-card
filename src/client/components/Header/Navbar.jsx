import React, { useContext, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { Context } from "../Context.jsx"
import { FaSchool } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { FiLogIn } from "react-icons/fi"
import { SiGnuprivacyguard } from "react-icons/si"

const Navbar = () => {
  const [state, setState] = useState(true)
  const { user, setUser } = useContext(Context)
  const navigate = useNavigate()

  const logoutHandler = async () => {
    try {
      const fetchData = await fetch("/api/v1/user/logout", {
        method: "POST",
      })
      const logoutUser = await fetchData.json()
      // console.log(logoutUser)
      if (logoutUser.statusCode == 200) {
        navigate("/")
        setUser(logoutUser)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // const navLinks = [
  //   {
  //     name: "Home",
  //     path: "/",
  //   },
  //   {
  //     name: "Courses",
  //     path: "/courses",
  //   },
  //   {
  //     name: "Contact",
  //     path: "/contact",
  //   },
  // ]

  return (
    <nav className="bg-gray-200 border-gray-200 px-2 lg:px-6 p-2">
      <div className="flex flex-wrap justify-between p-1 items-center mx-auto max-w-screen-xl">
        <Link to="/" className="flex items-center">
          <FaSchool />
          <span className=" ml-2 text-xl font-semibold whitespace-nowrap"></span>
          GMGC
        </Link>
        <div className="flex items-center lg:order-2">
          {user?.userName ? (
            <div>
              <button onClick={logoutHandler}>Logout</button>
            </div>
          ) : (
            <div className="flex row">
              <Link to="/signin" className="mr-4">
                {/* <FiLogIn /> */}
                SignIn
              </Link>
              <Link to="/signup" className="mr-3">
                SignUp
                {/* <SiGnuprivacyguard /> */}
              </Link>
            </div>
          )}
          <button
            onClick={() => setState(false)}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden"
          >
            <GiHamburgerMenu />
          </button>
        </div>

        {/* <div
          className={`${
            state && "hidden"
          }  justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
        >
          <ul className="flex flex-col mt-4  lg:flex-row lg:space-x-8 lg:mt-0">
            {navLinks.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 ${
                        isActive
                          ? "text-orange-700 border-b-2 border-orange-700"
                          : "text-black"
                      } text-black hover:text-orange-700 rounded lg:text-primary-700`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              )
            })}

            <button
              onClick={() => setState(true)}
              className={`${
                state && "hidden"
              } justify-center  text-xl mb-2 flex w-full`}
            >
              <MdOutlineKeyboardDoubleArrowUp />
            </button>
          </ul>
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar
