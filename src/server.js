import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug"); //view template, pug로 설정
app.set("views", __dirname + "/views"); //view 디렉토리 설정
app.use("/public", express.static(__dirname + "/public")); //public 폴더를 유저에게 공개 설정.
app.get("/", (req, res) => res.render("home")); //url 이동시 사용될 템플링을 렌더링.
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);
// app.listen(3000, handleListen);

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

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
