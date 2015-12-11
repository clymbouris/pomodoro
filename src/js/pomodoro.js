 // duration: seconds
function Pomodoro(duration) {
	this.length = duration || 25 * 60;
	this.timer = ko.observable(this.length);
	this.isRunning = false;
	this.isPaused = true;
}

Pomodoro.prototype.clock = function() {
	var minutes = parseInt(this.timer() / 60, 10);
	var seconds = parseInt(this.timer() % 60, 10);
	minutes = (minutes < 10) ? '0' + minutes : minutes;
	seconds = (seconds < 10) ? '0' + seconds : seconds;
	if(!this.isPaused) {
		this.timer(this.timer() - 1);
		console.log(minutes, seconds);
		if ( this.timer() === 0) {
			this.ringTimer();
			this.resetTimer();
		}
	}
};

Pomodoro.prototype.startTimer = function() {
	this.isRunning = true;
	this.isPaused = false;
	// if this is not set then calling the setInterval function with this.clock will set 'this' to global
	var me = this;
	this.interval = setInterval(function() {
		me.clock();
	}, 1000);
};

Pomodoro.prototype.resetTimer = function() {
	this.isPaused = true;
	clearInterval(this.interval);
	this.isRunning = false;
	this.setTimer(this.length);
};

Pomodoro.prototype.pauseTimer = function() {
	this.isPaused = !this.isPaused;
};

Pomodoro.prototype.ringTimer = function() {
	console.log('Ring, ring!');
};

Pomodoro.prototype.setTimer = function(duration) {
	this.timer(duration);
};

var p = new Pomodoro(5);
ko.applyBindings(p);
