/* :: home buttons :: */

const bookmarkIcon = document.querySelector('[data-js="bookmark"]');
const showAnswerBtn = document.querySelectorAll('.show_card_btn');
const showQuestionBtn = document.querySelectorAll('.turn_card_btn');

bookmarkIcon.addEventListener('click', toggleBookmarked);

function toggleBookmarked(){

    bookmarkIcon.classList.toggle('.bookmarked');
}