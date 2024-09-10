// main.js

//! 검색 필터 기능 

document.addEventListener('DOMContentLoaded', () => {
  // HTML요소 가져오기
  const inputField = document.querySelector('#search-input');
  const list = document.querySelector('#item-list');
  const items = document.querySelectorAll('li');
  const noResult = document.querySelector('#no-result');

  // 검색어 입력 시 이벤트 핸들러 정의 
  inputField.addEventListener('input', () => {
    // input 요소의 입력값 가져오기
    let value = inputField.value.toLowerCase();

    // 보여지는 아이템의 수를 저장하는 변수(noResult사용을 위해서)
    let visibleItemsCount = 0;

    items.forEach(item => {
      // item.textContent
      // : HTML요소 객체의 요소값

      // 문자열.includes(값)
      // : 데이터 안에 값의 포함 여부를 boolean으로 반환
      // 데이터는 배열,문자열 사용 가능

      if(item.textContent.toLowerCase().includes(value)) {
        // display속성에 '' 빈문자열 전달 시 
        // >> css 속성의 display와 동일 (보여짐)
        item.style.display = '';
        visibleItemsCount++;
      }else {
        item.style.display = 'none' //일치하지 않는 경우: 숨김
      }
    });

    noResult.style.display = visibleItemsCount > 0 ? 'none' : 'block';
  })
})