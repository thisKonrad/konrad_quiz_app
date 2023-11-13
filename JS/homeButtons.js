/* :: home buttons :: */

const bookmarkIcon = document.querySelector('[data-js="bookmark"]');
const showAnswerBtn = document.querySelectorAll('.show_card_btn');
const showQuestionBtn = document.querySelectorAll('.turn_card_btn');

const card = document.querySelectorAll('[data-js="card"]');

bookmarkIcon.addEventListener('click', toggleBookmarked);
showAnswerBtn.addEventListener('click', showAnswer);
showQuestionBtn.addEventListener('click', showQuestion);

function toggleBookmarked(){
    console.log('clic')
    bookmarkIcon.classList.toggle('bookmarked');
}

function showAnswer(){
    
}


function showQuestion(){}