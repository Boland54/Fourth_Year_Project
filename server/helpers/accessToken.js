const jwt = require("jsonwebtoken");

const accessToken = {

  access: (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: "15m" });
  },
};

module.exports = accessToken;