export const tmp = '';

let count: number = 0;

function updateDisplay():void {
  const countElement = document.getElementById('countValue');

  if(countElement) {
    // 숫자자료형.toSring() 
    // : 문자로 변환 메서드
    countElement.textContent = count.toString();
  }
}

function increment():void {
  count++;
  updateDisplay();
}

function decrement():void {
  count--;
  updateDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
  const incrementBtn = document.getElementById('incrementBtn');
  
  const decrementBtn = document.getElementById('decrementBtn');

  if(incrementBtn) {
    incrementBtn.addEventListener('click', increment);
  }

  if(decrementBtn) {
    decrementBtn.addEventListener('click', decrement);
  }
})

// tsc tsExample.ts
// : ts파일을 js파일로 컴파일 해주는 명령어(tsc)