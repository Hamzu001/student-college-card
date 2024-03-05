import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  Context,
  capitalizeFirstLetter,
  GiHamburgerMenu,
  LuLayoutDashboard,
  MdOutlineQuiz,
  IoMdNotificationsOutline,
  BsBookmarkPlus,
  PiNotebookLight,
  LiaIdCard,
  TbLogout2,
  PiStudentBold,
} from "../../utils/imports.js"

const Sidebar = ({ component }) => {
  const { user } = useContext(Context)
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)

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

  const sideBarLinks = [
    {
      path: "/student-portal/dashboard",
      logo: <LuLayoutDashboard />,
      name: "Dashboard",
      badge: "",
    },
    {
      path: "/student-portal/create-college-card",
      logo: <LiaIdCard />,
      name: "College Card",
      badge: "",
    },
    {
      path: "/student-portal/courses",
      logo: <PiNotebookLight />,
      name: "Courses",
      badge: "",
    },
    {
      path: "/student-portal/notifications",
      logo: <IoMdNotificationsOutline />,
      name: "Notifications",
      badge: "2",
    },
    {
      path: "/student-portal/enrolled",
      logo: <BsBookmarkPlus />,
      name: "Enrolled",
      badge: "3",
    },
    {
      path: "/student-portal/quizes",
      logo: <MdOutlineQuiz />,
      name: "Quizzes",
      badge: "",
    },
  ]

  return (
    <div>
      <div className="container">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <GiHamburgerMenu />
        </button>

        <aside
          className={`fixed left-0 z-40 w-64 h-screen transition-transform ${
            isVisible ? "" : "-translate-x-full sm:translate-x-0"
          }`}
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group font-medium">
              <PiStudentBold />
              <span className="ms-3">
                Welcome {capitalizeFirstLetter(user?.userName || "user")}
              </span>
            </div>
            <ul className="space-y-2 ">
              {sideBarLinks.map((item, index) => {
                return (
                  <li
                    key={index}
                    className=" hover:border-b-2 mt-2 border-solid"
                  >
                    <Link
                      to={item.path}
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      {item.logo}
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        {item.name}
                      </span>
                      <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 hover:bg-gray-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                        {item.badge}
                      </span>
                    </Link>
                  </li>
                )
              })}

              <li onClick={logoutHandler} className=" hover:border-b-2 mt-2 cursor-pointer  border-solid">
                <p
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <TbLogout2 />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Logout
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </aside>

        <div className="sm:ml-64">
          <div className="">{component}</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
