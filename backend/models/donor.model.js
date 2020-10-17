const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const donorSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    
    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    donation:{
      type: String,
      required: true,
      trim:true,
    },
    address:{
      type: String,
      required: true,
    },
    email:{
      type: String,
      require:true,
    }
  },
  
  {
    timestamps: true,
  }
);

const Donor = mongoose.model("Donor", donorSchema);

module.exports = Donor;