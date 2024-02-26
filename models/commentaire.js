const mongoose = require("mongoose");
const schema = mongoose.Schema;

const commentaireSchema = new schema({
    user_id :{type:String,required:true},
    commentaire_contenue :{type:String,required:true},
})

const Commentaire = mongoose.model("Commentaire",commentaireSchema);
module.exports = Commentaire;