import React, { useReducer } from "react";
import { reducer } from "./UseReducer01";

function UseReducer02() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div
      style={{
        backgroundColor: 'pink',
      }}
    >
      <h2>리듀서 함수 재사용</h2>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>증가</button>
      <button onClick={() => dispatch({ type: "decrement" })}>감소</button>
    </div>
  );
}

export default UseReducer02;
