const tg = window.Telegram.WebApp;
tg.SecondaryButton.onClick(SBC);
tg.SecondaryButton.setText("Обновить список документов");
tg.SecondaryButton.show();


tg.BackButton.onClick(() => {

    tg.showConfirm("Вы действительно хотите Выйти из учетной записи?", (shure) => {
        if (shure) {
            tg.BackButton.hide();
            tg.DeviceStorage.clear();
            window.location.href = '/singin/singin.html';
        }
    });
});
tg.BackButton.hide();





var docList;
var credentials;


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



getValue('credentials')
    .then((value) => {
        if (value != null) {
            console.log("Вы авторизированны");
            credentials = value;
        } else {
            console.log("Вы не авторизированны!");
            window.location.href = '/singin/singin.html';
        }
    })
    .catch((error) => {
        console.log("Вы не авторизированны!", error);
    });

// Проверяем, есть ли сохраненный список на устройстве, если есть - выводим
//SBC()

getValue('docList')
    .then((value) => {
        if (value != null) {
            const jsValue = JSON.parse(value);
            docList = jsValue;
            showDocList(jsValue);
        } else {
            SBC();
        }
    })
    .catch((error) => {
        console.log("Ошибка чтения сохраненных данных!", error);
        //tg.showAlert("Не удалось загрузить локальные данные ", error);
        SBC();
    });




function SBC() {
    const url = "https://rd.novpt.ru/2022/hs/sz/GetAllDirector";

    fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
            "Authorization": `Basic ${credentials}`
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            // В зависимости от возвращаемых данных можно выбрать response.json() или response.text()
            return response.json();
        })
        .then(data => {
            console.log("Результат запроса:", data);
            docList = data;
            showDocList(data);
            let serializedData = JSON.stringify(data);
            tg.DeviceStorage.setItem("docList", serializedData);
        })
        .catch(error => {
            console.error("Ошибка запроса:", error);
        });
}

function showDocList(data) {
    document.getElementById('DinamicContainer').innerHTML = ""
    let htmlAddString = ""
    data.forEach((doc) => {
        htmlAddString += `  <a id="${doc.UIN}" name="toDocButton" >
                            <div class="section">
                                <div>${doc.OrgName}<br>СЗ № ${doc.PolnyNomer} от ${doc.Data}<br>сумма ${doc.Summa} ${doc.Valuta}</div>
                            </div>
                        </a>         `;

        
    })
    document.getElementById('DinamicContainer').innerHTML = htmlAddString;
    document.getElementsByName("toDocButton").forEach((obj) => {
        obj.addEventListener('click', toDoc);
    });
}

function toDoc(event) {
    // Предотвращаем переход по ссылке
    event.preventDefault();

    // Ваш скрипт, который нужно выполнить
    let UIN = event.currentTarget.id;

    docList.forEach((obj) => {
        if (obj.UIN == UIN) {
            let serializedData = JSON.stringify(obj);
            console.log(serializedData)
            tg.DeviceStorage.setItem("openDoc", serializedData);

        }
    });

    // Если нужно, можно выполнить переход позже
    window.location.href = '/docview/docview.html';
}


