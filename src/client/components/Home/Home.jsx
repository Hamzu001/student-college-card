import React from "react"
import Cards from "../Courses/Cards"
import { LayoutGridDemo } from "./layoutgrid/LayoutGrid.jsx"
import ContactUs from "../contact-us/ContactUs.jsx"
import Footer from "../footer/Footer.jsx"

const Home = () => {
  return (
    <div className="container">
      <LayoutGridDemo/>
      <div className="pt-4">
        <div className="flex justify-center p-5 bg-gradient-to-r from-neutral-300 to-stone-400 mx-7 rounded-2xl ">
          <p className="text-2xl">Courses</p>
        </div>
      <Cards />
      </div>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home
