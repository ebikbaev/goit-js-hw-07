const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", () => {
  const user = input.value.trim();
  if (user) {
    output.textContent = user;
  } else {
    output.textContent = "Anonymous";
  }
});
console.log(input.Elem);
