const tg = window.Telegram.WebApp;

tg.BackButton.onClick(() => {
    tg.BackButton.hide();
    //tg.DeviceStorage.removeItem("openDoc");
    window.location.href = '/docview/docview.html';
});
tg.BackButton.show();

tg.MainButton.setText("Подписать");
tg.MainButton.onClick(MBC)
tg.MainButton.disable();
tg.MainButton.color = tg.themeParams.hint_color;
tg.MainButton.show();



function getValue(key) {
    return new Promise((resolve, reject) => {
        tg.DeviceStorage.getItem(key, (error, value) => {
            if (error != null) {
                showAlert("Ошибка ", error);
                reject(error);
                return;
            }
            resolve(value);
        });
    });
}


getValue('openDoc')
    .then((value) => {
        if (value != null) {
            const jsValue = JSON.parse(value);

            document.getElementById('header').innerHTML = `${jsValue.OrgName}<br>СЗ № ${jsValue.PolnyNomer} по проекту ${jsValue.Project}`;

            let keys = Object.keys(jsValue);
            keys.forEach(key => {
                let element = document.getElementById(key);
                if (element) {
                    element.innerHTML = jsValue[key].trim();
                }
                if (key == "Valuta") {
                    document.getElementsByName(key).forEach(n => {
                        n.innerHTML = jsValue[key];
                    })
                }

            });

            if (jsValue.SummaNDS == 0) {
                document.getElementById('spanNDS').innerHTML = "";
            }


            //outputString = `СЗ № ${jsValue.PolnyNomer}<br>От ${jsValue.Data}<br>Организация ${jsValue.OrgName}<br>Сумма: ${jsValue.Summa}`
            //document.getElementById('DinamicContainer').innerHTML = outputString;
        }
    })
    .catch((error) => {
        //showAlert("Ошибка ", error);
    });



document.getElementById('passField').addEventListener('input', function () {
    const passField = this.value.trim(); // убираем пробелы в начале и конце

    if (passField != '') {
        tg.MainButton.enable();
        tg.MainButton.color = tg.themeParams.button_color;
        tg.MainButton.hasShineEffect = true;
    } else {
        tg.MainButton.disable();
        tg.MainButton.color = tg.themeParams.hint_color;
    }
});

function MBC() {
    document.getElementById('header').focus();
    if (!tg.BiometricManager.isInited) {
        tg.BiometricManager.init();
    }
    if (!tg.BiometricManager.isAccessGranted) {
        let reason = tg.BiometricRequestAccessParams;
        reason.reason = "Предоставьте доступ к биометрии, что бы больше не вводить ключ ЭЦП";
        tg.BiometricManager.requestAccess(reason);
    }

    if (tg.BiometricManager.isAccessGranted) {
        let reason = tg.BiometricAuthenticateParams;
        reason.reason = "Для подписания документа используйте биометрию";
        tg.BiometricManager.authenticate(reason);	
    }


    tg.showAlert("Подписано (TODO)", () => {
        window.location.href = '/index.html';
    });

}