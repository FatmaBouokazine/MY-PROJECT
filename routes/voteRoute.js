const express = require("express")
const voteRouter = express.Router();
const Vote = require('../models/vote')
//add vote
voteRouter.post("/add", async (req, res) => {
    try {
      let newVote = new Vote(req.body);
      const result = await newVote.save();
      res.send({ vote: result, msg: "vote added" });
    } catch (error) {
      console.log(error);
    }
  });

  //get all votes
voteRouter.get("/all", async (req, res) => {
    try {
      let result = await Vote.find();
      res.send({
        votes: result,
        msg: "all votes",
      });
    } catch (error) {
      console.log(error);
    }
  });
  
  ///get  votes by id
  voteRouter.get("/getbyid/:id", async (req, res) => {
    try {
      let result = await Vote.findById(req.params.id);
      res.send({
        votes: result,
        msg: "this is vote by id",
      });
    } catch (error) {
      console.log(error);
    }
  });
  
  //update vote by id
  
  voteRouter.put("/update/:id", async (req, res) => {
    try {
      let result = await Vote.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } },
        { new: true }
      );
      res.send({ newVote: result, msg: "Vote updated" });
    } catch (error) {
      console.log(error);
    }
  });
  
  //delete vote
  
  voteRouter.delete("/delete/:user_id/:idea_id", async (req, res) => {
    try {
      let result = await Vote.findOneAndDelete({
        user_id: req.params.user_id,
        idea_id: req.params.idea_id,
      });
      if (result) {
        res.send({ msg: "Vote is deleted" });
      } else {
        res.status(404).send({ msg: "Vote not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Internal Server Error" });
    }
  });

module.exports = voteRouter;
