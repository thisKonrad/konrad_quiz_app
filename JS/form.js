/* :::: form js :::: */

const cardContainer = document.querySelector('.new_cards_wrap');
const form = document.querySelector('[data-js="question-form"]');
const submitBtn = document.querySelector('[data-js="submit-button"]');

submitBtn.addEventListener('click',(e)=>{

    e.preventDefault();
    console.log('clicked')
    console.log("Event: ",e.target)

    const formData = new FormData(form);
    const data = Object.fromEntries(formData); 

    console.log("data: ",data);

    const formQuestion = data['text-question'];
    const formAnswer = data['text-answer'];
    const formTag = data['tag-name'];

    const questionLength = formQuestion.length;
    const answerLength = formQuestion.length;

    console.log("length of answer:", answerLength)
    console.log("length of question:", questionLength)
    console.log("data Ques:", formQuestion);
    console.log("dataAnswer: ", formAnswer);
    console.log("dataTag: ", formTag); 

    createNewCard(formQuestion, formAnswer, formTag);

});


const questionArea = document.querySelector('#your-question');
const answerArea = document.querySelector('#your-answer');
const questCharCount = document.querySelector('[data-js="question-chars-count"]');
const answerCharCount = document.querySelector('[data-js="answer-chars-count"]');

/* :::: char counters :::: */
const maxQuestionCharCount = 80;
const maxAnswerCharCount = 80;

questionArea.addEventListener('keyup',()=>{

    const quesCharValue = questionArea.value.length;
    const quesCharsLeft = maxQuestionCharCount - quesCharValue;

    questCharCount.innerText = `${quesCharsLeft}`;

});


answerArea.addEventListener('keyup',()=>{

    const ansCharValue = answerArea.value.length;
    const ansCharsLeft = maxAnswerCharCount - ansCharValue;

    answerCharCount.innerText = `${ansCharsLeft}`;

});


function createNewCard(question, answer, tag){

    const cardSection = document.createElement('section');
    cardSection.classList.add('card');

    /* :::: new question card :::: */
    const questCardDiv = document.createElement('div');
    questCardDiv.setAttribute('data-js','questionCard');
    questCardDiv.classList.add('question');

    const questCardIMG = document.createElement('img');
    questCardIMG.src = './assets/bookmark.svg';
    questCardIMG.classList.add('question_bookmark');
    questCardIMG.setAttribute('data-js','bookmark');

    const questCardTitle = document.createElement('h3');
    questCardTitle.innerText = `${question}`;

    const questCardTag = document.createElement('p');
    questCardTag.innerText = `${tag}`;
    questCardTag.classList.add('tag_style');

    const questCardBtn = document.createElement('button');
    questCardBtn.classList.add('show_card_btn');
    questCardBtn.innerText = 'Show Answer';

    questCardDiv.append(questCardIMG);
    questCardDiv.append(questCardTitle);
    questCardDiv.append(questCardBtn);
    questCardDiv.append(questCardTag);

    /* :::: new answer card face :::: */
    const answerCardDiv = document.createElement('div');
    questCardDiv.setAttribute('data-js','answerCard');
    answerCardDiv.classList.add('answer');

    const answerCardBtn = document.createElement('button');
    answerCardBtn.classList.add('turn_card_btn');
    answerCardBtn.innerText = 'back';

    const answerCardTitle = document.createElement('h3');
    answerCardTitle.classList.add('answer_text');
    answerCardTitle.innerText = `${answer}`;

    answerCardDiv.append(answerCardBtn)
    answerCardDiv.append(answerCardTitle)

    cardSection.append(questCardDiv);
    cardSection.append(answerCardDiv);

    cardContainer.appendChild(cardSection);

    /* :: controls :: */
    questCardIMG.addEventListener('click', toggleBookmarked);
    questCardBtn.addEventListener('click', showAnswer);
    answerCardBtn.addEventListener('click', showQuestion);

    function toggleBookmarked(){
        console.log('clic')
        questCardIMG.classList.toggle('bookmarked');
    }

    function showAnswer(){
        console.log('ANS')
        questCardDiv.classList.add('question--hide');
        answerCardDiv.classList.add('answer--show');}


    function showQuestion(){
        console.log('QUES')
        questCardDiv.classList.remove('question--hide');
        answerCardDiv.classList.remove('answer--show');}

};


/* const questionCard = document.querySelector('[data-js="questionCard"]');
const answerCard = document.querySelector('[data-js="answerCard"]'); */


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