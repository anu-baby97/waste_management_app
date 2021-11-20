const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIgMiIsInVzZXJJZCI6IjYxOGNhYzlkMDRiZTVhOWM3ZDk3MDZlNCIsInVzZXJSb2xlIjoyLCJpYXQiOjE2MzY2MjA4MjIsImV4cCI6MTYzNjYyNDQyMn0.RIPTLIlb_ndbhYEQqHyyoelIDQ1BGVV--ZDazOzLcbI";
    const token=req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, "secret_this_should_be_longer");
    req.userData = { username: decodedToken.username, userId: decodedToken.userId,userRole:decodedToken.userRole };
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
};