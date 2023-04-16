const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    //required: true,
    unique: true,
  },
  password: {
    type: String,
    //required: true,
  }
});

userSchema.methods.comparePassword = async function(plainPassword) {
  try {
    return await bcrypt.compare(plainPassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};


module.exports = mongoose.model("User", userSchema);