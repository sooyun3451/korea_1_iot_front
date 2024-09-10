import React from 'react'

// 함수형 컴포넌트 snippets: rfc, rfce

//# 자식 컴포넌트
// 화살표 함수를 사용한 컴포넌트 생성

// - 부모로부터 사용자에 대한 데이터를 전달(props)받이 UI로 반환
// >> props는 반드시 객체의 형태
type User = {
  name: string;
  age: number;
  email: string;
}

// props데이터는 변수, 객체든 상관없이 무조건 {} 객체 내에 작성
// : 객체의 데이터는 한 번에 받아오기 위해서는 본인의 {}객체 틀 외에 또 다른 {}객체 틀로 묶어야 함
type UserCardProps = { user: User };

// const UserCard = ({name, age, email}: User) => {
// >> 각각의 속성명을 변수로 사용(구조 분해 할당)
// {name, age, email} = { '홍길동', 30, 'hong@gmail.com' }

const UserCard = ({ user }: UserCardProps) => {
  // { user } = { props전달: User }
  // { user } = {{ name: '홍길동', age: 30, email: 'hong@gmail.com }}

  console.log(user.name);
  console.log(user.age);

  const {name, age, email} = user; // 구조분해할당
  console.log(name);
  console.log(age);
  console.log(email);  
  return (
    // 단일 루트 노드: JSX는 반드시 하나의 루트 태그를 가져야 함!
    <>
    <h4>{user.name}</h4>
    <p>Age: {age}</p>
    <p>Age: {user.age}</p>
    <p>Email: {email}</p>
    <p>Email: {user.email}</p>
    </>
  )
  
}

//* 다른 컴포넌트를 감싸는 Wrapper 컴포넌트
// >> props 데이터로 다른 컴포넌트를 전달받음
// >> children 자식 요소 컴포넌트

type ChildrenType = {
  // ReactNode: React내의 HTML요소들 + 사용자 정의 컴포넌트들의 타입
  children: React.ReactNode;
}

export const Wraaper = ({ children }: ChildrenType) => {
  return (
    <div style={{ border: '2px solid black', padding: '16px', background: 'green'}}>
      {/* props로 전달받은 React의 HTML요소들 + 사용자 정의 컴포넌트(UI) */}
      {/* UI가 Node요소로써 태그 내에 담길 경우 반드시 열리고 닫히는 태그 사이에 내용으로 첨부 */}
      {children}
    </div>
  )
}


//# 부모 컴포넌트
function Props02() {
  const userData = {
    name: '홍길동',
    age: 30,
    email: 'hong@gmail.com'
  }
  return (
    <Wraaper>
    {/* props는 반드시 매개변수명={전달할 데이터} */}
    <UserCard user={userData} />
    <UserCard user={{ name: '홍길서', age:20, email: 'hong@gmalil.com' }} />

    <div>안녕</div>
    {/* <UserCard {name='홍길동' age=30 email='hong@gmail.com }/> */}
    </Wraaper>

  )
}

export default Props02