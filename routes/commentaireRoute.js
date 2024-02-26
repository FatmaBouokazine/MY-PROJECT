const express = require("express")
const commentaireRouter = express.Router();
const Commentaire = require('../models/commentaire')
//add commentaire
commentaireRouter.post("/add", async (req, res) => {
    try {
      let newCommentaire = new Commentaire(req.body);
      const result = await newCommentaire.save();
      res.send({ commentaire: result, msg: "commentaire added" });
    } catch (error) {
      console.log(error);
    }
  });

  //get all commentaires
commentaireRouter.get("/all", async (req, res) => {
    try {
      let result = await Commentaire.find();
      res.send({
        commentaires: result,
        msg: "all commentaires",
      });
    } catch (error) {
      console.log(error);
    }
  });
  
  ///get  commentaires by id
  commentaireRouter.get("/getbyid/:id", async (req, res) => {
    try {
      let result = await Commentaire.findById(req.params.id);
      res.send({
        commentaires: result,
        msg: "this is commentaire by id",
      });
    } catch (error) {
      console.log(error);
    }
  });
  
  //update commentaire by id
  
  commentaireRouter.put("/update/:id", async (req, res) => {
    try {
      let result = await Commentaire.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } },
        { new: true }
      );
      res.send({ newCommentaire: result, msg: "Commentaire updated" });
    } catch (error) {
      console.log(error);
    }
  });
  
  //delete commentaire
  
  commentaireRouter.delete("/delete/:id", async (req, res) => {
    try {
      let result = await Commentaire.findByIdAndDelete(req.params.id);
      res.send({ msg: "commentaire is delete" });
    } catch (error) {
      console.log(error);
    }
  });

module.exports = commentaireRouter;
