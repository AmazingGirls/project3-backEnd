const mongoose = require("mongoose");
const appoitmentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
});

module.exports.Appointment = mongoose.model("Appointment", appoitmentSchema);
