// object04.js

//! 객체의 속성 존재 여부 확인
// : 객체에 없는 속성에 접근 - undefined 자료형
// >> 조건문을 활용하여 undefined 여부 확인

// 객체 생성
let object = {
  name: '홍길동',
  age: 50,
  job: 'developer'
}

//# 1. 객체 내부에 해당 속성 여부 확인
if(object.name !== undefined) {
  console.log('name 속성 O');
}else {
  console.log('name 속성 X')
}
//name 속성 O

//# 2. 조건문을 연산자로 간단하게 표시
// object.name
// object.hobby

//? 1) 논리 연산자(and, or, not)
// or 연산자
// >> 둘 중 하나라도 true면 true
object.name || console.log('name 속성이 없습니다'); //name 속성 O
// object.name이 nudefined면 clg출력
object.hobby || console.log('hobby속성이 없습니다'); //hobby속성이 없습니다

!object.name || console.log('name 속성이 있습니다'); //name 속성이 있습니다

// and연산자
// 모두 true여야 true
console.log('and연산자');
object.name && console.log('name 속성이 있습니다'); //name 속성이 있습니다

//! 기본 속성 지정
//? 2) 삼항 연산자

// 객체의 속성값 할당 & 속성 생성
// 객체.속성 = 값;
object.name 
= object.name !== undefined ? object.name : '이름을 알 수 없는 고객';

object.hobby 
= object.hobby !== undefined ? object.hobby : '취미를 알 수 없는 고객';

// { name: '홍길동', age: 50, job: 'developer', hobby: '취미를 알 수 없는 고객' }
console.log(object);

// >> 논리 연산자로 변환
object.height = object.height || '키를 알 수 없음';
object.name = object.name || '키를 알 수 없음';

console.log(object);

