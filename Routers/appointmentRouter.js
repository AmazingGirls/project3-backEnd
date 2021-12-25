const express = require("express");
const appointmentRouter = express.Router();
const {
  getAllAppointment,
  saveAppointment,
} = require("../Controllers/appointmentController");
const {Appointment}= require('../Models/appointmentSchema')
appointmentRouter.get("/", getAllAppointment);
appointmentRouter.post("/save", saveAppointment);
// serviceRouter.post('/oneService', getOneService)

module.exports = { appointmentRouter };
 