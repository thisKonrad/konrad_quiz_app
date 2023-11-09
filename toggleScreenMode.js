/* ::: user-profile :: SCREEN-MODE :::: dark light mode js */

const userImage = document.querySelector('.user_image');
const htmlPage = document.querySelector('html');
const toggleSwitch = document.querySelector('#dark_toggle');


toggleSwitch.addEventListener("change", function() {

    if (toggleSwitch.checked) {

        htmlPage.dataset.theme="dark";
        userImage.src='./assets/robot_profile_dark_mode.jpg';

        localStorage.setItem('darkMode', 'enabled');

    } 
    else {
        htmlPage.dataset.theme="light";
        userImage.src='./assets/robot_profile.jpg';

        localStorage.setItem('darkMode', 'disabled');
    }
});

/* on page load check for dark mode */
document.addEventListener("DOMContentLoaded", function(){
    
   const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    /* if dark Mode is enabled,add the dataset: */
    if (isDarkMode) {
        toggleSwitch.checked = true;
        htmlPage.dataset.theme="dark";
        userImage.src='./assets/robot_profile_dark_mode.jpg';
    }
});