// generic04.ts
export const tmp = '';

//! 유니온 타입과 제네릭

// 유니온 타입(OR, |)
// : 여러 타입 중 하나가 될 수 있는 값을 의미

//? 유니온 타입을 제네릭에 타입 변수에 적용
// extends 키워드를 사용(확장)

// 해당 함수 호출 시 
// : string 또는 number 타입의 매개변수만 적용
function unionGeneric<T extends string | number>(value: T) {
  if(typeof value === 'string') {
    return value.toLowerCase();
  } else {
    return value; // 숫자 데이터
  }
}

const result1 = unionGeneric('sTrInG');
const result2 = unionGeneric(1000);

console.log(result1, result2); // string 1000

//# 제네릭 유틸리티 타입
// : TS에 내장된 제네릭 타입
// >> 기존의 타입을 변환하거나 조작하는데 사용

//? 1. Partial(부분적인, 선택적인)
// >> 모든 속성을 선택적으로 만들어줌
// >> Partial<T>

interface User {
  name: string;
  age: number;
}

const users: {[key: number]: User} = {
  1: {
    name: '홍길동',
    age: 50
  },
  2: {
    name: '홍길서',
    age: 30
  }
}

// 사용자 데이터를 업데이트(수정)하는 함수 구현
// >> id값을 사용하여 해당 데이터의 name 또는 age 값을 수정
function updateUser(id: number, chages: Partial<User>) {
  const user = users[id]; // User 타입의 객체

  if(!user) {
    console.log(`해당 id의 사용자는 없습니다.`);
  }

  // changes (객체 >> name, age 모두 선택적 속성)
  users[id] = { ...user, ...chages }; // 스프레드 연산자를 사용하여 객체의 '속성: 값'의 형태만 추출

  // {name: '홍길동', age: 50, name: '홍길서'}
}

updateUser(1, {name: '홍길남'});
updateUser(2, {age: 10});
updateUser(3, {name: '홍길북'});

console.log(users[1]); // { name: '홍길남', age: 50 }
console.log(users[2]); // { name: '홍길서', age: 10 }
console.log(users[3]); // { name: '홍길북' }

updateUser(1, {name: '최소윤', age: 20});
console.log(users[1]); // { name: '최소윤', age: 20 }

//? 2. Readonly
// : 모든 속성을 읽기 전용 속성으로 변경(상수)
// : Readonly<T>

interface Human {
  name: string;
  age: number;
}

let user: Readonly<Human> = {
  // 값의 변경이 안되는 옵션
  name: '홍길동',
  age: 30
}

// user.name = '홍길서'; - Error: 읽기 전용 속성이므로 'name'에 할당할 수 없습니다.


//? 3. Omit(생략하다)
// : 특정 속성을 제거한 타입을 반환
// : Omit<T, K>
// >> T타입에서 K 속성을 제거

interface Employee {
  id: number;
  name: string;
  age: number;
  position: string;
}

// interface EmployeeNotId {
//   name: string;
//   age: number;
//   position: string;
// }

type EmployeeWithoutID = Omit<Employee, 'id'>;

const newEmployee: EmployeeWithoutID = {
  name: '홍길서',
  age: 20,
  position: '개발자'
}

const totalData: Employee = {
  id: 3,
  name: '홍길남',
  age: 30,
  position: '총무'
}