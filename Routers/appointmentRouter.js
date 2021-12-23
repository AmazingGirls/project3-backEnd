const express = require("express");
const appointmentRouter = express.Router();
const { saveAppointment , getAllAppointment } = require("../Controllers/appointmentController");

appointmentRouter.get("/", getAllAppointment);
appointmentRouter.post("/save", saveAppointment);
// serviceRouter.post('/oneService', getOneService)

module.exports = { appointmentRouter };