const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config

app.get("", (req, res) => {
  res.send({
    title: "404",
    name: "Andrew Mead",
    errorMessage: "Page not found.",
  });
});

app.listen(port, () => {
  console.log("Server is up on port 3000.");
});
