import React, { useState } from "react"
import Cards from "./Cards"

const Courses = () => {
  return (
    <div className="pt-2">
      <div className="flex justify-center items-center p-4 mb-2 rounded-2xl mx-4 bg-gray-200">
        <p className="text-xl">All courses here</p>
      </div>
      <Cards />
    </div>
  )
}

export default Courses
