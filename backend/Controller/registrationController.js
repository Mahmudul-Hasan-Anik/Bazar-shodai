const {
  emailValidation,
  lengthValidation,
  userNameValidation,
} = require("../Helpers/validation.js");
const User = require("../Models/userModels.js");
const bcrypt = require("bcrypt");
const { genarentToken } = require("../Helpers/token.js");

exports.registration = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      gender,
      birthDay,
      birthMonth,
      birthYear,
    } = req.body;

    // CHECKING VALIDATION
    if (!emailValidation(email)) {
      return res.status(500).send({ massage: "Email not valid" });
    }

    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      return res.status(400).send({ massage: "This email already used" });
    }

    // FIRST NAME LENGTH CHECK
    if (!lengthValidation(firstName, 30, 4)) {
      return res
        .status(400)
        .send({ massage: "First Name must between 4 to 20 character" });
    }

    // LAST NAME LENGTH CHECK
    if (!lengthValidation(lastName, 30, 3)) {
      return res
        .status(400)
        .send({ massage: "Last Name must between 3 to 20 character" });
    }

    // PASSWORD LENGTH CHECK
    if (!lengthValidation(password, 30, 8)) {
      return res
        .status(400)
        .send({ massage: "Password Must be minimum 8 character" });
    }

    const bcryptedPassword = bcrypt.hashSync(password, 10);

    // USER NAME SET AND VALIDATION
    const temporaryUserName = firstName + lastName;
    const newUserName = await userNameValidation(temporaryUserName);

    const newUser = new User({
      firstName,
      lastName,
      userName: newUserName,
      email,
      password: bcryptedPassword,
      gender,
      birthDay,
      birthMonth,
      birthYear,
    });

    await newUser.save();

    // GENERET AUTH TOKEN
    const token = genarentToken({ id: newUser._id.toString() }, "3d");

    res.send({
      id: newUser._id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      userName: newUser.userName,
      token: token,
      massage: "Registration Successful",
    });
  } catch (error) {
    res.status(400).json({ massage: "There was an error occuerd" });
  }
};
