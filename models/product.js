const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productSchema = new schema({
    nom:String ,
    description :{type:String,required:true}
})

const Product = mongoose.model("Product",productSchema);
module.exports = Product;