const mongoose = require('mongoose')

const UserDetails = new mongoose.Schema({
    Fname: {
      type: String
    },
    Lname: {
      type: String
    },
    email: { 
      type: String
    },
    Username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String
    }
  });
const UserData = mongoose.model('UserData',UserDetails)

module.exports = UserData