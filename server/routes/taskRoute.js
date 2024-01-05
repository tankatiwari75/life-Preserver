const jwt = require("jsonwebtoken");
const express = require("express");
const Model = require("../models/taskModel");
const router = express.Router();

router.post("/tasks", async (req, res) => {
  try {
    const data = new Model({
      task_description: req.body.task_description,
      team_member: req.body.team_member,
      due_date: req.body.due_date,
    });
    const dataToSave = await data.save();
    const list = await Model.find();

    res.status(200).json(list);
  } catch (error) {
    console.log("message", error);
  }
});

router.get("/tasks/list", async (req, res) => {
  try {
    const list = await Model.find();

    res.status(200).json(list);
  } catch (error) {
    console.log("message", error);
  }
});

module.exports = router;
