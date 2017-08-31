/**
 * Created by Mello on 28.08.2017.
 */

let localStorageData = (item) => {
    return JSON.parse(localStorage.getItem(item));
};

function dataDownload(data) {
    if (!localStorage.getItem(data)) {
        let xhr = new XMLHttpRequest();
        let nameArray = data === 'departments' ? 'Отдел' : 'Сотрудники';
        return new Promise((resolve, reject) => {
            xhr.open('GET', '../' + data + '.json', true);
            xhr.onloadend = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.status);
                }
            };
            xhr.send(null);
        }).then((text) => {
            localStorage.setItem(data, text);

            return localStorageData(data);
        }, error => {
            alert('Ошибка загрузки списка ' + nameArray + '. Код ошибки - ' + error);
        });
    } else {
        return Promise.resolve(localStorageData(data));
    }
}

module.exports = dataDownload;