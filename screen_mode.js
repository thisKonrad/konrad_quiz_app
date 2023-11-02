/* dark light mode js */

const userImage = document.querySelector('.user_image');
const htmlPage = document.querySelector('html');
const toggle = document.querySelector('#dark_toggle');

toggle.addEventListener('click', switchScreenMode);


function switchScreenMode(){

    console.log('html: ', htmlPage);

    console.log('switched');

    if( htmlPage.dataset.theme === 'light') {

        return htmlPage.dataset.theme = 'dark';
    
    } 
    if ( htmlPage.dataset.theme === 'dark') {

        return htmlPage.dataset.theme = 'light';
    
    }

};

if ( htmlPage.dataset.theme === 'dark') {

    userImage.src = './assets/robot_profile_dark_mode.jpg';
}
if( htmlPage.dataset.theme === 'light') {

    userImage.src = './assets/robot_profile.jpg';

};