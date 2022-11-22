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
  input.setAttribute("min", 1);
  input.setAttribute("required", "");
  input.setAttribute("value", 1);
  input.id = event + INPUTSTR;
  change.appendChild(input);
}

shoppingBasket.addEventListener("dragover", allowDrop);
shoppingBasket.addEventListener("drop", drop);

//img는 자체적으로 draggable인데. img를 draggable 막는게 더 효율적.
// 하지만 일부러 코딩 실력을 위해서, if문으로 img의 값이 잡혔을 때, card div가 잡혔을 때. 두 가지 경우를 구분해서 만들어보자.

//해야하는 것.

// 6.drop 존의 각 제품들에 대한 정보는 모두 별도로 다른 데이터에 저장되어야 함. 마지막에 영수증으로 canvars에 영수증으로 구현하여야 하기 때문.
