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
   websocket = new WebSocket(wsUri);
   websocket.onopen = function (evt) {
      writeToScreen("CONNECTED");
   };

   const input = document.getElementById('input').value;
   const message = "Отправитель: " + input;
   writeToScreen(message);
   websocket.send(message);

   websocket.onmessage = function (evt) {
      writeToScreen(
         '<span style="color: blue;">RESPONSE: ' + evt.data + '</span>'
      );
   };
   websocket.onerror = function (evt) {
      writeToScreen(
         '<span style="color: red;">ERROR:</span> ' + evt.data
      );
   };

});
