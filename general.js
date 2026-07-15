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
/*
function getValue(key) {
    var promise
    max.DeviceStorage.getItem(key).then((result) => {
        promise = result // result {key: 'storageEntryKey', value: 'some value'}
    });
    return promise[1]
}



function getSecureValue(key) {
     return window.WebApp.SecureStorage.getItem(key).then(result => result.value);
 }

getSecureValue('credentials').then(value => {
     if (value != null) {
         console.log("Вы авторизированны");
     } else {
        console.log("Вы не авторизированны!");
     }
});*/

window.WebApp.DeviceStorage.getItem('credentials').then((result) => {
    console.log(result) // {key: 'secureStorageEntryKey', value: 'some value'}
});


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
