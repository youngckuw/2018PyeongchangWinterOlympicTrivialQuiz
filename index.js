'use strict'

let score = 0;
let questionNumber = 0;

function displayQuiz(){
	$('main').html(
		`<p>Current Score ${score + "/" + questions.length}</p>
		 <h2>${questions[questionNumber].question}</h2> 
		 <form id='questionForm' action="/some-server-endpoint" method ='post'> 
		 <fieldset name='answerChoices'> 
		 <div><label><input type='radio' name='answer' id='a' required>${questions[questionNumber].answer.a}</label></div> 
		 <div><label><input type='radio' name='answer' id='b' required>${questions[questionNumber].answer.b}</label></div>
		 <div><label><input type='radio' name='answer' id='c' required>${questions[questionNumber].answer.c}</label></div> 
		 <div><label><input type='radio' name='answer' id='d' required>${questions[questionNumber].answer.d}</label></div> 
		 </fieldset> <button type='submit'>Submit</button> </form>
		`);
};

function handleStartButton(){
	$('#start-btn').on('click', this, function(event){
		displayQuiz();	
	})
}

function displayCongrats(){
	$('main').html(`<h1>Conguratuation! \nYou have finished the quiz. \nYour score was ${score + "/" + questions.length}.</h1><div><button id='try-again'>TRY AGAIN?</button></div>`);
	$('#try-again').on('click', function(){
		score = 0;
		questionNumber = 0;
		displayQuiz();
	});
}

function checkRemainingQuestions(questionNumber){
	if(questionNumber === questions.length){
		displayCongrats();
	} else {
		displayQuiz();
	}
}

function correctAnswer(){
	$('#questionForm').html("<h1>You are correct!</h1><div><button id='next'>NEXT</button></div>");
	score++
	$('#next').click(function(event){
		event.preventDefault();
		questionNumber++;
		checkRemainingQuestions(questionNumber);	
	});
};

function incorrectAnswer(){
	let displayAnswer = questions[questionNumber].correctAnswer;
	$('#questionForm').html(`<h1>Correct answer was ${displayAnswer.toUpperCase()}</h1><div><button id='next'>NEXT</button></div>`);
	$('#next').click(function(event){
		event.preventDefault();
		questionNumber++;
		checkRemainingQuestions(questionNumber);
	});
}

function validateAnswer(questionId, answer){
	if(answer === questions[questionId].correctAnswer){
		correctAnswer();
	} else {
		incorrectAnswer();
	}
}

function handleSubmitButton(){
	$('main').on('submit', function(event){
		event.preventDefault();		
		const userInput = $('input:checked')[0].id;
		validateAnswer(questionNumber, userInput);
	})
}

function startQuiz(){
	handleStartButton();
	handleSubmitButton();
}

startQuiz();