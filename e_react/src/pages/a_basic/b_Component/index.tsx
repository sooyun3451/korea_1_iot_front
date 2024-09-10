import React from 'react'
// export 내보내기 가져오기
import { Img } from './Component01';

// 기본 내보내기 가져오기 (컴포넌트 명칭 수정 - Comp01)
import Comp01 from './Component01';

// index.tsx 파일을 컴포넌트로 사용 시
// >> 함수명을 Index로 필수 수정
export default function Index() {
  return (
    <div>
      컴포넌트 학습중 (0826, index파일)
      <Img />
      <Comp01 />
    </div>
  )
}
