const express = require("express");
const app = express();
const apiRroutes = require("./routes");
const mysql = require("mysql");
const axios = require("axios");
const connection = mysql.createConnection({
  password: "password",
  database: "survey_db",
  user: "root",
  host: "localhost",
  port: "3306"
});
app.use(express.json());
app.use(express.static("../public"));

//allowing us to use the routes in the index.js file inside routes folder
app.use("/api/ex", apiRroutes);
app.listen(process.env.PORT || "3000", () => {
  console.log(`listening on port ${process.env.PORT || "3000"}`);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM survey", function(err, res) {
    if (err) {
      throw err;
    }
    console.table(res);
    // connection.end();
  });
}

//testing the post methods

app.post("/", (req, res, next) => {
  console.log("hello from post method");
  res.end(JSON.stringify(req.body));
});
