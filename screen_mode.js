/* dark light mode js */

    const userImage = document.querySelector('.user_image');
    const htmlPage = document.querySelector('html');
    const toggleSwitch = document.querySelector('#dark_toggle');
    
    let screenMode = false;
    
    toggleSwitch.addEventListener('click', ()=> {return screenMode = true;});
    
    
    function switchScreenMode(){
    
        if( screenMode === true) {
    
            return htmlPage.dataset.theme = 'dark';
        
        } 
        if ( screenMode === false) {
    
            return htmlPage.dataset.theme = 'light';
        
        }
    
    };
    switchScreenMode();
