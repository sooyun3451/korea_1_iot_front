import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

//! 컴포넌트 트리안에서의 상태
//? 상태를 컴포넌트 트리의 아래로 전달
// >> 부모에서 자삭 컴포넌트로 상태 전달

//! 상태(State) VS 속성(Props)
// 1. 상태
// - 컴포넌트 '내부'에서 관리되는 데이터
// - 상태가 변경되면 렌더링을 유발(업데이트)
// >> 컴포넌트가 '자기 자신'의 상태 변경 가능

// 2. 속성
// - 부모 컴포넌트(외부)로 부터 받은 데이터
// - 컴포넌트간의 데이터 전달에 사용
// >> 읽기전용 데이터: 자식 컴포넌트에서 수정X

// +) 리액트에서 컴포넌트는 상태와 속성을 사용하여 데이터와 UI를 관리

type UserType = {
  username: string;
  height: number;
}

const initialValue: UserType = {
  username: '홍길동',
  height: 170
}

function UseState06() {
  const [userInfo, setUserInfo] = useState<UserType>(initialValue);

  // 자식 컴포넌트에 전달할 데이터 관리
  const [submittedDate, setSubmittedDate] = useState<UserType | undefined>();

  const { username, height } = userInfo;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value
    });
  }

  const handleSubmit = () => {
    // 자식 컴포넌트에 데이터 전달
    setSubmittedDate(userInfo);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        name="username"
        value={username}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="키"
        name="height"
        value={height}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>확인</button>
      <ChildComponent userData={submittedDate} />
    </div>
  );
}

export default UseState06;
