const jwt = require("jsonwebtoken");
const express = require("express");
const Model = require("../models/contactModel");
const router = express.Router();


router.post("/contactus", async (req, res) => {
  try {
    const data = new Model({
        fullname: req.body.fullname,
        email: req.body.email,
        messages:req.body.messages

      });
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
    }catch (error) {
      console.log("message",error );
    }
  });

module.exports = router;