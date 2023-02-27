import http from "http";
import WebSocket from "ws"; /*npm i ws*/
import express from "express";

const app = express();

app.set("view engine", "pug"); //view template, pug로 설정
app.set("views", __dirname + "/views"); //view 디렉토리 설정
app.use("/public", express.static(__dirname + "/public")); //public 폴더를 유저에게 공개 설정.
app.get("/", (req, res) => res.render("home")); //홈페이지로 이동 시 사용될 템플링을 렌더링.
app.get("/*", (req, res) => res.redirect("/")); //catchall url 생성, 다른 url은 사용안하고 home만 사용하기 때문.

const handleListen = () => console.log(`Listening on http://localhost:3000`);
// app.listen(3000, handleListen);

const server = http.createServer(app); /*express.js를 통해 http서버 만들고,서버 접근 가능 설정*/

const wss = new WebSocket.Server({ server }); /*server을 전달하여, http서버 위에 ws서버 만들기. 둘 다 같은 port를 사용하니, http, webSocket(ws) 둘 다 작동.*/
                                              /*고로, 우리의 서버는 http protocol과 ws connection(연결)을 지원 가능하게 되었다. 둘 중 하나의 서버만 가동해도 상관없다.*/
const sockets = [];

wss.on("connection", (socket) => {
    sockets.push(socket);
    socket["nickname"] = "익명";
    console.log("Connected to Browser ✅")
    socket.on("close", ()=> console.log("Disconnect from Server ❌"))
    socket.on("message", (message) => {
        const messageString = message.toString('utf8');
        const parsed = JSON.parse(messageString);
        switch (parsed.type){
            case "new_message":
                sockets.forEach(aSocket => { aSocket.send(`${socket.nickname}: ${parsed.payload}`) });
            case "nickname":
                socket["nickname"] = parsed.payload;
        }
        // const messageString = message.toString('utf8');
        // socket.send(messageString);
    })
    // socket.send("Welcome!");
})

server.listen(3000, handleListen);
