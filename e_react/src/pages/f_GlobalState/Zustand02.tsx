import React, { useState } from "react";
import { useMemberStore } from "../../stores/user.store";
import { userAuthStore } from "../../stores/auth.store";

function Zustand02() {
  const { members, addMember } = useMemberStore();
  const { user, logout } = userAuthStore();

  const handleCreate = () => {
    addMember({
      id: 1,
      name: "홍길동",
    });
  };

  return (
    <div>
      {members.map((user) => (
        <div>
          <p>
            {user.id} / {user.name}
          </p>
        </div>
      ))}
      <button onClick={handleCreate}>추가</button>

      <hr />
      <p>Welcome {user}</p>
      <Login />
      <button onClick={logout}>로그아웃</button>
    </div>
  );
}

//# 로그인 컴포넌트
const Login = () => {
  const [username, setUsername] = useState("");
  const { login } = userAuthStore();

  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => login(username)}>로그인</button>
    </>
  );
};

export default Zustand02;
