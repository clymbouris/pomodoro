$(document).ready(function(){
	var p = new Pomodoro(1500);
	ko.applyBindings(p);
	$tomato = $('#tomato');
	$tomato.click(function() {
		p.pausePlay();
	});
});