$(document).ready(function(){
	var p = new Pomodoro(5);
	ko.applyBindings(p);
	$tomato = $('#tomato');
	$tomato.click(function() {
		p.pausePlay();
	});
});