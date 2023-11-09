/* dark light mode js */

const userImage = document.querySelector('.user_image');
const htmlPage = document.querySelector('html');
const toggleSwitch = document.querySelector('#dark_toggle');

let darkMode = localStorage.getItem("dark-mode");


toggleSwitch.addEventListener("change", function() {

    if (toggleSwitch.checked) {
        htmlPage.dataset.theme="dark";
        userImage.src='./assets/robot_profile_dark_mode.jpg';

    } else {
        htmlPage.dataset.theme="light";
        userImage.src='./assets/robot_profile.jpg';
    }
});