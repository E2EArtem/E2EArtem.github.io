var max = window.WebApp;


var UserUIN;
var credentials;
var serverURL;
var publishNAME;

/* Кнопки настроек нет в Максе
tg.SettingsButton.onClick(() => {
    window.location.href = '/settings/settings.html';
});
tg.SettingsButton.show();
*/

function getValue(key) {
    max.DeviceStorage.getItem(getKey).then((result) => {
        return result[1] // result {key: 'storageEntryKey', value: 'some value'}
    });
}



function getSecureValue(key) {
    window.WebApp.SecureStorage.getItem(getKey).then((result) => {
        return result[1] // {key: 'secureStorageEntryKey', value: 'some value'}
    });
}

credentials = getSecureValue('credentials')
if (credentials != 0) {
    console.log("Вы авторизированны");
} else {
    console.log("Вы не авторизированны!");
}


/*
getValue('credentials')
    .then((value) => {
        if (value != null) {
            console.log("Вы авторизированны");
            credentials = value;
        } else {
            console.log("Вы не авторизированны!");
            switch (window.location.href) {
                case (window.location.origin + '/singin/singin.html'):
                    break;
                case (window.location.origin + '/settings/settings.html'):
                    break;
                default:
                window.location.href = '/singin/singin.html';
            }
        }
    })
    .catch((error) => {
        console.log("Вы не авторизированны!", error);
    });


getValue('UserUIN')
    .then((value) => {
        if ((value != null) && (value != undefined) && (value != '')) {
            console.log("Вы авторизированны");
            UserUIN = value;
        } else {
            console.log("Вы не авторизированны!");
            switch (window.location.href) {
                case (window.location.origin + '/singin/singin.html'):
                    break;
                case (window.location.origin + '/settings/settings.html'):
                    break;
                default:
                window.location.href = '/singin/singin.html';
            }
        }
    })
    .catch((error) => {
        console.log("Вы не авторизированны!", error);
    });

getValue('serverURL')
    .then((value) => {
        if ((value != null) && (value != undefined) && (value != '')) {
            console.log("Вы авторизированны");
            serverURL = value;
        } else {
            console.log("Вы не авторизированны!");
            switch (window.location.href) {
                case (window.location.origin + '/singin/singin.html'):
                    break;
                case (window.location.origin + '/settings/settings.html'):
                    break;
                default:
                    window.location.href = '/singin/singin.html';
            }

        }
    })
    .catch((error) => {
        console.log("Вы не авторизированны!", error);
    });

getValue('publishNAME')
    .then((value) => {
        if ((value != null) && (value != undefined) && (value != '')) {
            console.log("Вы авторизированны");
            publishNAME = value;
        } else {
            console.log("Вы не авторизированны!");
            switch (window.location.href) {
                case (window.location.origin + '/singin/singin.html'):
                    break;
                case (window.location.origin + '/settings/settings.html'):
                    break;
                default:
                    window.location.href = '/singin/singin.html';
            }

        }
    })
    .catch((error) => {
        console.log("Вы не авторизированны!", error);
    });
*/
