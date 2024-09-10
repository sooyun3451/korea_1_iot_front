import React, { useState } from "react";

//! useState
// : "컴포넌트 내에서" 데이터에 대한 상태 관리

// - 리액트의 이벤트 핸들러와 함께 사용
// >> UI에서 발생하는 이벤트에 반응하여 상태를 변화

//! 여러 개의 입력 상태 관리
// >> 스프레드 연산자, 비구조화 할당
const fruits = ["사과", "바나나", "망고"];
const fruits2 = [...fruits];

const person = {
  name: "홍길동",
  age: 30,
  hobby: "자전거",
};

const person1 = {
  name: "홍길서",
  age: 20,
};

const person2 = { ...person, name: "홍길서" }; // person에 {name: '홍길서', age: 30} >> name을 '홍길서'로 업데이트
const person3 = { ...person, ...person1 }; // {홍길서, 20, '자전거'}

//! 리액트 상태에서 객체를 변경할 때
const book = {
  title: "안녕",
  author: "홍길동",
};

book.title = "hello"; // 리액트에서 상태 변화 감지 X

// >> setBook ( {...book, title: 'hello'});
//    : 상태 설정 함수를 사용 + 새로운 참조값에 데이터를 담아 전달
interface ILogin {
  id: string;
  password: string
}

function UseState02() {
  //# 훅 정의
  const [inputValue, setInputValue] = useState<string>("");

  // const [id, setId] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  const [login, setLogin] = useState<ILogin>({
    id: '',
    password: ''
  });

  const {id, password} = login;

  //# 이벤트 핸들러 정의
  // : Input창에 Change(변화)가 일어나면 처리할(handle) 로직
  // : 이벤트가 어떠한 타입으로 가져오는지(React의 ChangeEvent로 >> 클릭으로 가져오면 React.ClickEvent)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // let inputText = e.target.value;
    // setInputValue(inputText);
    setInputValue(e.target.value);
  };

  const handleResetClick = () => {
    setInputValue("");
  };

  //# == 여러개의 입력값을 관리하는 핸들러 ==
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 매개변수로 전달받는 e 이벤트 객체의 target(요소) 안에는 요소에 명시되어있는 속성의 값에 접근 가능

    // - 아이디와 비밀번호의 input창을 변경할 수 있는 핸들러
    // e.target

    // {...login, 이벤트가 발생한요소명: 이벤트가발생한요소의 value값}
    // {...login, id: '안녕'}

    const { name, value } = e.target;
    setLogin({
      ...login, // id와 password 속성을 모두 가지는 login 객체 

      // name키를 가진 값을 value로 설정(해당 변경된 필드의 값만들 업데이트)
      [name]: value // id: 'hello'
    })
  }

  //# == 입력값을 초기화하는 함수 ==
  const hendleResetLogin = () => {
    setLogin({
      id: '',
      password: ''
    });
  }

  //# == 폼 제출 함수(데이터 전송)
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 폼의 기본 제출 동작 방지

    console.log('form data가 제출되었습니다: ', login);

    // 데이터에 대한 활용(제출, 사용)후에는 데이터에 대한 초기화가 필수!
    setLogin({
      id: '',
      password: ''
    });
  }

  return (
    <div>
      <p style={{ color: "blue" }}>useState와 이벤트 핸들러 같이 사용하기</p>

      {/* input텍스트를 p태그의 내용으로 전달하는 이벤트 설정 */}
      <input type="text" value={inputValue} onChange={handleInputChange} />

      {/* 
      >> onChange 이벤트
        : 사용자가 요소에 변화를 일으킬 때 마다 발생하는 이벤트
        EX) input, select, textarea 등의 요소에 적용
      */}

      <button onClick={handleResetClick}>초기화 버튼</button>
      <p>Input Value: {inputValue}</p>

      <hr />
      <h5>여러 개의 입력 상태 관리</h5>
      <form onSubmit={handleLoginSubmit}>
        <input 
          type="text"
          name="id" // 객체의 속성에 접근할 때 활용할 태그의 이름
          placeholder="아이디"
          value={id}
          onChange={handleLoginChange}
        />
        <p>아이디: {id}</p>

        <input 
          type="text" 
          name="password" // 객체의 속성에 접근할 때 활용할 태그의 이름
          placeholder="비밀번호" 
          value={password} 
          onChange={handleLoginChange}
        
        />
        <p>비밀번호: {password}</p>

        <button type="button" onClick={hendleResetLogin}>초기화</button>
        <button type="submit">전송</button>
      </form>
    </div>
  );
}

export default UseState02;
