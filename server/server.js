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
    connection.end();
  });
}
app.use(express.static("public"));

//this should work to get client data

var characters = [
  {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  },
  {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  },
  {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    forcePoints: 1350
  }
];

axios.get("/db", (req, res) => {
  res.json(characters);
});
