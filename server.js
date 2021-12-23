const db = require("./db");
const cors = require("cors");
const express = require("express");
const bcrypt = require("bcrypt");
const { userRouter } = require("./Routers/userRouter");
const { serviceRouter } = require("./Routers/serviceRouter");
const { productRouter } = require("./Routers/productRouter");
const { providerRouter } = require("./Routers/providerRouter");
const { appointmentRouter } = require("./Routers/appointmentRouter");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/services", serviceRouter);
app.use("/products", productRouter);
app.use("/provider", providerRouter);
app.use("/appointment", appointmentRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
