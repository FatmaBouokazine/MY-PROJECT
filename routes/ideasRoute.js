const express = require("express");
const Idea = require("../models/ideasModel");

const ideaRouter = express.Router();

/**************************************
 * ************Add idea****************
 * ***********************************/

ideaRouter.post("/add", async (req, res) => {
  try {
    let newIdea = new Idea(req.body);
    let result = await newIdea.save();
    res.send({ idea: result, msg: "idea is added" });
  } catch (error) {
    console.log(error);
  }
});
/**************************************
 * ************Get all Idea****************
 * ***********************************/

ideaRouter.get("/", async (req, res) => {
  try {
    let result = await Idea.find();
    res.send({ idea: result, msg: "all ideas" });
  } catch (error) {
    console.log(error);
  }
});
/**************************************
 * ************Get Idea by id****************
 * ***********************************/
//get idea by id 
ideaRouter.get("/:id",async(req,res)=>{
    try {
      let result=await Idea.findById(req.params.id);
      res.send({idea:result,msg:"all ideas"})
    } catch (error) {
      console.log(error)
    }
   });

/**************************************
 * ************delete Idea****************
 * ***********************************/
ideaRouter.delete("/:id",async(req,res)=>{
    try {
      let result=await Idea.findByIdAndDelete(req.params.id);
      res.send({msg:"idea is delete"})
    } catch (error) {
      console.log(error)
    }
   });
/**************************************
 * ************Update Idea****************
 * ***********************************/
   ideaRouter.put("/:id",async(req,res)=>{
    try {
      let result=await Idea.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}},{new:true});
      res.send({msg:"idea is updated "})
    } catch (error) {
      console.log(error)
    }
   });


    /**************************************
 * ************Update Idea like****************
 * ***********************************/
  ideaRouter.put("/like/:id",async(req,res)=>{
    try {
      let result=await Idea.findByIdAndUpdate({_id:req.params.id},{$set:{like:req.body}},{new:true});
      res.send({msg:"idea is updated "})
    } catch (error) {
      console.log(error)
    }
   });
module.exports = ideaRouter;
