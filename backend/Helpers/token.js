var jwt = require("jsonwebtoken");

exports.genarentToken = (payload, expire) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: expire,
  });
};
