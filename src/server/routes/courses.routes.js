import { Router } from "express"
import { coursesDetails } from "../controllers/courses.controllers.js";

const router = Router();

// /api/v1/courses/courses-details
router.route("/courses-details").post(coursesDetails)

export default router;