const store = document.querySelector("#store");

let product = {};

fetch("https://appianus.github.io/furnitureShopping_project/json/store.json")
  .then((response) => response.json())
  .then((data) => {
    product = data;
    if (product !== null) {
      product.products.forEach(paintProduct);
    }
    // 데이터를 받아서 카드를 만든 이후에 cards를 만들어야하기 때문에 하단 위치. fetch는 비동기 처리이기 때문.
    const cards = document.querySelectorAll(".card");
    cards.forEach((item) => {
      item.addEventListener("dragstart", drag);
    });
  })
  .catch((error) => console.log("에러 발생 : ", error));

function paintProduct(product) {
  //스토어에 제품 카드 구현
  const cardDiv = document.createElement("div");
  cardDiv.id = product.id;
  cardDiv.classList.add("card");
  cardDiv.setAttribute("draggable", "true");
  //큰 카드 만들기.
  const ImgDiv = document.createElement("div");
  ImgDiv.classList.add("card_img");
  const photo = document.createElement("img");
  photo.src = `img/product/${product.photo}`;
  photo.setAttribute("alt", "/");
  ImgDiv.appendChild(photo);
  //카드 내부 상단 이미지 구획 자동 입력 및 결합.
  const textDiv = document.createElement("div");
  textDiv.classList.add("text");
  //카드 내부 하단부 글자구획 결합전.
  const title = document.createElement("h4");
  title.classList.add("searchData");
  title.innerText = product.title;
  //제품명 자동입력.
  const brand = document.createElement("span");
  brand.classList.add("searchData");
  brand.innerText = product.brand;
  //브랜드명 자동입력
  const priceText = document.createElement("p");
  priceText.innerText = "가격 : ";
  const price = document.createElement("p");
  price.innerText = product.price;
  //가격 자동 입력
  title.classList.add("textLeft");
  brand.classList.add("textLeft");
  priceText.classList.add("textLeft", "combinePrice");
  price.classList.add("textLeft");
  const button = document.createElement("button");
  button.classList.add("blackButton", "marginLeft0");
  button.innerText = "담기";
  //버튼 제작
  textDiv.appendChild(title);
  textDiv.appendChild(brand);
  textDiv.appendChild(priceText);
  textDiv.appendChild(price);
  textDiv.appendChild(button);
  //카드 하단부 텍스트 부분 결합

  cardDiv.appendChild(ImgDiv);
  cardDiv.appendChild(textDiv);
  //카드 상하단부 결합

  store.appendChild(cardDiv);
  //전체 카드를 html에 구현.
}
//나중에 createElement / classList / innerText / appendChild 등으로 덕지덕지 붙힌게. 효율적일지? 그냥 innerHTML 등으로 한 문장으로 만드는게 더 깔끔한 코드일지 고민.
