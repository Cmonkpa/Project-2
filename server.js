///Dependencies/////
const express = require("express");
const app = express();
////listens on active port (3000 is local)////
const PORT = process.env.PORT || 3000;
///set for mongoose dependency ////
const mongoose = require("mongoose");
///sert for heroku for hosting /////
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/grocery_app_dev';
 mongoose.connect(mongoUri);




////connect to mongo ////
mongoose.connect(mongoUri, {useNewURLParser: true});
mongoose.connection.on("open", ()=>{
  console.log("connected to mongoose!!");
})
/// Controllers///




///Middleware/////





////Routes ////
///create a basic new route ////
app.get("/", (req, res)=>{
  res.send("this works");
});




//////listener//////
app.listen(PORT, ()=>{
  console.log("listening...");
});
