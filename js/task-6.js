function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const contrElem = document.querySelector("#controls");
const boxElem = document.querySelector("#boxes");
const inputElem = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

destroyBtn.classList.add("destroy");
inputElem.classList.add("input-amount");
createBtn.classList.add("create");

createBtn.addEventListener("click", () => {
  const amount = Number(inputElem.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputElem.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

function createBoxes(amount) {
  boxElem.innerHTML = "";

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const newBoxElem = document.createElement("div");
    newBoxElem.style.width = `${30 + i * 10}px`;
    newBoxElem.style.height = `${30 + i * 10}px`;
    newBoxElem.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(newBoxElem);
  }

  boxElem.appendChild(fragment);
}

function destroyBoxes() {
  boxElem.innerHTML = "";
}

destroyBtn.addEventListener("click", destroyBoxes);
