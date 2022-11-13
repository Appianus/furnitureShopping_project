const cards = document.querySelectorAll(".card");
const basket = document.querySelector("#dragInteract");

cards.forEach((item) => {
  item.addEventListener("dragstart", (event) => console.log(event));
});
//img는 자체적으로 draggable인데. img를 draggable 막는게 더 효율적.
// 하지만 일부러 코딩 실력을 위해서, if문으로 img의 값이 잡혔을 때, card div가 잡혔을 때. 두 가지 경우를 구분해서 만들어보자.

//해야하는 것.
// 1.드래그 이벤트 시작시(dragstart)에 상품에 대한 데이터를 별도로 저장하기.
// 1-1)target이 img일때 각 위치 및 수치 찾기.
// 1-2)target이 .card 일때 각 위치 및 수치 찾기

// 2.drop으로 장바구니 란에 넣었을 때 별도 저장한 데이터를 가져와서. 그 안에 다시 제품 품목으로 구현하기.

// 3. 2의 drop이벤트 이후, 담기 버튼은 사라지고, 안에 대신 input 태그를 구현하며 제품의 갯수를 입력할 수 있도록 만들기.

// 4. 2번 drop이벤트로 한번 더 같은 데이터를 끌어올 시에 input 태그 안에 수치를 +1 시키기

// 5. drop존의 각 제품의 input값(갯수)과 가격을 다 합산하여 최종 가격에 합계를 띄우기.

// 6.drop 존의 각 제품들에 대한 정보는 모두 별도로 다른 데이터에 저장되어야 함. 마지막에 영수증으로 canvars에 영수증으로 구현하여야 하기 때문.
