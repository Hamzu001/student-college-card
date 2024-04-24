import React from "react"
import ReactLoading from "react-loading"
import Button from "../common/Button"

const Form = ({ formSubmit, loading }) => {
  return (
    <div>
      <form className="space-y-4 md:space-y-6" onSubmit={formSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-[#b5594f]"
          >
            UsernName
          </label>
          <input
            type="userName"
            name="userName"
            id="userName"
            className="bg-gray-50 border outline-none focus:ring-2 focus:ring-red-200 focus:border-[#b5594f] border-[#b5594f] text-[#b5594f] sm:text-sm rounded-lg block w-full p-2.5"
            placeholder="username"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-[#b5594f]"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border outline-none focus:ring-2 focus:ring-red-200 focus:border-[#b5594f] border-[#b5594f] text-[#b5594f] sm:text-sm rounded-lg block w-full p-2.5"
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-[#b5594f]"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border outline-none focus:ring-2 focus:ring-red-200 focus:border-[#b5594f] border-[#b5594f] text-[#b5594f] sm:text-sm rounded-lg block w-full p-2.5"
            required
          />
        </div>
        {loading ? (
          <div className=" flex justify-center">
            <ReactLoading
              type="cylon"
              color="#734055"
              height={"10%"}
              width={"10%"}
            />
          </div>
        ) : (
          <div className="flex justify-center">
            <Button btnName="SignUp" />
          </div>
        )}
      </form>
    </div>
  )
}

export default Form
