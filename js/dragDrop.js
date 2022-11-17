const cards = document.querySelectorAll(".card");
const shoppingBasket = document.querySelector("#dragInteract");

const overlapCheck = [];

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", this.id);
}

function drop(event) {
  event.preventDefault();
  let goodsId = event.dataTransfer.getData("text");
  document.querySelector("#dragInteract .center").classList.add("hidden"); //원래 있던 안내 지우기.
  if (overlapCheck.includes(goodsId) === false) {
    //includes로 ID를 이용해 중복체크 구간에 같은 품목이 있는가 체크.
    const originalNod = document.getElementById(goodsId);
    const copyNode = originalNod.cloneNode(true);
    copyNode.id = `copy${goodsId}`;
    shoppingBasket.appendChild(copyNode);
    //cloneNode로 복사한 것을 만들고, 새롭게 id를 부여해서 이동시킴.
    overlapCheck.push(goodsId);
    //goodsId를 넣어서 중복체크와 나중에 영수증에서 구매하는 품목 체크.
    buttonToInput(copyNode.id);
  } else if (overlapCheck.includes(goodsId) === true) {
    const nodeInput = document.querySelector(`#copy${goodsId}input`);
    const goodsAmount = Number(nodeInput.value);
    nodeInput.value = goodsAmount + 1;
  }
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
  input.id = `${event}input`;
  change.appendChild(input);
}

shoppingBasket.addEventListener("dragover", allowDrop);
shoppingBasket.addEventListener("drop", drop);
cards.forEach((item) => {
  item.addEventListener("dragstart", drag);
});

//img는 자체적으로 draggable인데. img를 draggable 막는게 더 효율적.
// 하지만 일부러 코딩 실력을 위해서, if문으로 img의 값이 잡혔을 때, card div가 잡혔을 때. 두 가지 경우를 구분해서 만들어보자.

//해야하는 것.

// 5. drop존의 각 제품의 input값(갯수)과 가격을 다 합산하여 최종 가격에 합계를 띄우기.

// 6.drop 존의 각 제품들에 대한 정보는 모두 별도로 다른 데이터에 저장되어야 함. 마지막에 영수증으로 canvars에 영수증으로 구현하여야 하기 때문.
