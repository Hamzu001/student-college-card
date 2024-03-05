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
        courseImage:{
            type: String,
            required: true
        },
        isLike:{
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
)

export const Course = mongoose.model("Course", courseSchema)