const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is Requried"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is Requried"],
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
  gender: {
    type: String,
    required: [true, "Gender is Requried"],
    trim: true,
  },
  birthDay: {
    type: Number,
    required: [true, "Birth Day is Requried"],
    trim: true,
  },
  birthMonth: {
    type: Number,
    required: [true, "Birth Month is Requried"],
    trim: true,
  },
  birthYear: {
    type: Number,
    required: [true, "Birth Year is Requried"],
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
