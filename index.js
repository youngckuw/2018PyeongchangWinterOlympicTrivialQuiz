
const questions = [
{
	question: "What are the mascots for the 2018 Winter Olympic Games?",
	answer: {
		a: "Rabbit and Lion",
		b: "Dragon and Tiger",
		c: "Tiger and Bear",
		d: "Penguin and Seal"
	},
	correctAnswer: "c"
},
{
	question: "Where does the 2018 Winter Olympic takes its place?",
	answer: {
		a: "South Korea",
		b: "North Korea",
		c: "Both Koreas",
		d: "Russia"
	},
	correctAnswer: "a"
},
{
	question: "How many times have South Korea hosted Olympic games?",
	answer: {
		a: "One Winter Olympic",
		b: "Two Winter Olympics",
		c: "One Winter and Summer Olympics",
		d: "Two Winter and Two Summer Olympics"
	},
	correctAnswer: "c"
},
{
	question: "Which of following games are NOT playing in 2018 Winter Olympic?",
	answer: {
		a: "Skeleton",
		b: "Snowboarding",
		c: "Ice Hockey",
		d: "Sled Dog Racing"
	},
	correctAnswer: "d"
},
{
	question: "How many days do Winter Olympic Games run?",
	answer: {
		a: "14 days",
		b: "28 days",
		c: "16 days",
		d: "7 days"
	},
	correctAnswer: "c"
},
{
	question: "How many times has the hosting country, South Korea, ever won a medal in snow games?",
	answer: {
		a: "None (0)",
		b: "One (1)",
		c: "Seven (7)",
		d: "Twenty Two (22)"
	},
	correctAnswer: "a"
},
{
	question: "In year 2022, next Winter Olympic will be hosted from which contury?",
	answer: {
		a: "Japan",
		b: "Canada",
		c: "United States",
		d: "China"
	},
	correctAnswer: "d"
},
{
	question: "Pyoungchang 2018 Olympic games will include one (1) Puerto Rico athlete. Which game(s) will s/he play?",
	answer: {
		a: "Alpine skiing",
		b: "Bobsleigh",
		c: "Figure skating",
		d: "Speed skating"
	},
	correctAnswer: "a"
},
{
	question: "What is the official slogan for Winter Olympic?",
	answer: {
		a: "Celebration",
		b: "Passion, Connected",
		c: "Peace and Love",
		d: "Freinds Forever"
	},
	correctAnswer: "b"
},
{
	question: "Which games will feature unified South and North korea play?",
	answer: {
		a: "Biathlon",
		b: "Nordic Combined",
		c: "Curling",
		d: "Ice Hockey"
	},
	correctAnswer: "d"
}]

let questionNumber = 0;

function questionPage(questionNumber){
	// display quiz
	$('main').html(
	   `<div>
		   <h2>${questions[questionNumber].question}</h2>
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
	   	</div>`
	);

	// prevent default
	$('form').submit(function(event){
		return false;
	});

	// get user input
	$('.answerButtons').click(function(event){
		userInput = $(this)[0].id;
		console.log(userInput);
		validateAnswer(questionNumber, userInput);
	});
}

function validateAnswer(questionNumber, userInput){
	// validate answer
	if(userInput === questions[questionNumber].correctAnswer){
		correctAnswer();
		// display next question
		questionNumber++;

		questionPage(questionNumber);
	} else {
		incorrectAnawer();
	}
}

function correctAnswer(){
	console.log("Correct");
}

function incorrectAnawer(){
	console.log("Incorrect")
}

function finalPage(){
	// how well did user take the quiz?
	// restart option (reset)

}

function handleStart(){
	// handle start button
	$('#start-btn').click(function() {
		$('main').empty();
		questionPage(questionNumber);
		//finalPage();
	}
)}

handleStart();
// $(document).ready(function(){handleStart()});
