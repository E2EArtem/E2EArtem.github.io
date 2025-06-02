const tg = window.Telegram.WebApp;
tg.BackButton.onClick(() => {
    window.location.href = '/index.html';
});
tg.BackButton.show();

tg.SecondaryButton.onClick(SBC);
tg.SecondaryButton.textColor = tg.themeParams.destructive_text_color;
tg.SecondaryButton.setText("Выйти из учетной записи");
tg.SecondaryButton.show();

tg.SettingsButton.hide();

function SBC() {
    tg.showConfirm("Вы действительно хотите Выйти из учетной записи?", (shure) => {
        if (shure) {
            tg.BackButton.hide();
            tg.DeviceStorage.clear();
            window.location.href = '/singin/singin.html';
        }
    });
}