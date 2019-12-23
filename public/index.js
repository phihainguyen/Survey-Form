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
const data = {
  hello: "chicken",
  address: "1123 Stanely St",
  firstName: "Fred",
  lastName: "Flintstone"
};

// const options = {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//     "Content-Type": "application/json"
//   }
// };

// getData();
// async function getData() {
//   const resp = await fetch("/api", options);
//   const data = await resp.json();
//   console.log(data.status);

// axios
//   .post("/form", data)
//   .then((req, res) => {
//     console.log("this is the response");
//     console.log("this is the ", req);
//     res.json("helkjed adhas");
//   })
//   .catch(err => console.log(err));

const nameValue = document.getElementById("name").value;
const emailValue = document.getElementById("email").value;
const ageValue = document.getElementById("age").value;
