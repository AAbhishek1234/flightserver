const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
require("dotenv").config(); // Load environment variables
const connectDB = require("./src/models/conn");
const Flight = require("./src/models/flightShema");
const flightRouter = require("./src/routers/flightRouter");
connectDB();

app.use(express.json());
app.use(flightRouter);

app.get("/", (_req, res) => {
  res.send("<h1>Hello from Shrut</h1>");
});

app.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
});
