 // duration: seconds
function Pomodoro(duration) {
	var self = this;
	this.duration = duration;
	this.length = this.duration || 25 * 60;
	this.timer = ko.observable(this.length);
	this.isRunning = false;
	this.isPaused = true;
	this.minutes = ko.computed(function() {
		var minutes = parseInt(self.timer() / 60, 10);
		return (minutes < 10) ? '0' + minutes : minutes;
	});
	this.seconds = ko.computed(function() {
		var seconds = parseInt(self.timer() % 60, 10);
		return (seconds < 10) ? '0' + seconds : seconds;
	});
	this.elapsed = 0;
	this.bell = new Audio('audio/bell.mp3');
}

Pomodoro.prototype.clock = function() {
	var time = new Date().getTime() - this.start;
	this.elapsed = Math.floor(time / 100 / 10);
	if(Math.round(this.elapsed) === this.elapsed) {
		this.elapsed++;
	}
	this.timer(this.length - this.elapsed);
	if(this.timer() === 0) {
		this.resetTimer();
		this.bell.play();
	}
};

Pomodoro.prototype.startTimer = function() {
	// if this is not set then calling the setInterval function with this.clock will set 'this' to global
	var me = this;
	this.start = new Date().getTime();
	this.interval = setInterval(function() {
		me.clock();
	}, 100);
};

Pomodoro.prototype.resetTimer = function() {
	clearInterval(this.interval);
	this.isPaused = true;
	this.length = this.duration;
	this.setTimer(this.length);
};

Pomodoro.prototype.pausePlay = function() {
	this.isPaused = !this.isPaused;
	if (!this.isPaused) {
		this.startTimer();
	}
	else {
		// save progress
		this.length = this.timer();
		clearInterval(this.interval);
	}
};

Pomodoro.prototype.ringTimer = function() {
	console.log('Ring, ring!');
};

Pomodoro.prototype.setTimer = function(duration) {
	this.timer(duration);
};
