const tg = window.Telegram.WebApp;

tg.MainButton.onClick(MBC);
tg.MainButton.setText("Войти");
tg.MainButton.disable();
tg.MainButton.color = tg.themeParams.hint_color;
tg.MainButton.show();



tg.BackButton.onClick(() => {
    tg.BackButton.hide();
    //tg.DeviceStorage.removeItem("openDoc");
    window.location.href = '/';
});




function getValue(key) {
    return new Promise((resolve, reject) => {
        tg.DeviceStorage.getItem(key, (error, value) => {
            if (error != null) {
                tg.showAlert("Ошибка ", error);
                reject(error);
                return;
            }
            resolve(value);
        });
    });
}

document.getElementById('loginField').addEventListener('input', function () {
    const loginField = this.value.trim(); // убираем пробелы в начале и конце
    const passField = document.getElementById('passField').value.trim();;

    if ((loginField != '') && (passField != '')) {
        tg.MainButton.enable();
        tg.MainButton.color = tg.themeParams.button_color;
        tg.MainButton.hasShineEffect = true;
    } else {
        tg.MainButton.disable();
        tg.MainButton.color = tg.themeParams.hint_color;
    }
});
document.getElementById('passField').addEventListener('input', function () {
    const passField = this.value.trim(); // убираем пробелы в начале и конце
    const loginField = document.getElementById('loginField').value.trim();;

    if ((loginField != '') && (passField != '')) {
        tg.MainButton.enable();
        tg.MainButton.color = tg.themeParams.button_color;
        tg.MainButton.hasShineEffect = true;
    } else {
        tg.MainButton.disable();
        tg.MainButton.color = tg.themeParams.hint_color;
    }
});

function MBC() {
    let username = document.getElementById('loginField').value;
    let password = document.getElementById('passField').value;
    const url = "https://rd.novpt.ru/2022/hs/sz/GetAllDirector";

    // Формирование строки авторизации в формате "username:password" в Base64
    let token = btoa(`${username}:${password}`);

    fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
            "Authorization": `Basic ${token}`
        }
    })
        .then(response => {
            if (response.ok) {
                tg.DeviceStorage.setItem("credentials", token);
                window.location.href = '/';
            } else {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            // В зависимости от возвращаемых данных можно выбрать response.json() или response.text()
            return response.json();
        })
        .then(data => {
            console.log("Данные получены");
        })
        .catch(error => {
            console.error("Ошибка qwe:", error);
            tg.showAlert("Неверный логин или пароль");
        });
}



