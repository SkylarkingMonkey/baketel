$(document).ready(function (){
	$('#toggle-container').hover(function(){
		$('#mode-screen').attr("class", "mode-screen-on");
	})
});


$(document).ready(function (){
	$('#pity').onClick(function(){
		$('#mode-screen').attr("class", "mode-screen-off");
		$('')
	})
});


