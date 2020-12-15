const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find() // Mongoose method get a list of users from mongoDB Atlas db - find() returns a promise - .then - .catch
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save() // Mongoose method - returns a promise - .then - .catch
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
