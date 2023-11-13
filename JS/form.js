/* :::: form js :::: */

/* const formData = new FormData(e.target);
const data = Object.fromEntries(formData); */

const mainPage = document.querySelector('page_wrap');
const form = document.querySelector('[data-js="question-form"]');
const submitBtn = document.querySelector('[data-js="submit-button"]');

submitBtn.addEventListener('click',(e)=>{

    e.preventDefault();
    console.log('clicked')
    console.log("Event: ",e.target)

    const formData = new FormData(form);
    const data = Object.fromEntries(formData); 

    console.log("data: ",data);
})
/* 
<section class="card card_001" data-js="card">

<div class="question" data-js="questionCard"> 
    <img data-js="bookmark" class="question_bookmark" 
    alt="bookmark_icon" src="./assets/bookmark.svg">
    <h3>What does CSS stand for ?</h3>
    <img name="css_html_icon" src="./assets/filetype-css.svg" 
        alt="icon_css_file" class="language_icon">
    <button class="show_card_btn">show answer</button>
</div>

<div class="answer" data-js="answerCard">
    <button class="turn_card_btn">back</button>
    <br>
    <h3 class="answer_text">Cascading Style Sheets</h3>
</div>
</section> */ 

function createNewCard(){

    const cardSection = document.createElement('section');
    cardSection.classList.add('card');

    /* :::: new question card :::: */
    const questCardDiv = document.createElement('div');
    questCardDiv.classList.add('question');

    const questCardIMG = document.createElement('img');
    questCardIMG.src = './assets/bookmark.svg';
    questCardIMG.classList.add('question_bookmark');

    const questCardTitle = document.createElement('h3');
    questCardTitle.innerText = "";

    const questCardBtn = document.createElement('button');
    questCardBtn.classList.add('show_card_btn');
    questCardBtn.innerText = 'Show Answer';

    questCardDiv.append(questCardIMG);
    questCardDiv.append(questCardTitle);
    questCardDiv.append(questCardBtn);

    cardSection.append(questCardDiv);

}
