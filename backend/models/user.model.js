const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
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

    interest:{
      type: String,
      required: true,
      trim:true,
    },
    address:{
      type: String,
      required: true,
    },

    big:{
      type: Boolean,
      required: true,
    },
    little:{
      type: Boolean,
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

const User = mongoose.model("User", userSchema);

module.exports = User;