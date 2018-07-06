const mongoose = require("mongoose");

const parentSchema = new mongoose.Schema({
  name: {type: String, required: true },
  username: {type: String, required: true },
  numOfKids: {type: Number, min: 1, max: 6+ },
  rangeOfKids: {type: String},
  Over21: Boolean

});

const Parent = mongoose.model("Parent", parentSchema);

module.exports = Parent;
