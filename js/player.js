var player;
var rngVolume;
var intv;

	window.onload = function() 
	{
		init();
		//document.addEventListener('deviceready', init, false); 
	}

	function init() 
	{
		player = document.getElementById('player');
		var btnPlay = document.getElementById('btnPlay');
		var btnStop = document.getElementById('btnStop');
		var btnPause = document.getElementById('btnPause');
		rngVolume = document.getElementById('rngVolume'); 

		btnPlay.addEventListener('click', playMusic, false);
		btnStop.addEventListener('click', stopMusic, false);
		btnPause.addEventListener('click', pauseMusic, false); 
	}

	function changeVolume() {
		player.volume = rngVolume.value; ▸}
▸
▸ function pauseMusic() ▸{
▸ player.pause(); ▸}
▸
▸ function playMusic() ▸{
▸ player.play();
▸ startTimer(); ▸}
▸
▸ function stopMusic() ▸{
▸ player.pause();
▸ player.currentTime = 0;
▸ stopTimer(); ▸}
▸
▸ function changeSong(song) ▸{
▸ stopTimer();
▸ player.pause();
▸ player.src = "assets/" + song + ".mp3";
▸ player.play();
▸ startTimer(); ▸}
▸
▸ function startTimer()
▸{
▸ intv = setInterval(updateTime, 1000); ▸}
▸
▸ function stopTimer()
▸{
▸ clearInterval(intv); ▸}