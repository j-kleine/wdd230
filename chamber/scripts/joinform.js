// ------ GET TIMESTAMP ON PAGE LOAD ------
const timeonload = new Date();

document.querySelector('#timestamp').value = timeonload;

console.log(timeonload);
console.log(timeonload.toLocaleString());