// todo01.ts

export const tmp = '';

//! 타입스크립트로 TODO리스트 구현

/*
# 데이터 구조
배열 >> 객체
EX) 회원들 >> 회원 / 상품들 >> 상품
할 일들(ITodoItem[]) >> 할 일(객체 - interface, ITodoItem)

할 일 목록(리스트) 타입
:ITodoItem[]
>> 배열 메서드

- 배열 타입 정의 
문자열 요소 배열: string[]
숫자형 요소 배열: number[]

# 요구사항(기능정리)
? - Todo(할 일, 객체) 항목의 인터페이스 정의(ITodoItem)
  : id(number), task(string), completed(boolean) (3가지 속성)
>> 각각의 할 일을 todos 배열로 관리

? - Todo 리스트를 관리할 수 있는 함수 구현
  1. addTodo: 새로운 할 일을 추가
  2. completedTodo: Todo항목의 completed상태를 true로 변경
  3. deleteTodo: Todo항목을 삭제

  >> 각 함수는 Todo 항목 배열(todos)를 입력받고, 변경된 배열을 반환
*/

//& 할 일 객체의 인터페이스 명시
interface ITodoItem {
  id: number;
  task: string;
  completed: boolean;
}

//# 할 일을 추가하는 함수
function addTodo(todos: ITodoItem[], task: string): ITodoItem[] {

  const newTodo: ITodoItem = {
  id: Math.max(0, ...todos.map(todo => todo.id)) + 1 ,
  task: task,
  completed: false
  };
  const newTodos = [...todos, newTodo];
  return newTodos;
}

//# 완료를 바꾸는 함수
function completedTodo(todos: ITodoItem[], id: number): ITodoItem[] {
  
  const changeTodo: ITodoItem[] = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  return changeTodo;
}



//# 지정한 할 일 요소를 제거하는 함수
function deleteTodo(todos: ITodoItem[], id: number): ITodoItem[] {

  const changeTodo = todos.filter(todo => todo.id !== id);

  return changeTodo;
}



//# 함수 사용 예시
let todos: ITodoItem[] = [];

todos = addTodo(todos, '타입스크립트 복습');
todos = addTodo(todos, '자바스크립트 복습');
todos = addTodo(todos, 'SQLD 공부');
console.log(todos);

todos = completedTodo(todos, 3);
todos = completedTodo(todos, 1);
console.log(todos);

todos = completedTodo(todos, 1);
console.log(todos);

todos = deleteTodo(todos,1);
todos = deleteTodo(todos,3);

todos = addTodo(todos, 'HTML/CSS 복습'); // id값: 3
console.log(todos);
