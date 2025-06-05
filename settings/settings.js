//const tg = window.Telegram.WebApp;
tg.BackButton.onClick(() => {
    window.location.href = '/index.html';
});
tg.BackButton.show();

tg.SecondaryButton.onClick(SBC);
tg.SecondaryButton.textColor = tg.themeParams.destructive_text_color;
tg.SecondaryButton.setText("Выйти из учетной записи");
tg.SecondaryButton.position = "top";
tg.SecondaryButton.show();

tg.SettingsButton.hide();

function SBC() {
    tg.showConfirm("Вы действительно хотите Выйти из учетной записи?", (shure) => {
        if (shure) {
            tg.BackButton.hide();
            tg.DeviceStorage.clear();
            tg.SecureStorage.clear();
            window.location.href = '/singin/singin.html';
        }
    });
}


tg.MainButton.onClick(MBC);
tg.MainButton.setText("Применить изменения");
tg.MainButton.show();

function MBC() {
    // TODO обновление адреса сервера
    window.location.href = '/';
}


getValue('biometricEnable')
    .then((value) => {
        if ((value != null) || (value != undefined)) {
            if (value == "true") {
                document.getElementById('toggle').checked = true;
            }
        } else {
            console.log("Данных нет");
        }
    })
    .catch((error) => {
        console.log("Ошибка чтения сохраненных данных!", error);
    });



document.getElementById('toggle').addEventListener('change', function () {
    if (this.checked) {
        window.location.href = 'biometric/biometric.html';
    } else {
        tg.SecureStorage.removeItem("ECP");
        tg.DeviceStorage.setItem("biometricEnable", "false");
    }
    //console.log("Состояние переключателя: ", this.checked ? "Включено" : "Выключено");
});