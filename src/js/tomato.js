$(document).ready(function(){
	// Initialize Pomodoro clock ViewModel constructor and apply knockout bindings
	var p = new Pomodoro(1500);
	ko.applyBindings(p);
	// Apply pause/play click on tomato element
	$tomato = $('#tomato');
	$tomato.click(function() {
		p.pausePlay();
	});

});