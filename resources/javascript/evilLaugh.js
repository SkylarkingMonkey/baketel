var laughState = true;

function laugh (){
			console.log(laughState, "laught state")
			if (laughState===true){
				var evil = document.getElementById("evil-face");
				evil.classList.remove('evil-face-container');
				evil.classList.add("evil-face-container-on");
				setTimeout(setLaughTimer, 5250);
				setTimeout(laugh, 300);				
			} else {
				setTimeout(jawUp, 5000);
				setTimeout(jawUp, 6000);
				setTimeout(jawUp, 7500);
			}

}



function setLaughTimer(){
	jawDown();
	setTimeout(jawUp, 225);

}


function jawDown (){
	$(".jaw").addClass("jaw-laugh-down");
}

function jawUp(){
	$(".jaw").removeClass("jaw-laugh-down");
	$(".jaw").addClass("jaw-laugh-up");
}



function revealSkull() {
	console.log("WTF SKULL")
	$('.face-line').each(function(i){
		var skullLine = $(this);
		setTimeout(function(){
			skullLine.addClass('reveal');
		}, 100*i);
	});
}

function fadeSkull(){
	$('#evil-face').fadeOut("slow", function(){

	});
}



