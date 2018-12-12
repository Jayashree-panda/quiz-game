

var myQuestions=[
{
	question:"What is capital of india?",
	answers:{
		a:"New Delhi",
		b:"Amritsar",
		c:"Bhubaneswar",
		d:"Panazi"
	},
	correctAnswer:'a'
},
{
	question:"Who is known as the father of nation?",
	answers:{
		a:"Lal Bhahadur Shastri",
		b:"Mahatma Gandhi",
		c:"Bankim Chandra Pal",
		d:"Swami Vivekananda"
	},
	correctAnswer:'b'
}

]
var quizContainer=document.getElementById('quiz');
var resContainer=document.getElementById('results');
var submitButton=document.getElementById('submit');

generateQuiz(myQuestions,quizContainer,resContainer,submitButton);

function generateQuiz(questions,quizContainer,resContainer,submitButton)
{
	function showQuestions(questions,quizContainer)
	{
		var output=[];
		var answers;
		
		for(var i=0;i<questions.length;i++)
		{
			answers=[];
			for(letter in questions[i].answers)
			{
				answers.push(
					'<label>'
					+'<input type="radio" name="question'+i+'" value="'+letter+'">'
					+letter+':'
					+ questions[i].answers[letter]
					+'</label>'
					);
			}
			output.push(
			'<div class="question">'+questions[i].question+'</div>'
			+'<div class="answers">'+answers.join('')+'</div>'
			
			);
		}
		quizContainer.innerHTML=output.join('');

	}
	
	function showResults(questions,resContainer,quizContainer)
	{
		var answerContainers=quizContainer.querySelectorAll('.answers');//gather answer containers from our quiz
		var userAnswer='';
		var numCount=0;
		for(var i=0;i<questions.length;i++)
		{
			userAnswer=(answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			if(userAnswer===questions[i].correctAnswer)
			{
				numCount++;
				answerContainers[i].style.color='lightgreen';

			}
			else{
				answerContainers[i].style.color='red';

			}

		}
		resContainer.innerHTML=numCount+'out of'+questions.length;
	}
	showQuestions(questions,quizContainer);
	submitButton.onclick=function(){
	showResults(questions,resContainer,quizContainer);
}

}


