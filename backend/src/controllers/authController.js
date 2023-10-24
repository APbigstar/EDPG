const User = require("../models/user");

const signup = (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already exists" });
    } else {
      const newUser = new User({ name, email, password });
      newUser.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Signup successful" });
        }
      });
    }
  });
};

const signin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login successful", user: user });
      } else {
        res.send({ message: "Wrong credentials" });
      }
    } else {
      res.send("Not registered");
    }
  });
};

module.exports = { signup, signin };
