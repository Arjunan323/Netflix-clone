const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECURITY_KEY, (err, user) => {
      if (err) res.status(403).json("Token is not valied");
      req.user = user;
      console.log(user)
      next();
    });
  } else {
    return res.status(401).json("you are not authenticated");
  }
};

module.exports = verify;