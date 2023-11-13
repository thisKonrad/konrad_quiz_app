/* :: home buttons :: */

const bookmarkIcon = document.querySelector('[data-js="bookmark"]');
const showAnswerBtn = document.querySelector('.show_card_btn');
const showQuestionBtn = document.querySelector('.turn_card_btn');

const card = document.querySelector('[data-js="card"]');

bookmarkIcon.addEventListener('click', toggleBookmarked);
showAnswerBtn.addEventListener('click', showAnswer);
showQuestionBtn.addEventListener('click', showQuestion);

function toggleBookmarked(){
    console.log('clic')
    bookmarkIcon.classList.toggle('bookmarked');
}

function showAnswer(){
    
    console.log('ANS')
    card.classList.add('question--visibility');
}


function showQuestion(){
    console.log('QUES')
    card.classList.add('answer--visibility');
}