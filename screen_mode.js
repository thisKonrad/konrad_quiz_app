/* dark light mode js */

const htmlPage = document.querySelector('html');
const toggle = document.querySelector('#dark_toggle');

toggle.addEventListener('click', switchScreenMode);

function switchScreenMode(e){

    console.log('switched');

    if(htmlPage.dataSet === 'light') {

        htmlPage.dataSet = 'dark';
    
    } 
    if (htmlPage.dataSet === 'dark') {

        htmlPage.dataSet = 'light';
    
    } 

}