import { User } from "../models/user.models.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { verifyJWT } from "../utils/functions.js"

const authUser = asyncHandler(async (req, res, next) => {
  const token = req.cookies?.token || req.header("token")

  if (!token) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Token is not provided"))
  }

  const { data: verifyToken } = verifyJWT(token)

  if (!verifyToken) {
    return res.status(400).json(new ApiResponse(400, null, "Invalid token"))
  }

  const user = await User.findById(verifyToken?.id).select("-password")
  req.user = user
  next()
})

export { authUser }
