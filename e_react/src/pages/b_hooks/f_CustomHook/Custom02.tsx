import useInput from "./useInput";

function Custom02() {
  
  // 커스텀 훅을 사용한 input창 상태 관리
  //# 이름 입력에 대한 관리
  const {
    value: name,
    bind: nameBind, // value 데이터 값, onChange 변화 함수
    reset: nameReset,
  } = useInput("");

  //# 이메일 입력에 대한 관리
  const {
    value: email,
    bind: emailBind, 
    reset: emailReset 
  } = useInput("");

  //# 닉네임 입력에 대한 관리
  const {
    value: nickname,
    bind: nicknameBind,
    reset: nicknameReset
  } = useInput('');

  const handleSubmit = () => {
    console.log(`회원가입 완료: Name: ${name}, Email: ${email}, NickName: ${nickname}`);
    nameReset();
    emailReset();
    nicknameReset();
  };

  return (
    <div>
      <input
        type="text"
        name="usename"
        placeholder="사용자 이름"
        // UI에 바인딩(적혀)되어 실질적으로 프로세스가 구현
        {...nameBind}
      />
      <button onClick={nameReset}>이름 초기화</button>

      <input
        type="text"
        name="email"
        placeholder="사용자 이메일"
        value={emailBind.value}
        onChange={emailBind.onchange}
      />
      <button onClick={emailReset}>이메일 초기화</button>

      {/* 사용자 별명(nickname)입력창 */}
      {/* 해당 입력 창에 대한 초기화 */}
      <input
        type="text" 
        name="nicname"
        placeholder="사용자 닉네임"
        {...nicknameBind}
      />
      <button onClick={nicknameReset}>닉네임 초기화</button>
      
      <button onClick={handleSubmit}>회원가입</button>
    </div>
  );
}

export default Custom02;
