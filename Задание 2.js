< !DOCTYPE HTML >
   <html lang="ru">
      <head>
         <meta charset="UTF-8">
            <style>
               .btn{
                  padding: 10px 15px;
               border - radius: 2px;
               background: green;
               color: white;
               }
            </style>
            <title>Задание 2. Модуль 10</title>
      </head>
      <body>
         <button class="btn">узнать размер экрана</button>
      </body>
      <script>
         const screenWidth = window.screen.width
         const screenHeight = window.screen.height

         const btn = document.querySelector('.btn');

         btn.addEventListener('click', () => {
            alert('screen Width is: ' + screenWidth + '; ' + 'screen Height is: ' + screenHeight);
         })
      </script>
   </html>

