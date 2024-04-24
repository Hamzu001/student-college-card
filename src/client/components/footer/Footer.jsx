import React from "react"
import { FaSchool } from "react-icons/fa"
import Icon from "../common/Icon"

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font border-t">
        <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <p>🏠</p>
            <span className="ml-2 mt-1 text-[#b5594f] text-xl">GMGC</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2020 gmgc —
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @students
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Icon/>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
