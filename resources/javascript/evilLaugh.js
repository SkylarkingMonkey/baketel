function laugh (){
	var evil = document.getElementById("evil-face");
	evil.classList.remove('evil-face-container');
	evil.classList.add("evil-face-container-on");
	revealSkull();
	setTimeout(setLaughTimer, 15250);
	setTimeout(laugh, 300);	
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
	$('.face-line').each(function(i){
		var skullLine = $(this);
		setTimeout(function(){
			skullLine.addClass('reveal');
		}, 100*i);
	});
}




