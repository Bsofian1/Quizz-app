export default function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.index= 0;
}

Quiz.prototype.getCurrentQuestion= function(){
    return this.questions[this.index];
}

Quiz.prototype.increaseIndex = function(){
     this.index ++
}

Quiz.prototype.hasEnded = function(){
    return this.index === this.questions.length;
}

Quiz.prototype.isAnswer= function(userGuess){
    if(this.questions[this.index].isCorrect(userGuess)){
    this.score++;
    }

    this.increaseIndex();

};