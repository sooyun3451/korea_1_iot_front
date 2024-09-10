// main.js

// 1) add
// : Named Import
import { add } from "./mathModule.js";
console.log(add(1,2));

// 2) subtract
// : Default Import
import subtraction from "./mathModule.js";
console.log(subtraction(5,4))

// 3) multiply
// : Named Import (as구문: mp)
import { multiply as mp } from "./module02.js";
console.log(mp(2,5));

// 4) divide
// : 모둘 전체 가져오기 (as구문: math)
import * as math from "./mathModule.js";
console.log(math.divide(3,6));

//cf) 프로그래밍에서 0으로 나누는 경우
// >> 보통 0으로 나누는 경우 오류 발생
// >> 나누는 값(b)이 0이되지 않도록 조건문 
console.log(math.divide(10,0));

