/* ::: SCREEN-MODE :::: dark light mode js */

const htmlPage = document.querySelector('html');

/* localStorage.setItem('darkMode', 
JSON.stringify(htmlPage.dataset.theme="dark")); */


/* variable for checking if darkMode is choosen */
const isDarkMode = htmlPage.dataset.theme="dark";

/* on page load check for dark mode */
document.addEventListener("DOMContentLoaded", function () {
    
    localStorage.getItem('darkMode', isDarkMode);

    if ( isDarkMode === 'true') {
        htmlPage.dataset.theme="dark";
    }
    else {
        htmlPage.dataset.theme="light";
    }

});


/* 
let parsedDarkMode = JSON.parse(storedDarkMode);
let storedLightMode = localStorage.getItem('lightMode');
let parsedLightMode = JSON.parse(storedLightMode); 
*/