import React from "react";
// import ReactExample from './pages/a_basic/a_React/ReactExample';

// // 파일명까지 명시
// import Component01 from './pages/a_basic/b_Component/Component01';

// // index라는 이름을 가진 파일은 폴더명까지만 명시 가능
// import Index0826 from './pages/a_basic/b_Component';

// import JSX01 from './pages/a_basic/c_JSX/JSX01';

import Props01 from "./d_Props/Props01";
import Props02 from "./d_Props/Props02";

import Rendering01 from "./f_Rendering/Rendering01";
import Rendering02 from "./f_Rendering/Rendering02";

import Handler01 from "./g_Handler/Handler01";
import Handler02 from "./g_Handler/Handler02";

import { ChildComponent } from "./g_Handler/Handler02";
import Handle03 from "./g_Handler/Handler03";

export default function index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        리액트 기본 문법
      </h1>
      <Props01 />
      <Props02 />

      <h2>f_Rendering 리액트의 조건부 렌더링</h2>
      <Rendering01 />
      <Rendering02 />

      <h2>g_Handler 리액트의 이벤트 헨들러</h2>
      <Handler01 />
      <Handler02 />
      <Handle03 />

      <ChildComponent count={1}/>
    </div>
  );
}
