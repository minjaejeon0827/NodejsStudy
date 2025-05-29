// 설치한 express 라이브러리 불러오는 코드
const express = require('express')
const app = express()

// public폴더안에 있는 파일들을 html에서 가져다가 쓰고 싶으면 서버파일에 app.use라는 문법으로 public 폴더를 등록해야 한다. 
// 그럼 이제 public 폴더안에 있는 css파일 이미지파일 js파일은 전부 html에서 가져다가 쓸 수 있다. 
// 참고로 css, js, 이미지 파일들을 static 파일들이라고 부른다. 
app.use(express.static(__dirname + '/public'));

// 실제 웹서버 8080포트에 띄우기 (실제 웹서버 실행하는 내 컴퓨터에 PORT 8080 하나 오픈하는 문법 의미)
app.listen(8080, () => {
  console.log('http://localhost:8080 에서 서버 실행중')
})

// (GET) Rest API - 유저가 메인페이지('/') 접속하면 '반갑다'라는 글자 유저에게 전송
// app.get() 도 실은 함수이다. 
// app.get() 안에서 사용하는 () => {} 부분도 함수 만들어서 집어넣는 문법이다.
// 이런 식으로 다른 함수 소괄호 안에 들어가는 함수 () => {} 를 멋있는 말로 콜백함수라고 부른다. 
// 자바스크립트에서 특정 함수들이나 특정 코드들을 순차적으로 차례차례 실행하고 싶을 때 콜백함수를 자주 사용한다. 
app.get('/', (요청, 응답)=>{
  // 응답.send('반갑다')
  // (__dirname이라고 쓰면 (언더바 2개) 현재 server.js 파일의 상위 디렉토리 절대경로가 나옴.)
  // 근데 index.html은 server.js와 같은 폴더에 있으니까
  // __dirname 뒤에 /index.html 만 추가하면 index.html 파일경로가 나옴.
  응답.sendFile(__dirname + '/index.html')   // 누가 메인페이지('/') 방문시 index.html 파일 보내기 
})

// (GET) Rest API - 유저가 오늘의뉴스('/news') 접속하면 '오늘 비옴'라는 글자 유저에게 전송
// 이 코드가 어떻게 실행되냐면 
// 누가 /news로 접속하면 자동으로 app.get() 이라는게 함수가 실행되어서 접속요청을 처리해주는데
// 근데 app.get 함수가 실행되고 나서 그 다음에 바로 콜백함수 () => {} 내에 있는 코드가 실행됨.
// 함수 소괄호 안에 들어가는 함수를 '콜백함수'라고 부른다는 것만 상식으로 알아두자. 
app.get('/news', (요청, 응답)=>{
  응답.send('오늘 비옴')
}) 

// (GET) Rest API - 유저가 쇼핑페이지('/shop') 접속하면 '쇼핑페이지입니다'라는 글자 유저에게 전송
app.get('/shop', (요청, 응답)=>{
  응답.send('쇼핑페이지입니다')
}) 

// (GET) Rest API - 유저가 자기소개페이지('/about') 접속하면 about.html 파일 유저에게 전송
app.get('/about', (요청, 응답)=>{
  응답.sendFile(__dirname + '/about.html')   // 누가 자기소개페이지('/about') 방문시 about.html 파일 보내기 
})


// [코딩애플] Node.js, MongoDB 스터디 
// Part 1 : (신버전)
// 1강 - 남자라면 서버개발을 할 줄 알아야함
// 2강 - Nodejs의 장점이 뭐냐면
// 3강 - Node.js, Express 설치와 셋팅
// 4강 - 웹페이지 보내주려면 (라우팅)
// 5강 - 웹페이지에 디자인 넣으려면
// 6강 - MongoDB 호스팅받고 셋팅하기

// MongoDB 초기셋팅 및 호스팅 방법
// 참고 URL - https://parkdoyoung98.tistory.com/entry/MongoDB-%EC%B4%88%EA%B8%B0%EC%85%8B%ED%8C%85-%EC%B4%88%EA%B0%84%EB%8B%A8-MongoDB-%EC%85%8B%ED%8C%85%ED%95%98%EA%B8%B0-feat-%EB%AC%B4%EB%A3%8C-%ED%98%B8%EC%8A%A4%ED%8C%85

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

// Node.js 개발환경 셋팅 순서 
// 1. VSCode 실행 -> 터미널창 열기 -> 터미널창에 순서대로 아래 명령어 입력 및 엔터
//    npm init -y (package.json 파일 생성)
//    npm install express (express 라이브러리 설치)

// 2. server.js 파일안에 아래처럼 서버코드 작성

// 3. VSCode 실행 -> 터미널창 열기 -> 터미널창에 아래 명령어 입력 및 엔터 -> server.js 파일 실행 -> 실제 웹서버(8080포트) 띄우기 완료 
// node server.js

// 4. 3번 명령어를 실행하는 경우 소스코드를 수정했을 경우 ctrl + c 눌러서 터미널에 실행하던걸 끄고 다시 node server.js를 입력해야 수정사항을 미리볼 수 있다. 
//    다만 이렇게 매번 입력하는게 귀찮으면 nodemon 사용하면 된다. 
//    그럼 이제 서버파일을 띄울 때 node말고 nodemon server.js 이렇게 입력해둘 수 있는데
//    그러면 소스코드를 변경 후 파일저장하면 얘가 알아서 서버도 재시작 진행 
//    이제 코드짜고 저장만 하면 끝임 
//    터미널 열어서 실행되고있던거 ctrl + c 눌러서 끄고 아래 명령어 사용해서 nodemon 설치 진행
// npm install -g nodemon