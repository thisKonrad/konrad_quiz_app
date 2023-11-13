/* :: home buttons :: */

const card = document.querySelector('[data-js="card"]');

const bookmarkIcon = document.querySelector('[data-js="bookmark"]');
const showAnswerBtn = document.querySelector('.show_card_btn');
const showQuestionBtn = document.querySelector('.turn_card_btn');

const questionCard = document.querySelector('[data-js="questionCard"]');
const answerCard = document.querySelector('[data-js="answerCard"]');

/* :: controls :: */
bookmarkIcon.addEventListener('click', toggleBookmarked);
showAnswerBtn.addEventListener('click', showAnswer);
showQuestionBtn.addEventListener('click', showQuestion);

function toggleBookmarked(){
    console.log('clic')
    bookmarkIcon.classList.toggle('bookmarked');
}

function showAnswer(){
    
    console.log('ANS')
    questionCard.style.visibiltity ='hidden';
    answerCard.style.visibiltity ='visible';
}


function showQuestion(){
    console.log('QUES')
    answerCard.style.visibiltity ='hidden';
    questionCard.style.visibiltity ='visible';
}