// func02.js

//! 자바스크립트 함수 구조
// 매개변수(parameter) & 인자(argument) & 반환값(return)

//# 1. 매개변수(파라미터, parameter)
// : 함수를 정의하고 호출할 때 함수에 데이터를 전달하는 방식(변수) - 선언
// : 함수를 호출 시에는 괄호 안에 인수(argument)를 넣어서 전달 - 호출

//# 2. 인자(인수, 아규먼트, argument)
// : 함수를 호출할 때 전달하는 실제 값(데이터)
// : 함수 호출마다 다른 데이터 전달이 가능

function add(a, b) { // 소괄호 안의 a, b는 파라미터
  console.log(a + b);
}

add(3, 4); // 소괄호 안의 3,4는 인자값

//? 자바스크립트에서의 파라미터와 아규먼트 사용
// : 두 가지의 수가 무조건 일치할 필요 X

// cf. 변수를 선언하고 초기화하기 이전의 타입: undefined

function log(a) { // 파라미터 1개
  console.log(a);
}

log(); // undefined - 인자를 전달하지 않은 파라미터의 값은 undefined

log('안녕하세요'); // 안녕하세요

log('안녕하세요 :)', '만나서 반갑습니다'); // 안녕하세요:)
// - 여러개의 파라미터 & 인자값 나열시 콤마(,)로 구분해서 나열 가능
// - 지정된 수의 파라미터 이상의 인수는 읽히지 X

function introduce(name, age) {
  console.log(`${name} is ${age} years old`);
}

introduce('최소윤', 21);
// introduce(21,'최소윤'); - 매개변수와 인수는 차례대로 묶임

//# 3. 반환값(return, 리턴값)
// : 입력 받아 처리한 결과를 '반환'
// : return 키워드를 사용하여 반환할 데이터를 지정 가능 

// >> 함수 내에서 return 키워드 사용 시
//    , return이 읽히면 함수의 실행을 즉시 중단하고 return 뒤의 값을 반환

function subtract(a, b) { // 빼다
  let result = a - b;
  return result;
}

let outcome = subtract(10, 7); // - 반환된 값을 outcome 변수에 저장
console.log(outcome); // 3
console.log(subtract(5, 2)); // 3

//? cf) return이 없는 함수는 실행 시 undefined를 반환
//      >> 일반적으로 즉시 콘솔 출력시 사용

// 연습문제 //
// - square 함수 작성
// - 파라미터로 x를 지정
// - 반환값으로 x의 제곱을 지정
// - 반환결과를 변수에 담아 해당 변수를 콘솔창에 출력 (reault)
// - 함수 선언 방식 3가지 모두 사용 (square1,2,3)


// 1) 함수 선언식
function square1(x) {
  let double = x * x;

  // ...
  // 변수 = 최종 반환값;
  // return 변수;

  return double;
  
  // console.log('함수의 return 뒤에 나오는 로직'); - 접근할 수 없는 코드가 있습니다.(return뒤의 로직 -> 주석처럼 인식)
}

console.log(square1(3)); // 9

// 2) 함수 표현식
const square2 = function(x) {
  result = x * x;
  return result;
}

console.log(square2(4)); // 16

// 3) 화살표 함수
const square3 = x => x * x;

console.log(square3(5)); // 25

// 데이터 자체 -> 변수 (변수사용시 const X)
// {} 의 틀이 담김(로직) -> 함수(const 많이 사용)