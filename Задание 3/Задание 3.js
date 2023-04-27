const wsUri = 'wss://echo-ws-service.herokuapp.com';

const sendButton = document.querySelector('btn-send'); 
const geolocationButton = document.querySelector('btn-geo');

let websocket;

function writeToScreen(message) {
   let pre = document.createElement("p");
   pre.style.wordWrap = "break-word";
   pre.innerHTML = message;
   output.appendChild(pre);
}

sendButton.addEventListener('click', () => {
   const message = 'Test message';
   writeToScreen("SENT: " + message);
   websocket.send(message);
});

