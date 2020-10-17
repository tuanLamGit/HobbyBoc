const router = require("express").Router();
let User = require("../models/user.model.js");

//the first route to handles incoming http get request on the user path
router.route("/").get((req, res) => {
  User.find() // mongoose method that look thru the database for that user
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

// the 2nd route that handles incoming post request
router.route("/add").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const interest = req.body.interest;
  const address = req.body.address;
  const big = req.body.big;
  const little = req.body.little;
  const email = req.body.email;

  //creating a new instance of user
  const newUser = new User({ firstName, lastName, interest, address, big, little, email });

  //saving that instance to the database
  newUser
    .save()
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//finds user via id
router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

//delete user by id
router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("user deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

//update user by id
router.route("/update/:id").post((req, res) =>{
  User.findById(req.params.id)
    .then((user) => {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.interest = req.body.interest;
      user.address = req.body.address;
      user.big = req.body.big;
      user.little =  req.body.little;
      user.email = req.body.email;

      user
        .save()
        .then(() => res.json("User updated"))
        .catch( (err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
})

module.exports = router;