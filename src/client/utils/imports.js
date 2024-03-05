import { Context } from "../components/Context.jsx"
import Courses from "../components/Courses/Courses.jsx"
import Navbar from "../components/Header/Navbar.jsx"
import Home from "../components/Home/Home.jsx"
import Oops from "../components/Oops.jsx"
import SignIn from "../components/SignIn/SignIn.jsx"
import SignUp from "../components/SignUp/SignUp.jsx"
import Dashboard from "../components/studentPortal/Dashboard.jsx"
import Enrolled from "../components/studentPortal/Enrolled.jsx"
import Notifications from "../components/studentPortal/Notifications.jsx"
import Quizes from "../components/studentPortal/Quizes.jsx"
import Sidebar from "../components/studentPortal/Sidebar.jsx"
import CreateCollegeCard from "../components/studentPortal/StudentCard/CreateCollegeCard.jsx"
import GetCollegeCard from "../components/studentPortal/StudentCard/GetCollegeCard.jsx"
import Footer from "../components/footer/Footer.jsx"
//////////////////////////////////////////////////
import { capitalizeFirstLetter } from "./index.js"
import { GiHamburgerMenu } from "react-icons/gi"
import { LuLayoutDashboard } from "react-icons/lu"
import { MdOutlineQuiz } from "react-icons/md"
import { IoMdNotificationsOutline } from "react-icons/io"
import { BsBookmarkPlus } from "react-icons/bs"
import { PiNotebookLight } from "react-icons/pi"
import { LiaIdCard } from "react-icons/lia"
import { TbLogout2 } from "react-icons/tb"
import { PiStudentBold } from "react-icons/pi"

export {
  GetCollegeCard,
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
  Footer,
  Courses,
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
}
