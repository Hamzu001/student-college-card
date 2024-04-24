import mongoose, { Schema } from "mongoose"

const courseSchema = new Schema(
    {
        courseTitle:{
            type: String,
            required: true
        },
        courseCode:{
            type: String,
            required: true,
            uppercase: true
        },
        courseDescription:{
            type: String,
            required: true
        },
        courseImage:{
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

export const Course = mongoose.model("Course", courseSchema)