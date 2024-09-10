// z_self_practice.js

//& 1. 객체 생성
// : person 객체 생성 - name (문자열), age (숫자), isStudent (불리언) 속성을 추가

//  cf) 불리언 타입의 변수명 지정
// : true(참), false(거짓) - 2가지의 값만을 가짐
// >> is,has와 같이 동사와 명사를 결합한 변수명을 주로 사용

// is : 명사 >> isStudent? : 학생이니
// has : 동사 >> hasEatLunch? : 점심 먹었어?

let person = { //# 객체 리터럴 방식 {}중괄호 사용
  // 속성(변수)
  // '키': '값' 쌍으로 정의, 여러개의 속성은 콤마로 구분
  name: '홍길동',
  age: '21',
  isStudent: true
}

// 객체의 속성값에 접근
// 객체명.속성키
// 객체명[속성키]
console.log(person.age); //21

//& 2. 배열 사용
// : fruits 배열을 생성하고, 여러 가지 과일 이름을 문자열로 추가(3가지)
// : 두 번째 과일을 콘솔에 출력
let fruits = ['banana', 'orange', 'grape'];

// 배열의 요소에 접근: 배열명[인덱스번호]
console.log(fruits[1]); //orange

// 3. 함수 정의
// : 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 함수 add를 작성
// >> 매개변수 o, 반환값 o
function add(x,y) {
  return x + y;
}
console.log(add(3,2)); //5

const addArrow = (a,b) => {
  return a + b
}

console.log(addArrow(5,10)); //15


//? 문제 2

//& 1. 객체 탐색
// : 초급에서 작성한 person 객체의 모든 속성과 값을 순회하며 콘솔에 출력하는 코드를 작성
// >> for in 반복문 사용

//* for in반복문
// : 객체와 배열의 순회를 가볍게 처리하는 반복문(for문의 객체, 배열 순회 - 인덱스번호가 필요 X)
let array = [1, 2, 3, 4, 5];

// array배열 안을(in) 순회하면서 각 요소의 인덱스를 할당
// : 배열의 요소에 접근하기 위해서 [] 대괄호 연산자를 사용
for(let num in array) {
  console.log(array[num]);
}

for(let key in person) {
  console.log(`${key} : ${person[key]}`);
}

//& 2. 배열 메서드(배열 내장 함수) 사용
// : 초급에서 작성한 fruits의 모든 과일을 대문자로 변환하여 새 배열에 저장하고, 이 배열을 콘솔에 출력
let toUpperCaseFruits = fruits.map((fruits) => {
  return fruits.toUpperCase();
});

console.log(toUpperCaseFruits(fruits));

//& 3. 함수 활용
// : 두 개의 배열을 매개변수로 받아, 첫 번째 배열의 모든 요소에 두 번째 배열의 요소를 순서대로 더한 새 배열을 반환하는 함수를 작성
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

function combineArrays(array1, array2) {
  return array1.map((value, index) => {
    value + array2[index];
  });
}

console.log(combineArrays(array1, array2));

// [1, 2, 3]
// [4, 5, 6]
// >> [5, 7, 9]

//? 문제 3
//& 1. 객체 깊은 복사
// : person 객체를 '깊은 복사'하는 함수를 작성

// +) 객체의 깊은 복사 JSON 자료형을 사용
// >> JSON.stringfy(객체 데이터) : 객체데이터를 JSON으로
// >> JSON.parse(JSON데이터) : JSON을 객체데이터로 

//& 2. 배열과 객체를 활용한 데이터 처리
// : 아래의 users 배열에서 성인 사용자(18세 이상)만 필터링하고, 필터링(filter)된 사용자의 이름을 새 배열로 만들어 반환(map)하는 함수를 작성
// : 메서드 체이닝 사용

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Doe", age: 18 }
];