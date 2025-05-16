// Èíèöèàëèçàöèÿ Telegram Web App
const tg = window.Telegram.WebApp;

// Âêëþ÷àåì ðàñøèðåííûé ðåæèì (åñëè íåîáõîäèìî)
tg.expand();




// Óñòàíàâëèâàåì òåêñò äëÿ ãëàâíîé êíîïêè Telegram (êàê ïðèìåð)
tg.MainButton.setText("Начать тест");
tg.MainButton.show();

tg.SecondaryButton.setText("О тесте");
tg.SecondaryButton.position = "top";
tg.SecondaryButton.show();
tg.SecondaryButton.isVisible = true;


function updateContent(html_file) {
  fetch(html_file)
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка сети');
      }
      return response.text();
    })
    .then(data => {
      // Обновляем содержимое контейнера
      document.getElementById('myContainer').innerHTML = data;
    })
    .catch(error => {
      console.error('Произошла ошибка при загрузке:', error);
      document.getElementById('myContainer').innerHTML = '<p>Ошибка загрузки содержимого</p>';
    });
}

updateContent('content1.html')



// Ïîñûëàåì ãîòîâíîñòü ê îòîáðàæåíèþ èíòåðôåéñà â êëèåíòå
tg.ready()


tg.MainButton.onClick(function () {
    tg.showAlert("Хорошо, ты нажал на главную кнопку и боту отправились данные");
    tg.sendData("Хорошо, ты нажал на главную кнопку и боту отправились данные");
});

tg.SecondaryButton.onClick(function () {
    tg.showAlert("О тесте...");
});











