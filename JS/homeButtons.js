/* :: home buttons :: */

const bookmarkIcon = document.querySelector('[data-js="bookmark"]');
const showAnswerBtn = document.querySelectorAll('.show_card_btn');
const showQuestionBtn = document.querySelectorAll('.turn_card_btn');

bookmarkIcon.addEventListener('click', toggleBookmarked);
showAnswerBtn.addEventListener('click', toggleBookmarked);
showQuestionBtn.addEventListener('click', toggleBookmarked);

function toggleBookmarked(){
    console.log('clic')
    bookmarkIcon.classList.toggle('bookmarked');
}