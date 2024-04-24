import React, { useContext } from "react"
import { Context } from "../Context"
import Loading from "../../Loading"

const SideBar = () => {
  const { cardData } = useContext(Context)

  if (!cardData)
    return (
      <Loading type="spinningBubbles" color="#734055" height="5%" width="5%" />
    )

  return (
    <div className="">
      {cardData.map((items, i) => {
        return (
          <div key={i} className="flex flex-row justify-between mt-4">
            <div className="mr-2 w-64">
              <p>{items.courseTitle}</p>
              <p>{items.courseCode}</p>
            </div>
            <div className="mr-4">
              <img
                alt="ecommerce"
                className="rounded-lg w-[75px] h-[50px]"
                src={items.courseImage}
                />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SideBar
