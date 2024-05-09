import React, { useContext } from "react"
import { Context } from "../Context"

const Dashboard = () => {
  const { setTitleBoard } = useContext(Context)
  return (
    <div>
      {/* {setTitleBoard("Student Dashboard")} */}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-wrap -m-4">

            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border-2 border-red-200 p-6 rounded-lg">
                {/* <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div> */}
                <h2 class="text-lg text-[#b5594f] font-medium title-font mb-2">
                  Shooting Stars
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
