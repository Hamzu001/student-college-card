import React from "react"
import { useParams } from "react-router-dom"

const QuizeEnroll = () => {
  const { id } = useParams()
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-8 mx-auto">
        <div class="flex flex-wrap -m-4">

          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border-2 border-red-200 p-6 rounded-lg">
              <h2 class="text-lg text-[#b5594f] font-medium title-font mb-2">
                Take Quize | <span className="text-[12px]">CSI-601</span>
              </h2>
              <p class="leading-relaxed text-[#b5594f] text-base">
                Fingerstache flexitarian street art 8-bit waist co, subway tile
                poke farm.
              </p>
              <p class="text-[#b5594f] text-[12px] py-1">
                By <span className="text-black">Hamza Zahid</span> | Uploaded : <span className="text-black">5-May-2024</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default QuizeEnroll
