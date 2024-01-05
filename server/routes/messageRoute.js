const jwt = require("jsonwebtoken");
const express = require("express");
const Model = require("../models/messageModel");
const router = express.Router();

router.post("/message", async (req, res) => {
  try {
    const data = new Model({
      user: req.body.user,
      message: req.body.message,
      date: new Date(),
    });
    const dataToSave = await data.save();
    const list = await Model.find();

    res.status(200).json(
     list);
  } catch (error) {
    console.log("message", error);
  }
});

router.get("/message/list", async (req, res) => {
  try {
    const list = await Model.find();

    res.status(200).json(list);
  } catch (error) {
    console.log("message", error);
  }
});

module.exports = router;
