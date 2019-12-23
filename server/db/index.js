const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  password: "password",
  database: "survey_db",
  user: "root",
  host: "localhost",
  port: "3306"
});
let surveydb = {};
surveydb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM survey", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

surveydb.post = ()=>
module.exports = surveydb;
