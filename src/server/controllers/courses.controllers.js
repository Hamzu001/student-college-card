import { Course } from "../models/course.models.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { uploadImageToCloudinary } from "../utils/Cloudinary.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const coursesDetails = asyncHandler(async (req, res) => {
  const { courseTitle, courseCode, courseDescription } = req.body
  const imageInBuffer = req.file
  if (!imageInBuffer) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Image are not recieved"))
  }

  if (
    [courseTitle, courseCode, courseDescription].some(
      (field) => field.trim() == ""
    )
  ) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "All fields are required"))
  }

  const uploadToCloudinary = await uploadImageToCloudinary(imageInBuffer.buffer)
  if (!uploadToCloudinary) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Image uploading error"))
  }

  const courseData = await Course.create({
    courseTitle,
    courseCode,
    courseDescription,
    courseImage: uploadToCloudinary.secure_url,
  })

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        courseData.courseCode,
        "course details are save in db"
      )
    )
})

const getCoursesDetails = asyncHandler(async (req, res) => {
  const courseDetails = await Course.find().select(" -__v")
  if (!courseDetails.length > 0)
    return res.status(400).json(new ApiResponse(400, null, "no course found"))
  
  res
    .status(200)
    .json(new ApiResponse(200, courseDetails, "All course details"))
})

export { coursesDetails, getCoursesDetails }
