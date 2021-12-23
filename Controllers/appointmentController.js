const { Appointment } = require("../Models/appointmentSchema");

const getAllAppointment = (req, res) => {
  Appointment.find({ Appointment }).than((result) => { 
    res
      .status(200)
      .json(result)
      .catch((error) => {
        res.status(404).json(error);
      });
  });
};
const saveAppointment = (req, res) => {
  const { name, price } = req.body;
  const newAppointment = new Appointment({
    name,
    price,
  });
  newAppointment
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json(err, "Error, Service Provider Can Not Saving ");
    });
};
module.exports = { saveAppointment, getAllAppointment };
