import React from "react"
import Cards from "../Courses/Cards"
import { LayoutGridDemo } from "./layoutgrid/LayoutGrid.jsx"
import ContactUs from "../contact-us/ContactUs.jsx"
import Footer from "../footer/Footer.jsx"

const Home = () => {
  return (
    <div className="">
      <LayoutGridDemo />
      <div className="pt-4">
        <div className="flex justify-center p-4">
          <span className="cursor-pointer text-black text-3xl uppercase bg-white px-4 py-2 shadow-[0.5rem_0.5rem_#b5594f,-0.5rem_-0.5rem_#b5594f] transition">
            Courses
          </span>
        </div>
        <div className="mt-4">
          <Cards />
        </div>
      </div>
      <div>
        <div className="flex justify-center pt-8">
          <span className="cursor-pointer text-black text-3xl uppercase bg-white px-4 py-2 shadow-[0.5rem_0.5rem_#b5594f,-0.5rem_-0.5rem_#b5594f] transition">
            Contact Us
          </span>
        </div>
        <ContactUs />
      </div>
      <Footer />
    </div>
  )
}

export default Home
