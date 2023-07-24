const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    DNI: {
      type: String,
      unique:true
    },
    NDNI: {
      type: String,
      unique: true
    },
    Clave: {
      type: String,
      unique: true
    },
    author:{
      type:mongoose.Types.ObjectId 
    }
  },
)
const userr = new mongoose.model('userr',userSchema)

  module.exports = {userr}