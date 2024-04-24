import { Router } from "express";
import { createStudentCard, getStudentCard } from "../controllers/studentCard.controllers.js"
import { authUser } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
 
const router = Router()

router.route("/create-student-card").post(authUser, upload.single("file") , createStudentCard)
router.route("/get-student-card").get(authUser, getStudentCard)

export default router;