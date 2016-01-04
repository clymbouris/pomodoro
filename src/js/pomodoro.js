 // duration: seconds
function Pomodoro(duration) {
	var self = this;
	// User initial duration. Default 25 mins.
	self.duration = (duration) ? ko.observable(duration) : ko.observable(25 * 60);
	// Time remaining in seconds. Used to keep track of time when using setTimer() and pausePlay()
	self.remaining = self.duration();
	// Running Timer
	self.timer = ko.observable(self.remaining);
	// Used in clock method to keep timer accurate (setInterval)
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
	
	// Audio
	self.mute = function() {
		self.audio.muted = !self.audio.muted;
	};
	self.audio = {
		muted: false,
		bell: new Audio('audio/bell.mp3'),
		tick: new Audio('audio/tick.mp3'),
		crank: new Audio('audio/crank.mp3'),
		tock: new Audio('audio/tock.wav')
	};
}

Pomodoro.prototype.clock = function() {
	// Adjust time drift
	var time = new Date().getTime() - this.start;
	this.elapsed = Math.floor(time / 100 / 10);
	if(Math.round(this.elapsed) === this.elapsed) {
		this.elapsed++;
	}
	// Update timer to new value
	this.timer(this.remaining - this.elapsed);
	// Check if time is up
	if (this.timer() < 0) {
		this.resetTimer();
	}
	else {
		this.updateTitle();
	}
};

Pomodoro.prototype.startTimer = function() {
	// if this is not set then calling the setInterval function with this.clock will set 'this' to global
	this.playSound('tick');
	// Used to adjust time inside clock method
	this.start = new Date().getTime();
	// Start setInterval
	var me = this;
	this.interval = setInterval(function() {
		me.clock();
	}, 100);
};

Pomodoro.prototype.playSound = function(name) {
	if (!this.audio.muted) {
		switch (name) {
		    case "bell":
		    	this.audio.bell.play();
		        break;
		    case "crank":
		        this.audio.crank.play();
		        break;
		    case "tick":
		        this.audio.tick.play();
		        break;
		    case "tock":
		        this.audio.tock.play();
		        break;
		}
	}
	else {
		console.log(name + '!');
	}
};
 
// Updates page title to show minutes:seconds remaining. Side effects function
Pomodoro.prototype.updateTitle = function() {
	document.title = (this.isPaused()) ? 'pomodoro' : this.minutes() + ':' + this.seconds();
};

Pomodoro.prototype.resetTimer = function() {
	this.playSound('bell');
	// End setInterval
	clearInterval(this.interval);
	// Pause and update title
	this.isPaused(true);
	this.updateTitle();
	// Set timer to user initial duration
	this.setTimer(this.duration());
};

Pomodoro.prototype.setTimer = function(duration) {
	this.remaining = duration;
	this.timer(this.remaining);
};

Pomodoro.prototype.pausePlay = function() {
	this.playSound('tick');
	clearInterval(this.interval);
	this.isPaused(!this.isPaused());
	this.updateTitle();
	if (!this.isPaused()) this.startTimer();
	else this.remaining = this.timer();
};

Pomodoro.prototype.adjustDuration = function(seconds) {
	this.playSound('tock');
	if (!this.isPaused()) this.pausePlay();
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
