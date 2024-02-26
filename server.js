const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(4000, () => {
  console.log("Server is running on 4000 port");
});
