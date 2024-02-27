import React, { useContext } from "react"
import Form from "./Form.jsx"
import { useNavigate } from "react-router-dom"
import { Context } from "../Context.jsx"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const SignIn = () => {
  const navigate = useNavigate()
  const { setUser } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const values = e.currentTarget
    const { email, password } = Object.fromEntries(new FormData(values))

    if ([email, password].some((field) => field?.trim() == "")) {
      return toast.info("All fields are required")
    }

    if (password?.length < 8) {
      return toast.info("Password atleast 8 characters")
    }

    const fetchData = await fetch("/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    const userData = await fetchData.json()
    // console.log(userData)
    if (!userData) {
      return toast.error("Server Does not responce")
    }

    if (!userData?.data) {
      return toast.warn(userData.message)
    }

    setUser(userData.data)
    navigate("/student-portal/dashboard")
  }

  return (
    <>
      <section className="bg-gray-50 mt-6">
        <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto lg:py-0">
          <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl flex justify-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                SignIn
              </h1>
              <Form formSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignIn
