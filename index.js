let initialQuestionNumber = 0;

function questionPage(questionNumber){
	// display quiz
	$('main').html(
		`<h2>${questions[questionNumber].question}</h2>
		<form id='questionForm'>
			<fieldset>
				<label class='answer'>
					<button id='a' class='answerButtons'>${questions[questionNumber].answer.a}</button>
				</label>
				<label class='answer'>
					<button id='b' class='answerButtons'>${questions[questionNumber].answer.b}</button>
				</label>
				<label class='answer'>
					<button id='c' class='answerButtons'>${questions[questionNumber].answer.c}</button>
				</label>
				<label class='answer'>
				<button id='d' class='answerButtons'>${questions[questionNumber].answer.d}</button>
				</label>
			</fieldset>
		</form>
		`
	);

	// get user input
	$('.answerButtons').click(function(event){
		event.preventDefault();
		initialQuestionNumber++;
		userInput = $(this)[0].id;
		validateAnswer(initialQuestionNumber, userInput);		
	});
}

function validateAnswer(questionNumber, userInput){

	let totalQuestions = questions.length;
	console.log(questionNumber);

	if(questionNumber === totalQuestions){
		resetQuiz();
	} else {
		if(userInput === questions[questionNumber].correctAnswer){
			correctAnswer();
			questionPage(questionNumber)
		} else {
			incorrectAnawer();
			questionPage(questionNumber)
		}
	}	
}

function correctAnswer(){
	alert("Correct");
}

function incorrectAnawer(){
	alert("Incorrect");
}

function resetQuiz(){
	let userInput = prompt("Would you like to try again? (yes)");
	if(userInput.toLowerCase() === 'yes'){
		initialQuestionNumber = 0;
		questionPage(initialQuestionNumber);
	} else {
		alert("Thanks for playing!")		
	}
}

function finalPage(){
	console.log("Final page");
}

function handleStart(){
	// handle start button
	$('#start-btn').click(function() {
		questionPage(initialQuestionNumber);
	}
)}

handleStart();