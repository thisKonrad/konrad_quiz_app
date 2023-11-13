/* :::: form js :::: */

const formData = new FormData(e.target);
const data = Object.fromEntries(formData);

const mainPage = document.querySelector('page_wrap');