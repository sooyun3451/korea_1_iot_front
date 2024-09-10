// interface01.ts
export const tmp = '';

//! 인터페이스 정의 
// : 객체(속성 + 메서드) 구조를 정의하는 타입스크립트의 기능
// +) 함수 타입 정의도 가능
// >> 객체가 어떤 프로퍼티와 메서드를 가져야 하는지 명시

// : 컴파일 시점에 타입 체킹을 위해 사용되는 걔념
// >> 다양한 구현체에 동일한 인터페이스를 적용하여 일관성과 재사용성 제공

// cf) 타입 별칭(type alias)
// - 다양한 데이터의 타입을 명시 가능
// >> 원시타입, 유니온, 인터섹션 등 모든 타입을 별칭으로 지정 가능

//? 인터페이스 구현 방범(명시)
// : interface 키워드를 사용하여 명시
// : 인터페이스명은 대문자로 시작
// >> 객체의 문법 체계를 모두 사용 가능(옵셔널, readonly 모두 가능)

// cf) 타입 별칭
type UserType = {
  name: string;
  age: number
}

// interface 예시
// : 사용할 객체명 앞에 I(대문자 i)를 사용
interface IUser {
  // 객체의 속성 타입을 명시
  name?: string;
  readonly age: number;

  // 객체의 메서드 타입을 명시
  // 메서드명(매개변수: 타입): 반환타입;
  // >> 객체의 메서드(함수)의 경우 function 키워드 사용X
  greet(): void;
};

let userA: IUser = {
  age: 50,
  greet: () => {
    console.log('반환값이 없는 메서드');
  }
};

userA.greet(); // 반환값이 없는 메서드

//? 클래스에서 인터페이스 구현
// : implements 키워드를 사용하여 해당 타입을 가지는 클래스를 정의
class Student implements IUser {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello my name in ${this.name}`);
  }
}

const student1 = new Student('홍길동', 30);
const student2 = new Student('홍길서', 20);

student1.greet(); // Hello my name in 홍길동
student2.greet(); // Hello my name in 홍길서

//? 인터페이스 확장
// : extends 키워드를 사용하여 확장

// cf) 타입 별칭의 경우 확장 시 
// >> 유니온, 인터섹션 등 다양한 타입 기능을 활용

interface Shape {
  color: string;
}


interface Square extends Shape {
  // color: string; // 해당 속성이 생략된 것처럼 작동(확장)
  sideLength: number;
}

let square1: Square = {
  sideLength: 10,
  color: 'red'
}
