const mongoose = require("mongoose");
const schema = mongoose.Schema;

const voteSchema = new schema({
    user_id :{type:String,required:true},
    idea_id :{type:String,required:true},
})

const vote = mongoose.model("vote",voteSchema);
module.exports = vote;