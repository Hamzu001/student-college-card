import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const coursesDetails = asyncHandler(async (req, res) => {

  const { courseTitle, courseCode, courseImage } = req.body
  if (
    [courseTitle, courseCode, courseImage].some((field) => field.trim() == "")
  ) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "All fields are required"))
  }

  res
    .status(200)
    .json({ "courses details": courseTitle, courseCode, courseImage })
})

export { coursesDetails }
