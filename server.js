///Dependencies/////
const express = require("express");
const methodOverride = require("method-override")
const app = express();
const Parent = require("./models/parents.js");
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

//update to move to controller route


///Middleware/////
app.use(express.urlencoded({extended:true}));
app.use(express.json()) //
//allows for post, put and delete
app.use(methodOverride('_method'))



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
app.get("/Parent-Helper", (req, res)=>{
  res.render("index.ejs");
});


///New : GET //  '/products/new' 3/7
app.get("/Parent-Helper/new", (req, res)=>{
  res.render("new.ejs");
});

//show : GET '/parents/:id' 2/7
app.get("/Parent-Helper/show", (req, res)=>{
  res.render("show.ejs");
});
// app.get('/parents/:id',(req, res)=>{
//   Parent.findById(req.params.id, (err, parent)=>{
//     res.send(parent);
//   });
// });



// create: POST '/parents' 4/7
//initial create route
// app.post('/parents/', (req, res)=>{
//     res.send('received');
// });

// app.post('/parents/', (req, res)=>{
//   if(req.body.over21 === 'on'){
//     req.body.over21 = true;
//   } else {
//     req.body.over21 = false;
//   }
//   Parent.create(req.body, err, createdParent)=>{
//     res.send(createdParent);
//   });
// });

//edit: GET '/parents/:id/edit' 5/7
app.get("/edit", (req, res)=>{
  res.render("edit.ejs");
});

// app.get("/parents/:id/edit", (req, res)=>{
//   Parent.findById(req.params.id, (err, foundParent)={
//     res.render(
//           "edit.ejs",
//           {
//               parent: foundParent
//           }
//     );
//   });
// });

//update: PUT '/parents/:id'  6/7
//need to update this code...this is placeholder for update route.
app.put("/parents/:id", (req, res)=>{
  Parent.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, parent)=>{
    if(err){
      res.send(err.message)
    } else{
      res.redirect('/parents/' + parent.id)
    }
  });
});


//delete: DELETE '/parents/:id' 7/7
app.delete('/parents/:id',(req, res)=>{
  Parent.findByIdAndRemove(req.params.id, (err, data)=>{
    res.redirect('/parents');  //redirect back to parents index
  });
});

///Parent Log in??



//////listener//////
app.listen(PORT, ()=>{
  console.log("listening...");
});
