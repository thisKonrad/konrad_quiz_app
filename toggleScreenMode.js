/* ::: SCREEN-MODE :::: dark light mode js */

const userImage = document.querySelector('.user_image');
const htmlPage = document.querySelector('html');
const toggleSwitch = document.querySelector('#dark_toggle');

/* localStorage.setItem('darkMode', 
JSON.stringify(htmlPage.dataset.theme="dark")); */


/* variable for checking if darkMode is choosen */
const isDarkMode = htmlPage.dataset.theme="dark";
const isLightMode = htmlPage.dataset.theme="light";


toggleSwitch.addEventListener("change", function() {

    if (toggleSwitch.checked) {

        htmlPage.dataset.theme="dark";
        userImage.src='./assets/robot_profile_dark_mode.jpg';

        localStorage.setItem('darkMode', isDarkMode);

    } else {
        htmlPage.dataset.theme="light";
        userImage.src='./assets/robot_profile.jpg';

        localStorage.setItem('lightMode', isLightMode);
    }
});


/* on page load check for dark mode */
document.addEventListener("DOMContentLoaded", function () {
    
    localStorage.getItem('darkMode', isDarkMode);

    /* if dark Mode is choosen(true) add the dataset: */
    if ( isDarkMode === 'true') {
        htmlPage.dataset.theme="dark";
    }

});



/* 
let parsedDarkMode = JSON.parse(storedDarkMode);
let storedLightMode = localStorage.getItem('lightMode');
let parsedLightMode = JSON.parse(storedLightMode); 
*/