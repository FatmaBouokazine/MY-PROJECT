const express = require("express")
const productRouter = express.Router();
const Product = require('../models/product')
//add product
productRouter.post("/add", async (req, res) => {
    try {
      let newProduct = new Product(req.body);
      const result = await newProduct.save();
      res.send({ product: result, msg: "product added" });
    } catch (error) {
      console.log(error);
    }
  });

  //get all products
productRouter.get("/all", async (req, res) => {
    try {
      let result = await Product.find();
      res.send({
        products: result,
        msg: "all products",
      });
    } catch (error) {
      console.log(error);
    }
  });
  
  ///get  products by id
  productRouter.get("/getbyid/:id", async (req, res) => {
    try {
      let result = await Product.findById(req.params.id);
      res.send({
        products: result,
        msg: "this is the feed back by id",
      });
    } catch (error) {
      console.log(error);
    }
  });
  
  //update product by id
  
  productRouter.put("/update/:id", async (req, res) => {
    try {
      let result = await Product.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } },
        { new: true }
      );
      res.send({ newProduct: result, msg: "Product updated" });
    } catch (error) {
      console.log(error);
    }
  });
  
  //delete product
  
  productRouter.delete("/delete/:id", async (req, res) => {
    try {
      let result = await Product.findByIdAndDelete(req.params.id);
      res.send({ msg: "product is delete" });
    } catch (error) {
      console.log(error);
    }
  });

module.exports = productRouter;
