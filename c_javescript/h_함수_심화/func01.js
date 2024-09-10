// func01.js

//! 콜백 함수(고차 함수)

// 자료형 : 기본자료형 VS 참조자료형(배열, "함수", 객체)
// >> JS에서 함수는 "자료형"
//    , 변수에 할당 가능 & 함수의 매개변수로 전달 가능(인자로 사용)

//# 1. 콜백 함수(callback)
// : 다른 함수에 인자로 전달되어,그 함수의 내부에서 실행되는 함수

//# 2. 콜백 함수의 중요성
// - 비동기 처리
//   : 순차적인 코드 흐름을 개발자가 원하는 방식으로 제어 가능
// - 이벤트 리스너 처리
//   : 사용자 행동에 반응하는 이벤트를 내부에서 동작 가능

//# 3. 콜백 함수의 응용 사례
// - 서버 요청 처리 ***
// - 이번트 처리 ***
// - 타이머 함수

//& 콜백 함수 예제

//? 1) 선언적 함수를 사용한 콜백 함수 구현
console.log('=== 콜백함수: 선언적 함수 ===');

// 0부터 2까지를 "콘솔창에 출력" >> 3번 실행
function callback1(callbackFunc) { // callbackFunc 매개변수 (함수를 데이터로 전달받음)

  // 함수 내부에서 다양한 기능,동작 작성 가능

  for(let i = 0; i < 3; i++) {
    callbackFunc(i); // callbackFunc(print함수)의 인자로 i값을 전달
  }
}

//cf) let callbackFunc = (index) => {
//  console.log(`${index} 번째 함수 호출`);
//}

// 복잡한 로직 (예시)
function print(index) {
  console.log(`${index} 번째 함수 호출`);
}

callback1(print); // print함수(콜백 함수)를 callback(메인로직)의 인자로 전달

//? 2) 익명 함수를 사용한 콜백 함수 구현
console.log('=== 콜백함수: 익명함수 ===');

const print2 = function(count) {
  console.log(`${count}번째 함수 호출`);
}

callback1(print2); // print2함수(콜백함수)를 callback1(메인로직)의 인자로 전달

//? 3) 화살표 함수를 사용한 콜백 함수 구현
console.log('=== 콜백함수: 화살표 함수 ===');

function callback2(number, callbackFunc, outher) { // number변수(데이터), callbackFunc 함수
  // number의 값이 짝수인 경우 callbackFunc로 데이터 전달
  if(number % 2 === 0) {
    callbackFunc(number);
  } else {
    outher(number);
  }
}

const printEven = (even) => {
  console.log(`${even}은 짝수 입니다`);
}

const printOdds = (odds) => {
  console.log(`${odds}은 홀수 입니다`);
}

callback2(3, printEven, printOdds); // 메인 로직에 데이터(number)와 콜백함수(printeven,printodds)를 전달
callback2(4, printEven); // 메인 로직에 데이터(number)와 콜백함수(printeven)를 전달