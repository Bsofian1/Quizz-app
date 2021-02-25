import Question from "./question.js";
import Quiz from "./quiz.js";

const App=  (()=> {
//Cache the DOM

const quizEl = document.querySelector(".container-quiz");
const quizQuestionEl= document.querySelector(".question");
const trackerEl= document.querySelector(".tracker");
const tagLineEl= document.querySelector(".instruction")
const choicesEl= document.querySelector(".choices")
const progressInner= document.querySelector(".progress-inner")
const nextButtonEl = document.querySelector(".next")
const restartButtonEl = document.querySelector(".restart")

const q1= new Question(
    "First president of the US",
    ["Barrack", "Osoma", "George", "boo"],
    2
    )
const q2= new Question(
    "When one first JS created",
    ["01/01/1970", "01/01/1980", "01/01/1990", "01/01/1995"],
    3
    )
const q3= new Question(
    "What does CSS stand for",
    ["Cascading sexy sheet", "Cascading style sheet", "Camera ss", "other"],
    1
    )
const q4= new Question(
    "What is HTML",
    ["Super", "Hypertext", "Cool", "boo"],
    1
    )
const q5= new Question(
    "Console.log is for ?",
    ["log in console", "No, in terminal", "in both", "or nothing"],
    0
    )
const q6= new Question(
    "Last president of France",
    ["Manu", "Jacky", "Nico", "Franck"],
    0
    )
const quiz = new Quiz([q1, q2, q3, q4, q5, q6]);

const setValue = (elem, value) => {
    elem.innerHTML = value;
}

const renderQuestion= () => {
    const question = quiz.getCurrentQuestion().question;
    setValue(quizQuestionEl, question)
}

const renderChoicesElem =() => {
    let markup= "";
    const currentChoices= quiz.getCurrentQuestion().choices;
    currentChoices.forEach((item, index) => {
        markup +=`<li class="choice">
        <input type="radio" name="input" class="input" id="choice${index}" />
        <label for="choice${index}" class="label">
          <i></i>
          ${item}
        </label>
      </li>`
    });
    setValue(choicesEl, markup)
};

const renderTracker= ()=> {
    const currentQuestionIndex = quiz.index;
    setValue(trackerEl, `${currentQuestionIndex+1}/${quiz.questions.length}`)
}
const getPercent = (a,b)=> {
    return Math.round((a/b)*100)
}

const launch = (width, max) => {
    let loadingBar= setInterval(function(){
        if(width > max){
            clearInterval(loadingBar)
        }else{
            width++
            progressInner.style.width = `${width}%`
        }
    },3)
}

const renderProgress= ()=> {
    const progressIndex = getPercent(quiz.index, quiz.questions.length)
    launch(0, progressIndex)
}



const renderAll =_=> {
    if(quiz.hasEnded()){
    //render endScreen
    }else{
    renderQuestion();
    renderChoicesElem();
    renderTracker();
    renderProgress()
    }
}

return {
    renderAll: renderAll,
}

})();

App.renderAll();