const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");
const cors = require('cors')


// settings
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json())
app.use(cors())
app.use("/api", userRoute);



app.get("/", (req, res) => {
    res.send("Welcome to my API");
  });

  mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));



// server listening
app.listen(port, () => console.log("Server listening on port", port));