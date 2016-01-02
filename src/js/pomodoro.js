 // duration: seconds
function Pomodoro(duration) {
	var self = this;
	// Time duration as set by User. We store this to have it available on reset. Default 25 mins.
	self.duration = (duration) ? ko.observable(duration) : ko.observable(25 * 60);
	// Time remaining in seconds
	self.remaining = self.duration();
	// Running Timer
	self.timer = ko.observable(self.remaining);
	// To keep clock function accurate
	self.elapsed = 0;

	// Pause status and view
	self.isPaused = ko.observable(true);
	self.pauseView = ko.computed(function() {
		return (self.isPaused()) ? 'paused' : '';
	});

	// Minutes View
	self.minutes = ko.computed(function() {
		return parseInt(self.timer() / 60, 10);
	});
	// Seconds View
	self.seconds = ko.computed(function() {
		var s = parseInt(self.timer() % 60, 10);
		return (s < 10) ? '0' + s : s;
	});
	
	// SoundFX
	self.bell = new Audio('audio/bell.mp3');
	self.tick = new Audio('audio/tick.mp3');
	self.tock = new Audio('audio/tock.wav');
	self.crank = new Audio('audio/crank.mp3');
	self.tickStart = new Audio('audio/start.mp3');
}

Pomodoro.prototype.clock = function() {
	var time = new Date().getTime() - this.start;
	this.elapsed = Math.floor(time / 100 / 10);
	if(Math.round(this.elapsed) === this.elapsed) {
		this.elapsed++;
	}
	this.timer(this.remaining - this.elapsed);
	if(this.timer() < 0) {
		this.resetTimer();
		this.ringTimer();
	}
	document.title = this.minutes() + ':' + this.seconds();
};

Pomodoro.prototype.startTimer = function() {
	// if this is not set then calling the setInterval function with this.clock will set 'this' to global
	this.tick.play();
	var me = this;
	this.start = new Date().getTime();
	this.interval = setInterval(function() {
		me.clock();
	}, 100);
};

Pomodoro.prototype.resetTimer = function() {
	clearInterval(this.interval);
	this.crank.play();
	this.isPaused(true);
	this.setTimer(this.duration());
};

Pomodoro.prototype.ringTimer = function() {
	console.log('Ring, ring!');
	this.bell.play(); 
};

Pomodoro.prototype.setTimer = function(duration) {
	this.remaining = duration;
	this.timer(this.remaining);
};

Pomodoro.prototype.pausePlay = function() {
	this.tick.play();
	clearInterval(this.interval);
	this.isPaused(!this.isPaused());
	if (!this.isPaused()) this.startTimer();
	else this.remaining = this.timer();
};

Pomodoro.prototype.adjustDuration = function(seconds) {
	if (!this.isPaused()) this.pausePlay();
	this.tock.play();
	if (seconds > 0 && this.duration() + seconds >= 3600) {
		this.duration(3600);
	}
	else if (seconds < 0 && this.duration() + seconds < 1) {
		this.duration(this.timer());
	}
	else {
		this.duration(this.timer() - (this.timer() % 60) + seconds);
	}
	this.setTimer(this.duration());
};
