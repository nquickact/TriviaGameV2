$("#start").on("click", function(){
	game.start();	

});

$(document).on('click','#end',function(){
	game.done();
})

var questions = [{
	question: "Hooli's slogan is 'it takes ______ to make change'.",
	answers: ["Billions", "Change", "Innovation"],
	correctAnswer: "Change"
},	{
	question: "Hooli's CEO is ______",
	answers: ["Gavin Belson", "Jack Barker", "Gavin Belson Again"],
	correctAnswer: "Gavin Belson Again"
},	{
	question: "Hooli.con is a celebration of ______",
	answers: ["Gavin Belson", "All things Hoolific", "The life giving nature of Hooli's magnificents"],
	correctAnswer: "The life giving nature of Hooli's magnificents"
},	{
	question: "Gavin Belson has never hurt and endanered animal(ex. a sloth)",
	answers: ["True", "False", "We'll sue anyone who says False"],
	correctAnswer: "We'll sue anyone who says False"
},	{
	question: "At Hooli 'You have to be ______ to be great'.",
	answers: ["Good", "Rich", "Gavin Belson"],
	correctAnswer: "Good"
},	{
	question: "Nucleus is the what the ______ of our modern age",
	answers: ["E=mc2", "Jesus", "Saviour"],
	correctAnswer: "Jesus"
},	{
	question: "Hooli XYZ is our ______ department",
	answers: ["Future Tech", "Mishandled", "No Longer in the Show"],
	correctAnswer: "No Longer in the Show"
}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 20,
	countdown: function(){
		game.counter--;
		$('#counter').html(game.counter);
		if (game.counter<=0) {
			console.log("time is up!");
			game.done();
		}
	},
	start: function(){
		timer = setInterval(game.countdown,1000);
		$('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">20</span> Seconds</h2>');
		$("#start").remove();
		for (var i = 0; i<questions.length;i++){
			$("#subwrapper").append('<h2>'+ questions[i].question+'</h2>');
			for (var j=0;j<questions[i].answers.length;j++){
				$("#subwrapper").append("<input type='radio' name='question-"+i+" 'value="+questions[i].answers[j]+"'>"+questions[i].answers[j]);
			}
		}
		$('#subwrapper').append('<br><button id="end">DONE</button>')
	},
	done: function(){
	$.each($("input[name='question-0']:checked"), function(){
			if($(this).val()==questions[0].correctAnswer){
				game.correct++;
			}	else {
				game.incorrect++;
			}
		});
	$.each($("input[name='question-1']:checked"), function(){
			if($(this).val()==questions[1].correctAnswer){
				game.correct++;
			}	else {
				game.incorrect++;
			}
		});
	$.each($("input[name='question-2']:checked"), function(){
			if($(this).val()==questions[2].correctAnswer){
				game.correct++;
			}	else {
				game.incorrect++;
			}
		});
	$.each($("input[name='question-3']:checked"), function(){
			if($(this).val()==questions[3].correctAnswer){
				game.correct++;
			}	else {
				game.incorrect++;
			}
		});
	$.each($("input[name='question-4']:checked"), function(){
			if($(this).val()==questions[4].correctAnswer){
				game.correct++;
			}	else {
				game.incorrect++;
			}
		});
	$.each($("input[name='question-5']:checked"), function(){
			if($(this).val()==questions[5].correctAnswer){
				game.correct++;
			}	else {
				game.incorrect++;
			}
		});
	$.each($("input[name='question-6']:checked"), function(){
			if($(this).val()==questions[6].correctAnswer){
				game.correct++;
			}	else {
				game.incorrect++;
			}
		});

		this.result();
		},

		result: function(){
			clearInterval(timer);
			$('#subwrapper h2').remove();
			$('#subwrapper').html("<h2>All done!</h2>");
			$('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
			$('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
			$('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>")
		}
}








