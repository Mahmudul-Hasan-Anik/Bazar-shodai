const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const { readFileSync } = require("fs");
const connectDatabase = require("./Database/Database");
// const { registration } = require("./Controller/registrationController");
// const { login } = require("./Controller/LoginController");
const authRouter = require("./Routes/authRouter.js");
const app = express();

dotenv.config();
app.use(morgan("tiny"));
app.use(express.json());

connectDatabase();

app.get("/", function (req, res) {
  res.send("Hello World");
});

// readFileSync("./Routes").map((file) =>
//   app.use("/", require(`./Routes/${file}`))
// );

app.use("/", authRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server running on port : ${port}`);
});
