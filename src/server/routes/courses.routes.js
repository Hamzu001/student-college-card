import { Router } from "express"
import { coursesDetails, getCoursesDetails } from "../controllers/courses.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

// /api/v1/courses/courses-details
router.route("/courses-details").post(upload.single("courseimage"),coursesDetails)
router.route("/get-courses-details").get(getCoursesDetails)

export default router;