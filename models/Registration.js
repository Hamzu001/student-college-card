const mongoose = require("mongoose");
const { Schema } = mongoose;

// name,fname,classname,number,rollno,department,session,file

const CardSchema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'students'
  },
  name: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  validdate: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  rollno: {
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
  file: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.cards || mongoose.model("cards", CardSchema);
