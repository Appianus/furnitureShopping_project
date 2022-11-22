const shoppingBasket = document.querySelector("#dragInteract");

const overlapCheck = [];

const COPYSTR = "copy_";
const INPUTSTR = "_input";

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", this.id);
}

function drop(event) {
  event.preventDefault();
  let goodsId = event.dataTransfer.getData("text");
  productToBasket(goodsId);
}

function buttonToInput(event) {
  const change = document.querySelector(`#${event} .text`);
  const button = document.querySelector(`#${event} button`);
  button.classList.add("hidden");
  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("required", "");
  input.setAttribute("value", 1);
  input.id = event + INPUTSTR;
  change.appendChild(input);
}

shoppingBasket.addEventListener("dragover", allowDrop);
shoppingBasket.addEventListener("drop", drop);

