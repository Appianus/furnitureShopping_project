const buyButton = document.querySelector("#payment button");
let totalSumPrice = document.querySelector("#sumPrice");
let sumGoodsPrice;

function productToBasket(goodsId) {
  document.querySelector("#dragInteract .center").classList.add("hidden"); //원래 있던 안내 지우기.
  if (overlapCheck.includes(goodsId) === false) {
    //includes로 ID를 이용해 중복체크 구간에 같은 품목이 있는가 체크.
    const originalNod = document.getElementById(goodsId);
    const copyNode = originalNod.cloneNode(true);
    copyNode.id = COPYSTR + goodsId;
    shoppingBasket.appendChild(copyNode);
    //cloneNode로 복사한 것을 만들고, 새롭게 id를 부여해서 이동시킴.
    overlapCheck.push(goodsId);
    //goodsId를 넣어서 중복체크와 나중에 영수증에서 구매하는 품목 체크.
    buttonToInput(copyNode.id);
  } else if (overlapCheck.includes(goodsId) === true) {
    const nodeInput = document.querySelector(
      `#${COPYSTR}${goodsId}${INPUTSTR}`
    );
    const goodsAmount = Number(nodeInput.value);
    nodeInput.value = goodsAmount + 1;
  }
  renewalCards();
  canvas();
}

function renewalCards() {
  const basketCards = document.querySelectorAll("#dragInteract .card");
  sumGoodsPrice = 0;
  function sumPrice(event) {
    const idNumSplit = event.id.split("_");
    const idNumber = Number(idNumSplit[1]);
    const goodsPrice = Number(product.products[idNumber].price);
    const basketCardInput = event.querySelector(
      `#${COPYSTR}${idNumber}${INPUTSTR}`
    );
    const goodsAmount = Number(basketCardInput.value);
    let totalPrice = goodsAmount * goodsPrice;
    sumGoodsPrice += totalPrice;
    totalSumPrice.innerText = `합계 : ${sumGoodsPrice}`;
  }
  basketCards.forEach(sumPrice);
}

function buyToPay() {
  const inputUserData = document.querySelector("#inputUserData");
  inputUserData.classList.remove("hidden");
}

shoppingBasket.addEventListener("drop", renewalCards);
shoppingBasket.addEventListener("change", renewalCards);
buyButton.addEventListener("click", buyToPay);
