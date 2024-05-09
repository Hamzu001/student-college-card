import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { Context } from "../Context"
import Icon from "../common/Icon.jsx"
import Footer from "../footer/Footer.jsx"
import SideBar from "./SideBar.jsx"
import Loading from "../../Loading.jsx"

const CourseDetails = () => {
  const params = useParams()
  const { cardData } = useContext(Context)

  if (!cardData)
    return (
      <Loading type="spinningBubbles" color="#734055" height="5%" width="5%" />
    )

  return (
    <>
      <div className="m-0">
        {cardData.map((items) => {
          if (items._id == params.id) {
            return (
              <>
                <div key={items._id} className="m-4 mx-10 pt-1 ">
                  <div className="mt-2 flex flex-row flex-wrap justify-between">
                    <div>
                      <p className="font-bold text-[#b5594f] text-3xl">
                        {items.courseTitle} -{" "}
                        <span className="font-semibold text-lg">
                          {items.courseCode}
                        </span>{" "}
                      </p>
                      <p className="mt-2 text-lg">
                        By{" "}
                        <span className="text-[#b5594f] font-semibold">
                          Hamza Zahid
                        </span>{" "}
                        | Published Apr 8, 2024
                      </p>
                    </div>
                    <div className="mt-6">
                      <Icon />
                    </div>
                  </div>
                  <img
                    alt="ecommerce"
                    className="rounded-lg mt-4 lg:w-[1250px] lg:h-[600px]"
                    src={items.courseImage}
                  />

                  <div className="grid grid-cols-12 gap-4 m-2 mt-6 ">
                    <div className="col-span-12 md:col-span-8 mt-2">
                      {items.courseDescription.split(".").map((txt, i) => {
                        return (
                          <p key={i} className="mt-2">
                            {txt}
                          </p>
                        )
                      })}
                    </div>

                    <div className="col-span-12 md:col-span-4 m-2 mt-4 lg-ml-10 sm-m1-0 ">
                      <p className="text-xl text-[#b5594f] font-semibold">
                        Latest Courses
                      </p>
                      <SideBar />
                    </div>
                  </div>
                </div>
              </>
            )
          }
        })}
      </div>
      <Footer />
    </>
  )
}

export default CourseDetails
