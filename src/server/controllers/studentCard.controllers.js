import { StudentCard } from "../models/studentCard.models.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { uploadImageToCloudinary } from "../utils/Cloudinary.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const createStudentCard = asyncHandler(async (req, res) => {
  const imageInBuffer = req.file
  if (!imageInBuffer) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Image are not recieved"))
  }

  const {
    name,
    fatherName,
    phoneNumber,
    department,
    joinDate,
    session,
    rollNumber,
  } = req.body

  if (
    [
      name,
      fatherName,
      phoneNumber,
      department,
      joinDate,
      session,
      rollNumber,
    ].some((field) => field.trim() == "")
  ) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "All fields are required"))
  }

  const isStudentCardExist = await StudentCard.findOne({ user: req.user._id })
  if (isStudentCardExist) {
    return res
      .status(400)
      .json(
        new ApiResponse(
          400,
          null,
          "Your are already register as student college card"
        )
      )
  }

  const uploadToCloudinary = await uploadImageToCloudinary(imageInBuffer.buffer)
  if (!uploadToCloudinary) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Image uploading error"))
  }
  // console.log(uploadToCloudinary)

  const studentCardData = await StudentCard.create({
    name,
    fatherName,
    phoneNumber,
    department,
    joinDate,
    session,
    rollNumber,
    image: uploadToCloudinary.secure_url,
    user: req.user._id,
  })
  // console.log(studentCardData)
  
  res.status(200).json(
    new ApiResponse(
      200,
      {
        name: studentCardData.name,
        fatherName: studentCardData.fatherName,
        phoneNumber: studentCardData.phoneNumber,
        department: studentCardData.department,
        joinDate: studentCardData.joinDate,
        session: studentCardData.session,
        rollNumber: studentCardData.rollNumber,
        image: studentCardData.image,
      },
      "Your student college card is created"
    )
  )
})

// get student card
const getStudentCard = asyncHandler(async (req, res) => {
  const getStudentDetails = await StudentCard.findOne({
    user: req.user._id,
  }).select("-user -_id")
  res.status(200).json(new ApiResponse(200, getStudentDetails, "Your details"))
})

export { createStudentCard, getStudentCard }
