/* ::: Universal :: SCREEN-MODE :::: dark light mode js */

const htmlPage = document.querySelector('html');

/* on page load check for dark mode */
document.addEventListener("DOMContentLoaded", function(){
    
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
 
     /* if dark Mode is enabled,add the dataset: */
     if (isDarkMode) {
         htmlPage.dataset.theme="dark";
     }
 });