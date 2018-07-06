///Dependencies/////
const express = require("express");
const app = express();
////listens on active port (3000 is local)////
const PORT = process.env.PORT || 3000;
///set for mongoose dependency ////
const mongoose = require("mongoose");
///sert for heroku for hosting /////
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/parenthelp';


////connect to mongo ////
mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.connection.on("open", ()=>{
  console.log("connected to mongoose!!");
})
/// Controllers///




///Middleware/////
app.use(express.urlencoded({extended:true}));
app.use(express.json()) //



////Routes ////
// ___________________
// 7 Restful Routes
// ___________________
// Index  : GET    '/parents'          1/7
// Show   : GET    '/parents/:id'      2/7
// New    : GET    '/parents/new'      3/7
// Create : POST   '/parents'          4/7
// Edit   : GET    '/parents/:id/edit' 5/7
// Update : PUT    '/parents/:id'      6/7
// Delete : DELETE '/parents/:id'      7/7


///create a basic new route ////

//Index : GET '/parents'  1/7
app.get("/", (req, res)=>{
  res.send("this works");
});


///New : GET //  '/products/new' 3/7
app.get("/new", (req, res)=>{
  res.render("new.ejs");
});

//show : GET '/parents/:id' 2/7




// create: POST '/products' 4/7
app.post('/parents/', (req, res)=>{
    res.send('received');
});

//edit: GET '/parents/:id/edit' 5/7


//update: PUT '/parents/:id'  6/7



//delete: DELETE '/parents/:id' 7/7


///Parent Log in??



//////listener//////
app.listen(PORT, ()=>{
  console.log("listening...");
});
