const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const { readFileSync } = require("fs");
const connectDatabase = require("./Database/Database");
const authRouter = require("./Routes/authRouter.js");
const app = express();
const cors = require("cors");

dotenv.config();
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

connectDatabase();

app.get("/", function (req, res) {
  res.send("Hello World");
});

// readFileSync("./Routes").map((file) =>
//   app.use("/", require(`./Routes/${file}`))
// );

app.use("/api/user", authRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server running on port : ${port}`);
});
