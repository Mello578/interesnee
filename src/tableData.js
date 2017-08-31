/**
 * Created by Mello on 29.08.2017.
 */

let localStorageData = (item) => {
    return JSON.parse(localStorage.getItem(item));
};

let departmentsData = localStorageData('departments');
let employeesData = localStorageData('employees');

module.exports = {
  departmentsData,
  employeesData,
};