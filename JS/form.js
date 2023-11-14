/* :::: form js :::: */
const cardContainer = document.querySelector('.new_cards_wrap');
const form = document.querySelector('[data-js="question-form"]');
const submitBtn = document.querySelector('[data-js="submit-button"]');


submitBtn.addEventListener('click',(e)=>{

    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData); 

    const formQuestion = data['text-question'];
    const formAnswer = data['text-answer'];
    const formTag = data['tag-name'];

    const questionLength = formQuestion.length;
    const answerLength = formQuestion.length;

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

    cardContainer.insertAdjacentElement('afterbegin',cardSection);

    /* :: controls :: */
    questCardIMG.addEventListener('click', toggleBookmarked);
    questCardBtn.addEventListener('click', showAnswer);
    answerCardBtn.addEventListener('click', showQuestion);

    function toggleBookmarked(){
        questCardIMG.classList.toggle('bookmarked');
    }

    function showAnswer(){
        questCardDiv.classList.remove('question--showcast');
        questCardDiv.classList.add('question--hide');
        answerCardDiv.classList.add('answer--show');}


    function showQuestion(){
        questCardDiv.classList.remove('question--hide');
        answerCardDiv.classList.remove('answer--show');
        questCardDiv.classList.add('question--showcast');}

};
