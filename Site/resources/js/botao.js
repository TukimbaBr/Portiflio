// Função para controlar a reprodução/pausa

function toggleAudio() {
	var meuAudio = document.getElementById("meuAudio");
	if (meuAudio.paused){
		meuAudio.play();
		} else {
		meuAudio.pause();
	}
}
