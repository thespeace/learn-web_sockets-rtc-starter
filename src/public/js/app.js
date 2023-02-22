const messageList = document.querySelector("ul");
const nickForm = document.querySelector("#nick");
const messageForm = document.querySelector("#message");
const socket = new WebSocket(`ws://${window.location.host}`);

function makeMessage(type, payload){
    const msg = {type, payload};
    return JSON.stringify(msg);
}

socket.addEventListener("open", () => {
    console.log("Connected to Server ✅")
})

socket.addEventListener("message", (message)=>{
    // console.log("New message ", message.data)
    const li = document.createElement("li");
    li.innerText = message.data;
    messageList.append(li);
})

socket.addEventListener("close", ()=>{
    console.log("Disconnect from Server ❌")
})

// setTimeout(()=>{
//     socket.send("hello from the browser!")
// }, 10000)

messageForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const input = messageForm.querySelector("input");
    socket.send(makeMessage("new_message", input.value));
    input.value = "";
})
nickForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const nick = nickForm.querySelector("input");
    socket.send(makeMessage("nickname", nick.value));
})
