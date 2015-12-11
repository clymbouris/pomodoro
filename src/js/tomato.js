$(document).ready(function(){
	$tomato = $('#tomato');
	$tomato.click(function() {
		if(!p.isRunning) {
			p.startTimer();
		}
		else {
			p.pauseTimer();
		}
	});
});