"use client"
import React from "react"
import { LayoutGrid } from "./layout-grid.tsx"

export function LayoutGridDemo() {
  return (
    <div className="h-screen w-full">
      <LayoutGrid cards={cards} />
    </div>
  )
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">
        Govt. Municipal Graduate College FSD
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We aim at providing our students with a highly competitive learning
        enviorment where concepts are inculcated and research is encouraged. We
        are striving to broaden minds and ennoble intellectual approach of our
        students enabling them to stand out in the world
      </p>
    </div>
  )
}

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Get Student College Card</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        College cards, also known as student ID cards or identification cards,
        are typically issued by educational institutions to their enrolled
        students. These cards serve various purposes, including identification,
        access to campus facilities, and sometimes even as a form of payment or
        proof of enrollment for student discounts.
      </p>
    </div>
  )
}
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Study your Courses </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Taking effective notes is crucial for success in your courses.
      </p>
    </div>
  )
}

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Take Quiz</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Sure, I can create a quiz for you! Please specify the topic or subject you'd like the quiz to cover, as well as the number of questions you'd prefer.
      </p>
    </div>
  )
}

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://res.cloudinary.com/dlczywmww/image/upload/v1709530594/studentimages/nxwge0xs6a43vvsgf77q.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://res.cloudinary.com/dlczywmww/image/upload/v1709530566/studentimages/qbo0mhdeuryeigyuicct.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://res.cloudinary.com/dlczywmww/image/upload/v1709530591/studentimages/ye2n1zhxhnlkjlfuocfi.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://res.cloudinary.com/dlczywmww/image/upload/v1709530593/studentimages/kegbgs8g5j5kpcwsvrlr.jpg",
  },
]
