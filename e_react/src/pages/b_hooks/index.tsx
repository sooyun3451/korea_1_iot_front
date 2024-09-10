import React from "react";
import UseState01 from "./a_UseState/UseState01";
import UseState02 from "./a_UseState/UseState02";
import UseState03 from "./a_UseState/UseState03";
import UseState04 from "./a_UseState/UseState04";
import UseState05 from "./a_UseState/UseState05";
import UseState06 from "./a_UseState/UseState06";

import Practice01 from "./a_UseState/Practice01";

import UseRef01 from "./b_UseRef/UseRef01";
import UseRef02 from "./b_UseRef/UseRef02";
import UseRef03 from "./b_UseRef/UseRef03";

import UseEffect01 from "./c_UseEffect/UseEffect01";
// import UseEffect02 from "./c_UseEffect/UseEffect02";

// import WebCamPractice from "./c_UseEffect/Practice01";
import TodoAppLocalStorage from "./z_Todo/TodoAppLocalStorage";
import UseMemo01 from "./d_Use_Memo_callback/UseMemo01";
import UseMemo02 from "./d_Use_Memo_callback/UseMemo02";
import UseCallback from "./d_Use_Memo_callback/UseCallback";

import UseReducer01 from "./e_UseReducer/UseReducer01";
import UseReducer02 from "./e_UseReducer/UseReducer02";

import Custom01 from "./f_CustomHook/Custom01";
import Custom02 from "./f_CustomHook/Custom02";
import { useLocation } from "react-router-dom";

function Index() {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>리액트 Hooks</h1>

      <h2>useNavigate, useLocation 사용</h2>
      <p>{username}</p>

      <h2>리액트 Hooks - 커스텀 훅</h2>
      <Custom01 />
      <Custom02 />

      <h2>리액트 Hooks - useState</h2>
      <UseState01 />
      <UseState02 />
      <UseState03 />
      <UseState04 />
      <UseState05 />
      <UseState06 />

      <hr />
      <h2>Practice01 - Todo</h2>
      <Practice01 />

      <hr />
      <h2>리액트 Hooks - useRef</h2>
      <UseRef01 />
      <UseRef02 />
      <UseRef03 />

      <hr />
      <h2>리액트 hooks - useEffect</h2>
      <UseEffect01 />
      {/* <UseEffect02 /> */}

      <hr />
      <h2>WebCamPractice</h2>
      {/* <WebCamPractice /> */}

      <hr />
      <h2>리액트z_Todo</h2>
      <TodoAppLocalStorage />

      <hr />
      <h2>리액트 Hooks - UseMemo</h2>
      <UseMemo01 />
      <UseMemo02 />

      <hr />
      <h2>리액트 Hooks - useCallback</h2>
      <UseCallback />

      <hr />
      <h2>리액트 Hooks - useReducer</h2>
      <UseReducer01 />
      <UseReducer02 />
    </div>
  );
}

export default Index;
