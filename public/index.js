const formGroup = document.querySelectorAll(".form-group");
const name = document.querySelector("#name");
formGroup.forEach(group => {
  group.addEventListener("change", input);
});
function input(e) {
  console.log(e.target.value);
  console.log(e.target.name);
}
name.addEventListener("keyup", input);

console.log("hello world");
const data = { hello: "chicken" };
const options = {
  method: "POST",
  body: JSON.stringify(data)
};
fetch("/api", option);
