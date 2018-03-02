'use strict'

let score = 0;
let questionNumber = 0;

function displayQuiz(){
	$('header h1').hide();

	$('main').html(
		`<div id='questionText'><h2>${questions[questionNumber].question}</h2></div>
		<form id='questionForm' action="/some-server-endpoint" method ='post'> 
		<fieldset name='answerChoices'><legend><p>Answers:</p></legend>
		<label><input type='radio' name='answer' id='a' required><span>\t${questions[questionNumber].answer.a}</span></label> 
		<label><input type='radio' name='answer' id='b' required><span>\t${questions[questionNumber].answer.b}</span></label>
		<label><input type='radio' name='answer' id='c' required><span>\t${questions[questionNumber].answer.c}</span></label> 
		<label><input type='radio' name='answer' id='d' required><span>\t${questions[questionNumber].answer.d}</span></label> 
		</fieldset>
		<div id='submitArea'><button type='submit'>Submit</button></div></form>`
	);

	$('footer').html(
		`<div id='score'><p>Score ${score} | Questions ${questionNumber + "/" + questions.length}</p></div>`
	);	
};

function handleStartButton(){
	$('#start-btn').on('click', this, function(event){
		displayQuiz();	
	})
}

function displayCongrats(){
	$('main').html(`<p>Conguratuation!</p>\n<p>You have finished the quiz.</p>\n<p>Your score was ${score + "/" + questions.length}.</p><div><button id='try-again'>TRY AGAIN?</button></div>`);
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
	$('#submitArea').empty().append("<p>You are correct!</p><div><button id='next'>NEXT</button></div>");
	score++
	$('#next').click(function(event){
		event.preventDefault();
		questionNumber++;
		checkRemainingQuestions(questionNumber);	
	});
};

function incorrectAnswer(){
	let displayAnswer = questions[questionNumber].correctAnswer;
	$('#submitArea').empty().append(`<p>"The correct answer was '${questions[questionNumber].answer[displayAnswer]}'!"</p><div><button id='next'>NEXT</button></div>`);
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