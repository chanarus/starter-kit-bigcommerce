const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const todoRoutes = require("./routes/todoRoutes");

//Middlewares
app.use(bodyParser.json());

const PORT = process.env.PORT || 4002;

app.use("/api/todos", todoRoutes);

//Here need to check the production mode
if (true) {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
