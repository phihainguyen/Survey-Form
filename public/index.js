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
const data = { hello: "chicken", address: "1123 Stanely St" };

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
// }
axios({
  method: "post",
  url: "/db",
  exData: {
    firstName: "Finn",
    lastName: "Williams"
  }
})
  .then(repsonse => {
    console.log(response);
  })
  .catch(err => console.log(err));
