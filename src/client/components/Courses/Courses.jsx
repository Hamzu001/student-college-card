import React, { useState } from "react"
import Cards from "./Cards"

const Courses = () => {

  return (
    <div className="flex justify-center items-center p-4 mb-2 rounded-2xl mx-4 bg-gray-200">
      <p>All courses here</p>
      <Cards />
    </div>
  )
}

export default Courses
