'use strict'

var shells;
var shell;
var ball;
var endGame;
var winner;
var loser;
var seeYa;

document.addEventListener('DOMContentLoaded', init);

function init() {
	shells = document.getElementById('shells');
	shell = document.getElementsByClassName('shell');
	endGame = document.getElementById('endGame');
	winner = document.getElementById('winner');
	loser = document.getElementById('loser');
	seeYa = document.getElementById('seeYa');
	document.querySelector('#start').addEventListener('click', startGame);
	document.querySelector('#yes1').addEventListener('click', startGame);
	document.querySelector('#yes2').addEventListener('click', startGame);
	document.querySelector('#no1').addEventListener('click', noReplayWin);
	document.querySelector('#no2').addEventListener('click', noReplayLose);
	shells.addEventListener('click', clickShell);
	
}	


function clickShell (event) {
	if(ball.classList.contains('grey')) {
		startGame();
	} else {
		startGame();
		didYouWin();
	}

};

function startGame (event) {
	if (winner.classList.contains('win')) {
		winner.classList.remove('win');
		winner.classList.add('hidden');
	}

	if (loser.classList.contains('lose')) {
		loser.classList.remove('lose');
		loser.classList.add('hidden');
	}

	if (!endGame.classList.contains('hidden')) {
		endGame.classList.add('hidden');
		endGame.classList.remove('win');
		endGame.classList.remove('lose');
		endGame.classList.remove('later');
	}

	if (!seeYa.classList.contains('hidden')) {
		seeYa.classList.add('hidden');
		seeYa.classList.remove('later')
	}

	for(var i = 0; i < shell.length; i++) {
		if(shell[i].classList.contains('grey')) {
			shell[i].classList.remove('grey');
		}
	}
	getRandomInt(0, 2);
};


function getRandomInt(min, max) {
    return ball = shell[Math.floor(Math.random() * (max - min + 1)) + min];
};

function didYouWin() {
	if(event.target == ball) {
		ball.classList.add('grey');
		endGame.classList.remove('hidden');
		endGame.classList.add('win');
		winner.classList.remove('hidden');
		winner.classList.add('win');
			
	} else {
		ball.classList.add('grey');
		endGame.classList.remove('hidden');
		endGame.classList.add('lose');
		loser.classList.add('lose');
		loser.classList.remove('hidden');
		
	}
};

function noReplayWin () {
	winner.classList.add('hidden');
	winner.classList.remove('win');
	endGame.classList.remove('win');
	endGame.classList.remove('hidden');
	seeYa.classList.remove('hidden');
	seeYa.classList.add('later');
	endGame.classList.add('later');
};

function noReplayLose () {
	loser.classList.add('hidden');
	loser.classList.remove('lose');
	endGame.classList.remove('lose');
	endGame.classList.remove('hidden');
	seeYa.classList.remove('hidden');
	seeYa.classList.add('later');
	endGame.classList.add('later');
};

