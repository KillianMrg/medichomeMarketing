const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  accessToken: {
    type: String,
    required: true
  },
  full_name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  }
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;