import React, { useContext, useState } from "react"
import { BiLike } from "react-icons/bi"
import { BiSolidLike } from "react-icons/bi"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Context } from "../Context"
import Loading from "../../Loading"

const Cards = () => {
  const [likeCount, setLikeCount] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const { cardData } = useContext(Context)

  if (!cardData)
    return (
      <Loading type="spinningBubbles" color="#734055" height="5%" width="5%" />
    )

  return (
    <motion.section
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
      initial="hidden"
      animate="show"
      className="text-gray-600 body-font"
    >
      <div className=" px-7 py-4  mx-auto">
        <div className="flex flex-wrap  -m-4 ">
          {cardData.map((items, i) => {
            return (
              <motion.div
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                key={items._id}
                className="lg:w-1/4 md:w-1/2 p-4 w-full"
              >
                <div className="block relative h-48  overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center rounded-t-2xl w-full h-full block"
                    src={items.courseImage}
                  />
                </div>
                <div className="mt-0 p-2 rounded-b-2xl bg-white">
                  <Link
                    to={`/courses/${items._id}`}
                    className="text-[#b5594f] title-font cursor-pointer hover:underline hover:text-[#b36860] mb-2 text-lg font-medium"
                  >
                    {items.courseTitle}
                  </Link>
                  <div className="flex row mt-1 justify-between">
                    <h3 className="text-[#b5594f] tracking-widest title-font">
                      {items.courseCode}
                    </h3>
                    {/* <span
                      onClick={() => {
                        setLikeCount(likeCount + (isLiked ? -1 : 1))
                        setIsLiked(!isLiked)
                      }}
                      className={`flex cursor-pointer ${
                        isLiked ? "bg-red-200" : ""
                      } mr-1 rounded-lg px-2 pb-[2px] row justify-center items-center`}
                    >
                      <div className="mt-[2px]">
                        {isLiked ? <BiSolidLike /> : <BiLike />}
                      </div>
                      <span className="ml-1">{likeCount}</span>
                    </span> */}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default Cards
