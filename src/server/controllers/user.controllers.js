import { User } from "../models/user.models.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { sendOtpToEmail } from "../utils/sendOtptoMail.js"
import { signJWT, verifyJWT } from "../utils/functions.js"
import { asyncTryCatch } from "../utils/tryCatch.js"
import bcrypt from "bcrypt"

// register user /signup ->> /api/v1/user/register
const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body

  if ([email, userName, password].some((field) => field?.trim() === "")) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "All fields are required"))
  }

  if (password?.length < 8) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "password aleast 8 characters"))
  }

  const isUserExist = await User.findOne({ email })

  if (isUserExist) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "User Already Exist!"))
  }

  const user = await User.create({
    userName,
    email,
    password,
  })

  const { data: generateToken } = signJWT({ id: user._id })

  await asyncTryCatch(() => sendOtpToEmail(email, generateToken))

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        null,
        "Verification email is sent to your email, Verify your email"
      )
    )
})

// token varification ->> /api/v1/user/verify
const verifyToken = asyncHandler(async (req, res) => {
  const { token } = req.query

  if (!token) {
    return res.status(400).json(new ApiResponse(400, null, "Provide token"))
  }

  const { data: decodedToken } = verifyJWT(token)
  if (!decodedToken) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "provide correct token"))
    // res.redirect(302, "/InvalidToken")
  }

  const user = await User.findByIdAndUpdate(
    decodedToken.id,
    {
      $set: { isVerified: true },
    },
    { new: true }
  ).select("-password")

  if (!user) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "User does not exist"))
  }

  const { data: generateToken } = signJWT({ id: user._id })

  res.cookie("token", generateToken, { httpOnly: true, secure: true })
  res.redirect(302, "/student-portal/dashboard")
})

// user login/signin ->> /api/v1/user/login
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  if ([email, password].some((field) => field?.trim() === "")) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "All fields are required"))
  }

  const user = await User.findOne({ email })
  if (!user) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "User does not exist"))
  }

  const isPasswordCompare = await bcrypt.compare(password, user.password)

  if (!isPasswordCompare) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Invalid user credentials"))
  }

  if (!user.isVerified) {
    return res
      .status(400)
      .json(
        new ApiResponse(
          400,
          null,
          "Your are not verified, verify your email (!) "
        )
      )
  }

  const { data: generateAccessToken } = signJWT({ id: user._id })

  res
    .cookie("token", generateAccessToken, { httpOnly: true, secure: true })
    .json(
      new ApiResponse(
        200,
        { userName: user.userName, email: user.email },
        "User login successfully"
      )
    )
})

// logout user ->> /api/v1/user/logout
const logoutUser = asyncHandler((req, res) => {
  res
    .status(200)
    .clearCookie("token", { httpOnly: true, secure: true })
    .json(new ApiResponse(200, {}, "User logged out "))
})

// getuser ->> /api/v1/user/getcurrentuser
const getCurrentUser = asyncHandler(async (req, res) => {
  res.status(200).json(new ApiResponse(200, req.user, "Current User"))
})

export { registerUser, verifyToken, userLogin, logoutUser, getCurrentUser }
