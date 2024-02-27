import React from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Form from "./Form.jsx"

const SignUp = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const values = e.currentTarget
    const { userName, email, password } = Object.fromEntries(
      new FormData(values)
    )

    if ([userName, email, password].some((field) => field?.trim() == "")) {
      return toast.info("All fields are required")
    }

    if (password?.length < 8) {
      return toast.info("Password aleast 8 characters")
    }

    const fetchData = await fetch("/api/v1/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, email, password }),
    })
    const userData = await fetchData.json()

    if (!userData) {
      return toast.info("Server does not responce")
    }

    // console.log(userData)
    if (!userData?.data) {
      toast.warn(userData.message)
      values.reset()
    }
  }

  return (
    <>
      <section className="bg-gray-50 mt-6">
        <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto lg:py-0">
          <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl flex justify-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                SignUp
              </h1>
              <Form formSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp
