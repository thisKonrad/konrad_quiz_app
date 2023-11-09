/* ::: Universal :: SCREEN-MODE :::: dark light mode js */

const htmlPage = document.querySelector('html');

/* variable for checking if darkMode is choosen */
const isDarkMode = "htmlPage.dataset.theme='dark'";

/* on page load check for dark mode */
document.addEventListener("DOMContentLoaded", function(){
    
    localStorage.getItem('darkMode', isDarkMode);

    /* if dark Mode is choosen(true) add the dataset: */
    if ( isDarkMode === true) {
        htmlPage.dataset.theme="dark";
    }

});