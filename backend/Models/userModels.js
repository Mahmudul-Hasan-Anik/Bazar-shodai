const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Requried"],
  },
  userName: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is Requried"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is Requried"],
  },
  picture: {
    type: String,
    default: "",
    trim: true,
  },
  cover: {
    type: String,
    default: "",
    trim: true,
  },
  search: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
