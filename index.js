const express = require("express");
const server = express();
const port = process.env.PORT || 3000;
const student = require("./studentList.json");

server.post("/student", (req, res) => {
  console.log(student);
  res.send("dummy");
});

server.get("/student/studentList", (req, res) => {
  res.send(student);
});

server.listen(port, () => {
  console.log(`Server starter at port ${port}`);
});
