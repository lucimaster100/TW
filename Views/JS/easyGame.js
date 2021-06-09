const question =document.querySelector('#question');
const choices =Array.from(document.querySelectorAll('.choice-text'));
const progressText =document.querySelector('#progressText');
const scoreText =document.querySelector('#score');
const progressBarFull =document.querySelector('#progressBarFull');

let currentQuestion={}
let acceptingAnwsers=true
let score=0;
let questionCounter=0
let availableQuestions={}

let questions=[
{
    question: 'What is 2+2',
    choice1:'2',
    choice2:'3',
    choice3:'4',
    choice4:'5',
    anwser:2,
},
    {
        question: 'What is 2+2',
        choice1:'2',
        choice2:'3',
        choice3:'4',
        choice4:'5',
        anwser:2,
    },
    {
        question: 'What is 2+2',
        choice1:'2',
        choice2:'3',
        choice3:'4',
        choice4:'5',
        anwser:2,
    },
    {
        question: 'What is 2+2',
        choice1:'2',
        choice2:'3',
        choice3:'4',
        choice4:'5',
        anwser:2,
    },
    {
        question: 'What is 2+2',
        choice1:'2',
        choice2:'3',
        choice3:'4',
        choice4:'5',
        anwser:2,
    }
]

const SCORE_POINTS =50
const MAX_QUESTIONS=5

startGame=()=>{
    questionCounter=0
    score=0
    availableQuestions=[...questions ]
    getNewQuestion()
}

getNewQuestion=()=>{
    if(availableQuestions.length===0||questionCounter>MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore',score)

    return window.location.assign('/end.html')
    }
    questionCounter++;
    progressText.innerText=`Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width=`${(questionCounter/MAX_QUESTIONS)*100}%`

    const questionIndex =Math.floor(Math.random()*availableQuestions.length)
    currentQuestion=availableQuestions[questionIndex]
    question.innerText=currentQuestion.question

    choices.forEach(choice=>{
        const number=choice.dataset['number']
        choice.innerText=currentQuestion['choice'+number]

    })
    availableQuestions.splice(questionIndex,1)
    acceptingAnwsers=true
}

choices.forEach(choice=>{
    choice.addEventListener('click',e=>{
        if(!acceptingAnwsers) return

        acceptingAnwsers=false
        const selectedChoice=e.target
        const selectedAnwser=selectedChoice.dataset['number']

        let classToApply=selectedAnwser==currentQuestion.anwser ?'correct' : 'incorrect'

        if(classToApply==='correct'){
            incrementScore(SCORE_POINTS)

        }
        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        },1000)
    })
})

incrementScore=num=>{
    score+=num
    scoreText.innerText=score
}
startGame()