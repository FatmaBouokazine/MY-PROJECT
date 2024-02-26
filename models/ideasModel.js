const mongoose = require("mongoose");
const ideaSchema = new mongoose.Schema({
  project_name: String,
  user_id: String,
  title: String,
  description: String,
  Available_Resources: String,
  Unavailable_Resources: String,
  Number_Employees: Number,
  project_Cost: Number,
  budget: Number,
  like: { type: [String], default: [] },
  status: { type: String, default: false },
  etat: { type: String, default: false },
});

const Idea = mongoose.model("Idea", ideaSchema);
module.exports = Idea;
