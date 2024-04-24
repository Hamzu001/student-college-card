import React from "react"

const Button = ({ btnName }) => {
  return (
    <button
      type="submit"
      className="relative py-2 px-4 text-[#b5594f] text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#b5594f] before:to-[#c26e65] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
    >
      {btnName}
    </button>
  )
}

export default Button
