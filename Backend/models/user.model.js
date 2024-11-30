const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlenght: [3, "First name must contain at least 3 characters"],
    },
    lastname: {
      type: String,
      minlenght: [3, "last name must contain at least 3 characters"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlenght: [5, "email must contain at least 3 characters"],
  },
  password: {
    type: String,
    required: true,
    select: false, //When we will find user
  },
  socketId: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;