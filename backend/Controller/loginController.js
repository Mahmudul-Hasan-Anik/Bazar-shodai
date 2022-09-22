const User = require("../Models/userModels");
const bcrypt = require("bcrypt");
const { genarentToken } = require("../Helpers/token");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send({ massage: "invalid email" });
    }

    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword) {
      return res.status(400).send({ massage: "Invalid Password" });
    } else {
      const token = genarentToken({ id: user._id.toString() }, "3d");
      res.send({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        token: token,
        massage: "Login Successful",
      });
    }
  } catch (error) {
    return res.status(400).send({ massage: "There was an error occuerd" });
  }
};
