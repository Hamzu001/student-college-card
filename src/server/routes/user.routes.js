import { Router } from "express"
import {
  getCurrentUser,
  registerUser,
  userLogin,
  logoutUser,
  verifyToken,
} from "../controllers/user.controllers.js"
import { authUser } from "../middlewares/auth.middleware.js"

const router = Router()

router.route("/register").post(registerUser)
router.route("/verify").get(verifyToken)
router.route("/login").post(userLogin)
router.route("/logout").post(logoutUser)

router.route("/getcurrentuser").get(authUser, getCurrentUser)

export default router
