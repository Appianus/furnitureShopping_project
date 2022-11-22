const userDataInputFinish = document.querySelector(
  "#inputUserData #inputFinish"
);
const userDataInputLeave = document.querySelector("#inputUserData #leave");
const receiptModalButton = document.querySelector("receiptModal");
const modalClose = document.querySelectorAll(".close");

function goToReceipt(event) {
  event.preventDefault();
  //대충 입력값 보내는 코드
  const inputUserData = document.querySelector("#inputUserData");
  inputUserData.classList.add("hidden");
  const receiptModal = document.querySelector("#receiptModal");
  receiptModal.classList.remove("hidden");
}
function backToMain() {
  const inputUserData = document.querySelector("#inputUserData");
  inputUserData.classList.add("hidden");
  const receiptModal = document.querySelector("#receiptModal");
  receiptModal.classList.add("hidden");
  const inputPrivacyData = document.querySelectorAll("#userData input");
  function resetInput(event) {
    event.value = "";
  }
  inputPrivacyData.forEach(resetInput);
}

function canvas() {
  const canvas = document.getElementById("canvas");
  const can = canvas.getContext("2d");
  can.clearRect(0, 0, canvas.width, canvas.height);
  let canvasLeft = 20;
  let canvasTop = 30;

  let fontMargin = 16;
  canvas.height = 350 + fontMargin * (overlapCheck.length * 3);

  can.font = "20px dotum";
  can.fillText("영수증", canvasLeft, canvasTop);
  canvasTop += 20;

  can.font = "12px dotum";
  can.fillText(getClock(), canvasLeft, canvasTop);
  canvasTop += 48;

  can.font = "14px dotum";
  function goods(goodsId) {
    const title = product.products[goodsId].title;
    const brand = product.products[goodsId].brand;
    const price = product.products[goodsId].price;
    const amount = document.querySelector(`#${COPYSTR}${goodsId}${INPUTSTR}`);
    const totalSum = Number(price) * Number(amount.value);
    if (Number(amount.value) === 0) {
    } else if (Number(amount.value) !== 0) {
      can.fillText(title, canvasLeft, canvasTop);
      canvasTop += fontMargin;

      can.fillText(brand, canvasLeft, canvasTop);
      canvasTop += fontMargin;

      can.fillText(`가격 : ${price}`, canvasLeft, canvasTop);
      canvasTop += fontMargin;

      can.fillText(`수량 : ${amount.value}`, canvasLeft, canvasTop);
      canvasTop += fontMargin;

      can.fillText(`합계 : ${totalSum}`, canvasLeft, canvasTop);
      canvasTop += fontMargin * 2;
    }
  }
  overlapCheck.forEach(goods);

  canvasTop += fontMargin * 3;
  can.fillText(`총 합계 : ${sumGoodsPrice}`, canvasLeft, canvasTop);
}

function getClock() {
  const date = new Date();
  const dayArray = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const today = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const clock = `${date.getFullYear()}-${month}-${today} ${
    dayArray[date.getDay()]
  } ${hours}:${minutes}:${seconds}`;
  return clock;
}

userDataInputFinish.addEventListener("click", goToReceipt);
userDataInputLeave.addEventListener("click", backToMain);
modalClose.forEach((event) => event.addEventListener("click", backToMain));
shoppingBasket.addEventListener("change", canvas);
