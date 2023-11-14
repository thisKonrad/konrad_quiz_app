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
    bookmarkIcon.classList.toggle('bookmarked');
}

function showAnswer(){
    questionCard.classList.remove('question--showcast');
    questionCard.classList.add('question--hide');
    answerCard.classList.add('answer--show');
}


function showQuestion(){
    questionCard.classList.remove('question--hide');
    answerCard.classList.remove('answer--show');
    questionCard.classList.add('question--showcast');
}