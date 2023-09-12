const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = process.env.JWT_SECRET;

// ROUTE 1: used to create a new user method:post "/api/auth/createstudent"
router.post(
  "/createstudent",
  [
    body("name"),
    body("email", "enter valid email").isEmail(),
    body("password", "enter maximum 8 characters").isLength({ min: 8 }),
  ],
  async (req, res) => {
    // if there are error bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      // if email is exist return err
      if (user) {
        return res.status(400).json({ error: "this user is already exist" });
      }

      // make a secure password to use hashing & salt
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // add new user in database
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      // get user id in mongodb
      const data = {
        user: {
          id: user.id,
        },
      };
      // create and send json web token to responce
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken });
    } catch (error) {
      res.status(500).json({ error: "some error accoured" });
    }
  }
);

// ROUTE 2: used to login a student using method:post "/api/auth/loginstudent"
router.post(
  "/loginstudent",
  [
    body("email", "enter valid email").isEmail(),
    body("password", "password cannot be empty").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      // if email is exist return err
      if (!user) {
        return res
          .status(400)
          .json({ error: "Try to login with correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Try to login with correct credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      // create and send json web token to responce
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken });
    } catch (error) {
      res.status(500).json({ error: "some error accoured" });
    }
  }
);

// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post("/getstudent", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
