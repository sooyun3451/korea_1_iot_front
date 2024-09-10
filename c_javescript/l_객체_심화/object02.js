// object02.js

//# 3. JSON 객체
// : JavaScript Object Notation(자바스크립트 객체 표기법)

//? JSON 구조
// : 기본데이터 타입의 문자, 숫자, 배열, 불리언, 객체 등 모두를 포함
// >> 배열과 객체를 활용하여 자료의 형태를 구조화

// 'key-value'(키-값)의 쌍으로 데이터를 구성
// >> 순수한 텍스트 형식의 자로: 키를 항상 따옴표로 작성
// >> 함수 사용이 불가
// >> 문자열은 큰따옴표 사용을 권장

//? JSON 사용
// : 서로 다른 시스템 간에 구조화된 데이터를 전송하는데 사용

//? JSON 데이터 예시

// 객체 정의
let data = [
  {
    name: '홍길동',
    age: 50,
    job: 'developer',
    hobby: {
      fist: 'exercise',
      second: 'reading'
    },
    lecture: ['java','python', 'dbms']
  },
  {
    name: '홍길서',
    age: 50,
    job: 'employee',
    hobby: {
      fist: 'health',
      second: 'baseball'
  }
  }
];

//& 1) JSON.stringfy(자바스크립트 객체)
// : 자바스크립트 객체를 JSON문자열로 변환
// 데이터에 바로 적용X >> JSON 내장 객체에 사용

console.log('JSON으로 변환');

console.log(JSON.stringify(data));

// cf) .stringfy()메서드의 인자
// (JSON으로 변환할 데이터, 속성추출, 들여쓰기 N칸)

// - 속성추출
// : 원하는 객체의 속성만 가져오는 경우
// >> 비워둘 경우 null 지정

// - 들여쓰기 N칸
// : JSON 형태의 가독성을 향상 (2칸을 주로 사용)

console.log('들여쓰기 설정 JSON 데이터');
console.log(JSON.stringify(data, null, 2));

//& 2. JSON.parse()
// : JSON문자열을 자바스크립트 객체로 전환

let jsonData = JSON.stringify(data);
console.log(jsonData);

console.log('=== 자바스크립트 객체 출력 ===');
console.log(JSON.parse(jsonData)); // 객체는 콘솔창에 색이 있는 글자들 json은 그냥 흰색으로 

