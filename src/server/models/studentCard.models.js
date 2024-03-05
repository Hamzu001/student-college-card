import mongoose, { Schema } from "mongoose"
 
const studentCardSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    fatherName: {
      type: String,
      required: true,
    },

    joinDate: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    rollNumber: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      required: true,
    },

    session: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
)

export const StudentCard = mongoose.model("StudentCard", studentCardSchema)
