const express = require("express");
const cors = require("cors");
const db_connect = require("./config/db_connect");
require("dotenv").config();
const app = express();

//connect to database
db_connect();
app.use(express.json());
//add cors
app.use(cors());

//our routes
app.use("/product", require("./routes/product"));
app.use("/blog", require("./routes/blogRoute"));
app.use("/commentaire", require("./routes/commentaireRoute"));
app.use("/idea", require("./routes/ideasRoute"));
app.use("/user", require("./routes/userRoute"));
app.use("/vote", require("./routes/voteRoute"));

//get port from .env
PORT = process.env.PORT;

//test our server
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log("server is running")
);
