const buyButton = document.querySelector("#payment button");
let totalSumPrice = document.querySelector("#sumPrice");

function renewalCards() {
  const basketCards = document.querySelectorAll("#dragInteract .card");
  let sumGoodsPrice = 0;
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

shoppingBasket.addEventListener("drop", renewalCards);
shoppingBasket.addEventListener("drop", sumPrice);
