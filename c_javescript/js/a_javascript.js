// ! a_javasrcipt.js
// ? 1. JS주석
/* 
자바스크립트 여러줄 주석
*/ 

//? 2. JS 확장자
// .js

//? 3. 웹 문서에서의 JS파일 위치
//: 닫히는 body태그 바로 위에 위치

// = - 오른쪽에 있는걸 왼쪽에 대입
//웹 문서에서 button이라는 선택자를 요청하여 button에 담기
// const button = document.querySelector('button');

//#간단한 js예제

// button 요소에 클릭(click) 이벤트가 발생할 경우 updateName 기능이 실행
// button.addEventListener('click', updateName);


//updateName에 대한 기능 정의 
function updateName() {
  // 프롬프트 창으로 사용자로부터 이름을 입력받기
  const name = prompt('Enter new name');
  // 버튼의 텍스트 내용으로 입력받은 이름을 업데이트
  button.textContent = `player1 ${name}`;
  console.log(`${name}`);
}

//! 자바스크립트 개발 환경 설정

// 1. 코드 작성 및 확인
// : 개발자 도구 윈도우: (f12, ctrll+ shift + i) 맥: option + commend + u 또는 터미널

// 2. 플러그인 설치
// - 코드 스니펫
// - ESLint 

console.log('안녕하세요');
// >> 콘솔 입력 스니펫(clg)
console.log('안녕하세요');


