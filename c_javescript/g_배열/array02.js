// array02.js

// == 일반 자료형 ==
// 일반 자료형은 원본 데이터와 복사된 데이터가 별도로 저장
// : 서로 영향을 미치지 X
let num1 = 10;
let num2 = num1;
console.log(num2); // 10

num2 = 20;
console.log(num1); // 10
console.log(num2); // 20

// == 참조 자료형 (객체) ==
let array01 = [11,22,33];
let array02 = array01; // 같은 주소를 사용 

// array02 = [1, 2, 3]; // 다른 주소에서 할당
// console.log(array01); // [ 11, 22, 33 ]
// console.log(array02); // [ 1, 2, 3 ]
// 서로 영향을 미치지 X 


array01[1] = 55;
console.log(array02); // [ 11, 55, 33 ]

array02[2] = 66;
console.log(array01); // [ 11, 55, 66 ]

//? 원본과 복사본의 독립성을 보장
//! 스프레드 연산자(...) *****
// : 배열 또는 객체의 요소를 개별 요소로 확장하거나 
//  , 여러 요소를 하나의 형태로 결합할 떄 사용

// 1) 개별 요소 확장
let sports = ['축구', '야구', '농구'];
let copy = ['배구', ...sports, '펜싱']; // 독립적인 주소 체계를 가짐(... -> 안에 있는 내용만 가지고 옴)

copy[1] = 'baseball';
console.log(sports); // [ '축구', '야구', '농구' ]
console.log(copy); // [ '배구', 'baseball', '야구', '농구', '펜싱' ]

// 2) 하나의 형태로 결합
let mergeSports1 = [...sports, ...copy];
let mergeSports2 = [...copy, ...sports];
console.log(mergeSports1); //  ['축구', '야구', '농구', '배구', 'baseball' , '야구', '농구', '펜싱']
console.log(mergeSports2); // ['배구', 'baseball','야구', '농구','펜싱', '축구','야구', '농구']