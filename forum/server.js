// TODO: 터미널 창 에서 명령어 "node server.js" 입력 및 엔터시 아래와 같은 오류 메시지 출력 시
//       오류 메시지 "node : 'node' 용어가 cmdlet, 함수, 스크립트 파일 또는 실행할 수 있는 프로그램 이름으로 인식되지 않습니다. 
//       이름이 정확한지 확인하고 경로가 포함된 경우 경로가 올바른지 검증한 다음 다시 시도하십시오."
//       기본 터미널 창이 powershell이기 때문에 발생하는 오류 이므로, 
//       1. ctrl+shift+p 누른 후 맨 위에 뜨는 Terminal:Select Default Profile 선택 or 검색창에 'Terminal:Select Default Profile' 치기
//       2. Command Prompt로 설정 후 터미널 닫았다 다시 열기(Ctrl+`는 터미널 열기)
//       3. 기본 터미널 변한거 확인하기
// 참고 URL - https://yeon960.tistory.com/269

// TODO: 터미널 창 에서 명령어 "node server.js" 입력 및 엔터시 오류 메시지 "'node'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다."
//       출력시 시스템 환경 변수 편집 화면 들어가서 항목 Path에 node.js 경로 "C:\Program Files\nodejs" 추가하기 (2025.05.12 minjae)
// 참고 URL - https://bbeomgeun.tistory.com/37

// TODO: Q. 윈도우 Powershell에서 빨간글씨로 허가되지않은 스크립트, 보안오류가 뜸
//       시작 - 검색 - Powershell 검색 - 우클릭 - 관리자 권한으로 실행한 뒤
//       Set-ExecutionPolicy RemoteSigned 라고 입력해보고 에디터 껐다 켜야함. (2025.05.19 minjae)
// 참고 URL - https://learn.microsoft.com/ko-kr/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.5

// [코딩애플] Node.js, MongoDB 스터디 
// Part 1 : (신버전)
// 1강 - 남자라면 서버개발을 할 줄 알아야함
// 2강 - Nodejs의 장점이 뭐냐면
// 3강 - Node.js, Express 설치와 셋팅


// Node.js 개발환경 셋팅 순서 
// 1. VSCode 실행 -> 터미널창 열기 -> 터미널창에 순서대로 아래 명령어 입력 및 엔터
//    npm init -y (package.json 파일 생성)
//    npm install express (express 라이브러리 설치)

// 2. server.js 파일안에 아래처럼 서버코드 작성

// 3. VSCode 실행 -> 터미널창 열기 -> 터미널창에 아래 명령어 입력 및 엔터 -> server.js 파일 실행 -> 실제 웹서버(8080포트) 띄우기 완료 
// node server.js

// 설치한 express 라이브러리 불러오는 코드
const express = require('express')
const app = express()

// 실제 웹서버 8080포트에 띄우기 (실제 웹서버 실행하는 내 컴퓨터에 PORT 8080 하나 오픈하는 문법 의미)
app.listen(8080, () => {
  console.log('http://localhost:8080 에서 서버 실행중')
})

// (GET) Rest API - 유저가 메인페이지('/') 접속하면 '반갑다'라는 글자 유저에게 전송
app.get('/', (요청, 응답) => {
  응답.send('반갑다')
})