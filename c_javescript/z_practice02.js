// z_practice02.js

// while문 조건식 내에 true에 대한 boolean값 사용시: 무한루프
while(true) {
  
  // ! 구구단 출력기
  // - 사용자로부터 1 ~ 9 사이의 숫자를 입력받기(prompt)

  // const number = Number(prompt('출력할 구구단의 숫자를 입력해주세요(1 ~ 9)'));
  const input = prompt('출력할 구구단의 숫자를 입력하세요(1 ~ 9) // "exit"를 입력하시면 종료됩니다.');

  // input에 대한값을 모두 소문자로
  if(input.toLocaleLowerCase() === 'exit') {
    console.log('프로그램을 종료합니다');

    // ? while문의 무한 루프의 경우 break; 키워드를 만나면 종료
    break;
  }
  // - 입력받은 데이터값을 숫자 자료형으로 변환(Number())
  const number = Number(input);
  // - 숫자로 변환한 해당 값이 1 ~ 9 사이의 수가 아닌 경우(else)

  // - 1 ~ 9 까지의 수인 경우(if)
  // , 1에서 9를 반복하여 반복한 숫자와 입력된 수를 곱셈  후 출력
  // ,  콘솔창에 안내 매시지를 출력

  if(number >= 1 && number <= 9) { // number: 'N'단 * 1 ~ 9
    console.log(`=== ${number}단 ===`);
    for(let i = 1; i <= 9; i++) {
      console.log(`${number} X ${i} = ${number * i}`);
    }
  }else{
    console.log('1에서 9사이의 숫자를 입력해주세요');
  }
}