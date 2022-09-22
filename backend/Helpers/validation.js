const User = require("../Models/userModels");

exports.emailValidation = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};

exports.lengthValidation = (text, max, min) => {
  if (text.length > max || text.length < min) {
    return false;
  }
  return true;
};

exports.userNameValidation = async (userName) => {
  let user = false;

  do {
    const checkUser = await User.findOne({ userName });

    if (checkUser) {
      userName += (+new Date() * Math.random()).toString().substring(0, 1);
      user = true;
    } else {
      user = false;
    }
  } while (user);

  return userName;
};
