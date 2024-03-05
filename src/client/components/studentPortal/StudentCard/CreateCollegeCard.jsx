import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Form from "./Form"
import GetCollegeCard from "./GetCollegeCard"
import ReactLoading from "react-loading"

const CreateCollegeCard = () => {
  const [cardData, setCardData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(0)

  useEffect(() => {
    async function getStudentCard() {
      const res = await fetch("/api/v1/student/get-student-card")
      const getCard = await res.json()
      if (getCard.data) setStep(2)
      else setStep(1)
      setCardData(getCard.data)
    }
    getStudentCard()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      setIsLoading(true)
      const responce = await fetch("/api/v1/student/create-student-card", {
        method: "POST",
        body: formData,
      })

      const creatStudentCard = await responce.json()
      // console.log(creatStudentCard)
      if (creatStudentCard.data) {
        setCardData(creatStudentCard.data)
        setStep(2)
        return toast.success(creatStudentCard.message)
      } else {
        setStep(1)
        return toast.info(creatStudentCard.message)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container">
      <div className="flex justify-center p-4 mb-2 rounded-2xl mx-4 bg-gray-200">
        Get Your College Card
      </div>
      {step == 0 && (
        <div className="flex justify-center pt-6 mt-2">
          <ReactLoading
            type="bars"
            color="#734055"
            height={'5%'}
            width={'5%'}
          />
        </div>
      )}
      {/* form  */}
      {step == 1 && <Form formSubmit={handleSubmit} loading={isLoading} />}
      {step == 2 && <GetCollegeCard cardDetails={cardData} />}
    </div>
  )
}

export default CreateCollegeCard
