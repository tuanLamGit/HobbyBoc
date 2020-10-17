const router = require("express").Router();
let Donor = require("../models/donor.model.js");

//the first route to handles incoming http get request on the user path
router.route("/").get((req, res) => {
  Donor.find() // mongoose method that look thru the database for that user
    .then((donor) => res.json(donor))
    .catch((err) => res.status(400).json("Error: " + err));
});

// the 2nd route that handles incoming post request
router.route("/add").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const donation = req.body.donation;
  const address = req.body.address;
  const email = req.body.email

  //creating a new instance of user
  const newDonor = new Donor({ firstName, lastName, address, donation, email });

  //saving that instance to the database
  newDonor
    .save()
    .then(() => res.json("Donor added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//finds user via id
router.route("/:id").get((req, res) => {
  Donor.findById(req.params.id)
    .then((donor) => res.json(donor))
    .catch((err) => res.status(400).json("Error: " + err));
});

//delete user by id
router.route("/:id").delete((req, res) => {
  Donor.findByIdAndDelete(req.params.id)
    .then(() => res.json("donor deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

//update user by id
router.route("/update/:id").post((req, res) =>{
  Donor.findById(req.params.id)
    .then((donor) => {
      donor.firstName = req.body.firstName;
      donor.lastName = req.body.lastName;
      donor.donation = req.body.donation
      donor.address = req.body.address;
      donor.email = req.body.email;

      donor
        .save()
        .then(() => res.json("Donor updated"))
        .catch( (err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
})

module.exports = router;