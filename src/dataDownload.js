/**
 * Created by Mello on 28.08.2017.
 */

function dataDownload(data, createTable) {

    if (!localStorage.getItem(data)) {
        let xhr = new XMLHttpRequest();
        let nameArray = data === 'departments' ? 'Отдел' : 'Сотрудники';
        new Promise((resolve, reject) => {
            xhr.open('GET', '../../' + data + '.json', true);
            xhr.onloadend = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve();
                }else{
                    reject(xhr.status);
                }
            };
            xhr.send(null);
        }).then(
            () => {
                localStorage.setItem(data, xhr.responseText);
                createTable();
            }, error => {
                alert('Ошибка загрузки списка ' + nameArray + '. Код ошибки - ' + error);
            }
        );
    }
}

module.exports = dataDownload;