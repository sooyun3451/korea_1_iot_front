// app.js
import { TodoManager } from "./TodoManager.js";

//# 1. 프로젝트 기능 정의

// - TodoManager 모듈의 기능을 사용하여 할 일 앱을 구현
// - 이벤트 등록, 할 일 목록 업데이트 등 로직을 담당

//? todoManager의 인스턴스를 생성
const todoManager = new TodoManager();

//? HTML요소 가져오기
const form = document.querySelector('#new-todo-form');
const input = document.querySelector('#new-todo');
const totoList = document.querySelector('#todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault(); //기본 제출 이벤트 방지

  // form 내부에서 데이터를 할 일 목록에 추가
  const text = input.value.trim();

  if(text !== '') { //텍스트가 비워져있지 않다면
    todoManager.addTodo(text);
    input.value = '';
    updateTodoList(); // 할 일 목록 업데이트
  }
});

// 할 일 목록을 업데이트하는 함수
function updateTodoList() {
  // 모든 할 일 가져오기
  const todos = todoManager.getTodos();

  // ul 태그 내부의 데이터(내용)을 삭제
  // HTML요소.innerHTML
  // : 요소 내부의 전체 HTML코드를 문자열로 가져오기
  totoList.innerHTML = '';

  todos.forEach(todo => {
    // 태그에 사용된 텍스트를 그대로 전달
    const li = document.createElement('li');

    // li에 할일 넣기
    // complete되었으면 completed
    // completed되지 않으면 completed를 remove
    li.textContent = todo.text;

    if(todo.completed) { // 순회되는 요소의 완료 여부가 true라면
      li.classList.add('completed')
    }else {
      li.classList.remove('completed');
    }

    // click(완료)이 일어나면 toggleCompleted에 id전달
    // >> 완료하면 표시
    li.addEventListener('click', () => {
      todoManager.toggleCompleted(todo.id);
      updateTodoList();
    });

    // 삭제버튼 생성
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');

    // 삭제 버튼 클릭 시 해당 할 일 항목 제거
    deleteButton.addEventListener('click', (e) => {
      todoManager.removeTodo(todo.id);
      updateTodoList();
    });

    li.appendChild(deleteButton);
    
    // ul에 하위요소로 넣어주기
    // appendChild에는 '' 사용 x
    totoList.appendChild(li);
  });
}
updateTodoList();
