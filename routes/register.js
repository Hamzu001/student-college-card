const express = require("express");
const router = express.Router();
const Register = require("../models/Registration");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");

// name,fname,classname,number,rollno,department,session,file

// ROUTE 1: used for card registration  method:post "/api/getcard/registercard"
router.post(
    "/registercard", fetchuser,
    [
      body("name"),
      body("fname", "enter maximum 4 characters").isLength({ min: 2 }),
      body("number", "enter maximum 12 digits").isLength({ max: 12 }),
    ],
    async (req, res) => {
      // if there are error bad request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      try {
        const {name,fname,validdate,number,rollno,department,session,file}= req.body;

        const checkstd = await Register.findOne({user: req.user.id})
        if(checkstd){
          return res.status(400).json({ stdexist: "this user is already exist" });
        }
        // add new user in database
        const detail = new Register({name,fname,validdate,number,rollno,department,session,file,user: req.user.id
        });
        const r = await detail.save();
        res.json({"student":"register"});

      } catch (error) {
        res.status(500).json({ error: "some error accoured" });
      }
    }
  );
  
  
// ROUTE 2: used for get a student card method:get "/api/auth/studentcard"

router.get('/studentcard',fetchuser, async (req, res)=>{
  const getcard = await Register.find({user: req.user.id});
  res.json(getcard);

});



module.exports = router;