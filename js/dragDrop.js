const cards = document.querySelectorAll(".card");
const basket = document.querySelector("#dragInteract");

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
    //
    const originalNod = document.getElementById(goodsId);
    const copyNode = originalNod.cloneNode(true);
    copyNode.id = "copy" + goodsId;
    basket.appendChild(copyNode);
    //클론노드 코드.
    overlapCheck.push(goodsId);
    //goodsId를 넣어서 중복체크와 나중에 영수증에서 구매하는 품목 체크.
    buttonToInput(copyNode.id);
  }
}

function buttonToInput(evnet) {
  const change = document.querySelector(`#${evnet} .text`);
  const button = document.querySelector(`#${evnet} button`);
  button.classList.add("hidden");
  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("min", 1);
  input.setAttribute("required", "");
  input.setAttribute("value", 1);
  change.appendChild(input);
}

basket.addEventListener("dragover", allowDrop);
basket.addEventListener("drop", drop);
cards.forEach((item) => {
  item.addEventListener("dragstart", drag);
});

//img는 자체적으로 draggable인데. img를 draggable 막는게 더 효율적.
// 하지만 일부러 코딩 실력을 위해서, if문으로 img의 값이 잡혔을 때, card div가 잡혔을 때. 두 가지 경우를 구분해서 만들어보자.

//해야하는 것.

// 4. 2번 drop이벤트로 한번 더 같은 데이터를 끌어올 시에 input 태그 안에 수치를 +1 시키기

// 5. drop존의 각 제품의 input값(갯수)과 가격을 다 합산하여 최종 가격에 합계를 띄우기.

// 6.drop 존의 각 제품들에 대한 정보는 모두 별도로 다른 데이터에 저장되어야 함. 마지막에 영수증으로 canvars에 영수증으로 구현하여야 하기 때문.
