/* dark light mode js */

const userImage = document.querySelector('.user_image');
const htmlPage = document.querySelector('html');
const toggleSwitch = document.querySelector('#dark_toggle');

/* localStorage.setItem('darkMode', 
JSON.stringify(htmlPage.dataset.theme="dark")); */



const isDarkMode = htmlPage.dataset.theme="dark";

toggleSwitch.addEventListener("change", function() {

    if (toggleSwitch.checked) {
        htmlPage.dataset.theme="dark";
        userImage.src='./assets/robot_profile_dark_mode.jpg';

        localStorage.setItem('darkMode', isDarkMode);

    } else {
        htmlPage.dataset.theme="light";
        userImage.src='./assets/robot_profile.jpg';

        //localStorage.setItem('lightMode', lightMode);
    }
});


document.addEventListener("DOMContentLoaded", function () {
    
    localStorage.getItem('darkMode', isDarkMode);

    // Apply dark mode if it's enabled in local storage
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