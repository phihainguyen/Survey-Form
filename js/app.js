const express = require("express");
const app = express();
console.log("hello");
let formGroup = document.querySelectorAll(".form-group");
const name = document.querySelector("#name");
formGroup.forEach(group => {
  group.addEventListener("change", input);
});
function input(e) {
  console.log(e.target.value);
  console.log(e.target.name);
}
// name.addEventListener("keyup", input);

app.get("/", function(req, res) {
  res.send("hello world");
});

app.listen(3000, () => console.log("listening at 3000"));
