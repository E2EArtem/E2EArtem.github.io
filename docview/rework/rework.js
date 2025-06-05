tg.BackButton.onClick(() => {
    tg.BackButton.hide();
    //tg.DeviceStorage.removeItem("openDoc");
    window.location.href = '/docview/docview.html';
});
tg.BackButton.show();

tg.MainButton.setText("Отправить");
tg.MainButton.disable();
tg.MainButton.color = tg.themeParams.hint_color;
tg.MainButton.show();

let docUIN;

getValue('openDoc')
    .then((value) => {
        if ((value != null) && (value != undefined)) {
            const jsValue = JSON.parse(value);

            document.getElementById('header').innerHTML = `${jsValue.OrgName}<br>СЗ № ${jsValue.PolnyNomer} по проекту ${jsValue.Project}`;

            docUIN = jsValue.UIN;

            tg.MainButton.onClick(() => {
                let commentData = {
                    UserID: UserUIN,
                    SzID: docUIN,
                    Comment: document.getElementById('commentField').value.toString().trim()
                };

                let url = serverURL + "2022/hs/sz/mod"
                let options = {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Authorization": `Basic ${credentials}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(commentData)
                }

                fetch(url, options)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Ошибка HTTP: ${response.status}`);
                        }
                        // В зависимости от возвращаемых данных можно выбрать response.json() или response.text()
                        console.log(response);
                        //window.location.href = '/index.html';
                    })
                    .then(data => {
                        console.log("Результат запроса:", data);
                        window.location.href = '/index.html';
                    })
            })
            tg.MainButton.enable();
            tg.MainButton.color = tg.themeParams.button_color;

            //outputString = `СЗ № ${jsValue.PolnyNomer}<br>От ${jsValue.Data}<br>Организация ${jsValue.OrgName}<br>Сумма: ${jsValue.Summa}`
            //document.getElementById('DinamicContainer').innerHTML = outputString;
        }
    })
    .catch((error) => {
        //showAlert("Ошибка ", error);
    });