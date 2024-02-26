const express = require("express")
const blogRouter = express.Router();
const Blog = require('../models/blog')
//add blog
blogRouter.post("/add", async (req, res) => {
    try {
      let newBlog = new Blog(req.body);
      const result = await newBlog.save();
      res.send({ blog: result, msg: "blog added" });
    } catch (error) {
      console.log(error);
    }
  });

  //get all blogs
blogRouter.get("/all", async (req, res) => {
    try {
      let result = await Blog.find();
      res.send({
        blogs: result,
        msg: "all blogs",
      });
    } catch (error) {
      console.log(error);
    }
  });
  
  ///get  blogs by id
  blogRouter.get("/getbyid/:id", async (req, res) => {
    try {
      let result = await Blog.findById(req.params.id);
      res.send({
        blogs: result,
        msg: "this is blog by id",
      });
    } catch (error) {
      console.log(error);
    }
  });
  
  //update blog by id
  
  blogRouter.put("/update/:id", async (req, res) => {
    try {
      let result = await Blog.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } },
        { new: true }
      );
      res.send({ newBlog: result, msg: "Blog updated" });
    } catch (error) {
      console.log(error);
    }
  });
  
  //delete blog
  
  blogRouter.delete("/delete/:id", async (req, res) => {
    try {
      let result = await Blog.findByIdAndDelete(req.params.id);
      res.send({ msg: "blog is delete" });
    } catch (error) {
      console.log(error);
    }
  });

module.exports = blogRouter;
