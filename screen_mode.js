/* dark light mode js */

const htmlPage = document.querySelector('html');
const toggle = document.querySelector('#dark_toggle');

toggle.addEventListener('click', switchScreenMode);

function switchScreenMode(e){

    console.log('html: ', htmlPage)

    console.log('switched');

    if( htmlPage.dataset.theme === 'light') {

        return htmlPage.dataset.theme = 'dark';
    
    } 
    if ( htmlPage.dataset.theme === 'dark') {

        return htmlPage.dataset.theme = 'light';
    
    } 

};