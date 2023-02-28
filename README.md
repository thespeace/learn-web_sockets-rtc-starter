# WebSockets

## Server Setup
#### 자세한 설정은 파일 소스코드 확인.
1. 프로젝트 생성 후, 해당 폴더 터미널에서 ``npm init -y``를 입력.
2. 해당 프로젝트를 열고 package.json 파일을 설정(모듈 설치 시 자동 업데이트).
   1. ``npm i nodemon -D`` : 서버 재시작 모듈 설치 후, *nodemon.json* 파일 생성.
   2. ``npm i @babel/core @babel/cli @babel/node @babel/preset-env -D`` : JavaScript 트랜스컴파일러 babel 설치  후, *babel.config.json* 파일 생성/ 만일 오류가 발생하면 각각 따로따로 설치.   
3. ```npm i express``` 실행.
4. 서버 설정이 들어갈 src > *server.js* 생성 후 설정.
5. ```npm run dev```로 적상 작동 확인.
---
## Frontend Setup
#### 자세한 설정은 파일 소스코드 확인.
1. src > public > js > *app.js* 파일 생성 : js
2. src > views > *home.pug* 파일 생성 : view template. ex) html
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

