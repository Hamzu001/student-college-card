import React, { useState } from "react"
import { BiLike } from "react-icons/bi"
import { BiSolidLike } from "react-icons/bi"

const Cards = () => {
  const [likeCount, setLikeCount] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const cardData = [
    {
      id: "1",
      image: "https://dummyimage.com/420x260",
      courseTitle: "Mobile Application Development",
      courseCode: "CSI601",
      like: "4",
    },
    {
      id: "2",
      image: "https://dummyimage.com/420x260",
      courseTitle: "Mobile Application Development",
      courseCode: "CSI601",
      like: "4",
    },
    {
      id: "3",
      image: "https://dummyimage.com/420x260",
      courseTitle: "Mobile Application Development",
      courseCode: "CSI601",
      like: "4",
    },
    {
      id: "4",
      image: "https://dummyimage.com/420x260",
      courseTitle: "Mobile Application Development",
      courseCode: "CSI601",
      like: "4",
    },
    {
      id: "5",
      image: "https://dummyimage.com/420x260",
      courseTitle: "Mobile Application Development",
      courseCode: "CSI601",
      like: "4",
    },
    {
      id: "6",
      image: "https://dummyimage.com/420x260",
      courseTitle: "Mobile Application Development",
      courseCode: "CSI601",
      like: "4",
    },
    {
      id: "7",
      image: "https://dummyimage.com/420x260",
      courseTitle: "Mobile Application Development",
      courseCode: "CSI601",
      like: "4",
    },
    {
      id: "8",
      image: "https://dummyimage.com/420x260",
      courseTitle: "Mobile Application Development",
      courseCode: "CSI601",
      like: "4",
    },
  ]

  return (
    <section className="text-gray-600  body-font">
      <div className="container px-7 py-4  mx-auto">
        <div className="flex flex-wrap  -m-4 ">
          {cardData.map((items) => {
            return (
              <div key={items.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <div className="block relative h-48  overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center rounded-t-2xl w-full h-full block"
                    src={items.image}
                  />
                </div>
                <div className="mt-0 p-2 rounded-b-2xl bg-gray-100">
                  <a className="text-gray-900 title-font cursor-pointer hover:underline hover:text-gray-500 mb-2 text-lg font-medium">
                    {items.courseTitle}
                  </a>
                  <div className="flex row mt-1 justify-between">
                    <h3 className="text-gray-500 tracking-widest title-font">
                      {items.courseCode}
                    </h3>
                    <span
                      onClick={() => {
                        setLikeCount(likeCount + (isLiked ? -1 : 1))
                        setIsLiked(!isLiked)
                      }}
                      className={`flex cursor-pointer ${isLiked?"bg-red-200":""} mr-1 rounded-lg px-2 pb-[2px] row justify-center items-center`}
                    >
                      <div className="mt-[2px]">{isLiked ? <BiSolidLike /> : <BiLike />}</div>
                      <span className="ml-1">{likeCount}</span>
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Cards
