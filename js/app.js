const express = require("express");
const axios = require("axios");
const mysql = require("mysql");
const app = express();
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "survey_db"
});
connection.connect(error => {
  if (error) {
    console.error("hello there is error " + error);
  } else {
    console.log("successfully connected to DB");
  }
});
app.use(express.static("../public"));

app.listen(3000, () => console.log("listening at 3000"));
