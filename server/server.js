const express = require("express");
const app = express();
const apiRroutes = require("./routes");

app.use(express.json());

//allowing us to use the routes in the index.js file inside routes folder
app.use("/api/ex", apiRroutes);
app.listen(process.env.PORT || "3000", () => {
  console.log(`listening on port ${process.env.PORT || "3000"}`);
});
//this should work
