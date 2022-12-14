# practice_project

## 개요(계기)

자바스크립트의 실력에 대해서 스스로와 외부에 공개적으로 되살펴보고, 검증하기 위한 프로젝트입니다.
전국기능경기대회 2020년도 대회를 간이참고사항(＊하단 상세요소 3번에서 상세 설명)으로 그걸 목표로 몇몇 힌트를 얻어 스스로 웹 페이지를 간략하게나마 만들어보며, 스스로의 실력 테스트이자 파악을 위해 작성하게 되었습니다.

**기본적인 html/css/자바스크립트 기초 토대 실력 증진 및 검증을 위해 의도적으로 jQuery 와 부트스트랩등을 제외한 채로 기본 자바스크립트로만 작성하였습니다.**

아래의 상세 요소에 의해 결정되었습니다.

1.  포트폴리오의 필요성

    내 수준과 기술, 코딩방식을 남이 보고 판단할 수 있도록 뭔가 만들어진 페이지가 필요함.

2.  부족한 목적성

    그러나 프로그래밍 자체(컴퓨터/코딩은 이렇게 작동하는거구나, 이런식으로 코딩을 짜는구나) 기술과 지식적인 부분은 재밌는데.
    무언가 명확하게 지금 만들고 싶다는 것은 실질적으로 없어서.

    > 왜냐하면 아직 기술적으로 부족한 것을 알고 있어서, 정말 만들고 싶은건 너무 고차원적인 부분이라 불가능한것을 알고 있기 때문에. 현실적인 어려움을 생각해서 엄두가 안 남.

    무언가 아직은 내가 배운 단계 내에서 외부적으로 정해진 목표가 필요했음.

3.  부족한 확신

    완전히 개별적인 것을 골랐을 때. 막힌다면 어떤 자료를 찾아봐야할지. 그걸 찾는데 너무 오랜 시간을 투자하는 것은 비효율적이라고 판단함. 그래서 완전히 처음으로 스스로 목표를 잡는 이 프로젝트는 어느정도 정답? 이라고 할 수 있는 참고 자료가 필요했습니다.
    그래서 **1.0버전까지는 코딩애플 javaScript의 목표 사진을 우선 참고해서 작성하였습니다.**
    그 이후 **실제 2020년 지방기능경기대회 과제.pdf 파일을 참고하여 부족한 기능들을 추가 작성할 예정입니다.**

---

## 새롭게 배운 점

**아예 몰랐다가 이번 프로젝트를 하면서 새롭게 배운 점.**

1. 마크다운 작성법
   외부에 공개해보는 첫 작품으로써 어떻게 README를 작성해야하는 가.와 관련하여 마크다운 문법을 새로 배우고 테스트 해봄.

2. json파일을 서버에서 받아오기.(Ajax)
   node.js 강의로 받은 자료를 저장하고, 그 자료를 지정해 받아오는건 배웠는데.
   순수 자바로만, 그리고 JSON파일 받아오는건 처음 배웠음.

   ```javascript
   $.get("url") //jQuery식 요청.
     .done((data) => {
       //done = 요청이 끝났을 시 특정행동
       console.log(data); //받아온 데이터 콘솔창에 출력
     })
     .fail(() => {
       //fail = 요청을 실패했을 시 특정행동
       console.log("데이터 요청 실패."); //데이터 요청 실패시 출력.
     });

   //↓기본 javascript식 요청
   fetch("http://appian.dothome.co.kr/json/store.json")
     .then((response) => response.json()) //jQuery는 JSON자료를 자동으로 array/object 자료로 바꿔줘서 생략되는 문구. 유사한 것으로는 노마드 코더에서 들었던 JSON.parse()의 역활.
     //일반 API 요청에는 .json()을 뺀 response만.
     .then((data) => console.log(data))
     .catch((error) => console.log("에러 발생 :", error));
   ```

3. javaScript로 속성(setAttribute) 부여.
   속성을 자바스크립트로 부여하는것은 처음 찾아봄.

   ```javascript
   Element.setAttribute(name, value); //속성을 업데이트 혹은 새로 부여.
   //.getAttribute는 속성 확인.
   //.removeAttribute는 속성 제거.
   ```

---

## 아직 더 보완해야 할 점

**따로 배우긴 했었지만 프로젝트를 진행해보면서 아직 부족함을 느꼈던 점.**

1. 모달창 관련

   - 모달창을 보다 구분 짓기 위해서 뒤에 검은 바탕을 부여해주기 위해서 모달창은 div 2개의 구획이 필요함.

   > ex)

   ```html
   <div class="blackBg">
     <div class="whiteBg"></div>
   </div>
   ```

   ```css
   .blackBg {
     width: 100%;
     height: 100%;
     position: fixed;
     top: 0;
     left: 0;
     background: rgba(0, 0, 0, 0.5);
     z-index: 50;
   }
   .whiteBg {
     position: fixed;
     top: 50%;
     left: 50%;

     width: auto;
     height: auto;

     transform: translate(-50%, -50%);

     padding: 20px;
     box-sizing: border-box;
     text-align: center;

     background-color: #fff;
     border-radius: 10px;
     box-shadow: 0 2px 3px rgba(34, 34, 34, 0.15);
   }
   ```

   와 같이 보다 편한 구분을 위한 검은바탕으로 들어갈 div와 모달창역활의 하얀바탕의 div가 필요함.

   - 모달창을 띄울 때에는 혹시 모를 뒷배경의 스크롤을 막기 위한 처리 필요

---

## 만들다보니 궁금해진 점.

    store.js 관련
    > 1. paintProduct() 펑션 안에서 html을 전부 자바스크립트로 따로 만드는것    vs    그냥 innerHTML으로 덩어리 문장으로 만드는 것.   둘 중 뭐가 더 효율적일것인가.
    > 2. paintProduct() 펑션 안에서 appendChild() 등 어느정도 반복으로 쓰이는 구문을 내부 변수를 arr로 만들어서 이걸 반복문으로 만들면, 코딩하는 입장에서 가시성적인 면인 부분은 좋겠지만.    컴퓨터 성능적인 부분에서 괜찮을 지? 뭐가 더 바람직한 일일 것인지.    가시성은 그냥 주석으로 해결할 수도 있지 않을 까?

    dragDrop.js 관련
    > 1.img 자체의 draggable을 막아서 쉽게 처리해보기.
