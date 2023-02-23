# Noom

Zoom Clone using NodeJS, WebRTC and Websockets

---
## 개발환경 구축

1. Nodemon 설정
   1. nodemon.json 생성 후 

### -nodemon.json
1. exec : run server.js

### -babel.config.json
1. preset :  `i @babel/preset-env -D`

---
## 해당 환경 세팅에 대한 전체 흐름
#### express를 사용한 일반적인 NodeJS 설정 > package.json, script 생성 > babel-node 실행, babel.config.json > preset 실행 > 
1. Nodemon
   1. Nodemon은 프로젝트 파일의 변경 사항을 살펴보고 서버를 재시작해주는 도구입니다.
   2. 해당 프로젝트는 서버를 재시작하는 대신에 babel-node를 실행합니다.
2. Babel
   1. 우리가 작성한 코드를 일반 NodeJs 코드로 컴파일 해줍니다. (경로 작성 필수)
3. Express
   1. 어플리케이션을 구성
4. Pug
   1. view engine 설정 및 views 디렉토리 설정
5. 파일 경로
   1. app.js : FrontEnd == browser
   2. server.js : BackEnd == server
