//Variável Global
var audio;

//Página carregada

setInterval(loadAudio(), 1000);

function loadAudio(){
    audio = document.getElementById("audio");

    audio.addEventListener("play", onPlayMusic, false);
}

//Controlar Volume
function volume(controle){
    audio.volume = controle.value;
}

//Tocar Música
function play(){
    audio.play();
}

//Pausar música
function pause(){
    audio.pause();
}
//Parar música
function stop(){
    audio.pause();
    audio.currentTime = 0;
}
/**
* Evento - Quando tocar a música – Carregar Barra e Tempo Atual/Total
*/
function onPlayMusic(){
    document.getElementById("tempo_atual").innerHTML = secToStr(audio.currentTime);
    document.getElementById("tempo_total").innerHTML = secToStr(audio.duration);
    document.getElementById("barra_progresso").max = audio.duration;
    document.getElementById("barra_progresso").value = audio.currentTime;
}

/**
* Evento - Atualizar o Tempo
*/
function onAtualizarTempo(){
    document.getElementById("tempo_atual").innerHTML = secToStr(audio.currentTime);
    document.getElementById("barra_progresso").value = audio.currentTime;
}
/**
* Converte segundos em Tempo formatado hh/mm/ss
*
*/
function secToStr( seg ) {
    seg = Math.floor( seg );
    var horas = Math.floor(seg / 3600);
    var minutos = Math.floor((seg - (horas * 3600)) / 60);
    var segundos = seg - (horas * 3600) - (minutos * 60);

    if (horas < 10) horas = "0"+horas;
    if (minutos < 10) minutos = "0"+minutos;
    if (segundos < 10) segundos = "0"+segundos;

    return horas+":"+minutos+":"+segundos;
}

function openAlbum(num) {

    document.querySelector(".wrap").style.display = "block";
    document.querySelector("nav").style.position = "relative";
    document.querySelector("main#first-page").style.marginTop = "20px";

    switch (num) {
        case 1:
            document.getElementById("albumname").innerHTML = "Rock Nacional";
            document.getElementById("p1").innerHTML = "O dia que não terminou";
            document.getElementById("p2").innerHTML = "Olhos certos";
            document.getElementById("p3").innerHTML = "Outro lugar";
            document.getElementById("p4").innerHTML = "Um cara de sorte";
            break;

        case 2:
            document.getElementById("albumname").innerHTML = "Hit Nacional";
            document.getElementById("p1").innerHTML = "O dia que não terminou";
            document.getElementById("p2").innerHTML = "Olhos certos";
            document.getElementById("p3").innerHTML = "Outro lugar";
            document.getElementById("p4").innerHTML = "Um cara de sorte";
            break;
        
        case 3:
            document.getElementById("albumname").innerHTML = "Rock";
            document.getElementById("p1").innerHTML = "Every you";
            document.getElementById("p2").innerHTML = "Music name";
            document.getElementById("p3").innerHTML = "Music name";
            document.getElementById("p4").innerHTML = "Music name";
            break;
        default:
            resetNames();
    }
}

function closePopUp() {
    document.querySelector(".wrap").style.display = "none";
    document.querySelector("nav").style.position = "fixed";
    document.querySelector("main#first-page").style.marginTop = "100px";
}

function resetNames() {
    document.getElementById("albumname").innerHTML = "Album name";
    document.getElementById("p1").innerHTML = "Music name";
    document.getElementById("p2").innerHTML = "Music name";
    document.getElementById("p3").innerHTML = "Music name";
    document.getElementById("p4").innerHTML = "Music name";
}

function playMusic(num) {

    document.querySelector(".wrap").style.display = "none";
    document.querySelector("main#audio-player").style.display = "block";
    document.querySelector("main#first-page").style.display = "none";
    document.querySelector(".navbar h1").style.display = "none";
    document.querySelector("#arrow-left").style.display = "block";
    document.querySelector("nav").style.position = "absolute";

    let albumName = document.querySelector("#albumname").innerHTML;
    let aud = document.querySelector("source#player");

    switch (albumName) {
        case "Rock Nacional":
            switch (num) {
                case 1:
                    break;
                
                case 2:
                    break;

                case 3:
                    break;

                case 4:
                    break;

                default:
                    break;
                }
            break;
            
        case "Rock":
            switch (num) {
                case 1:
                    aud.src = 'public/audio/every_you.mp3';
                    break;

                case 2:
                    break;

                case 3:
                    break;

                case 4:
                    break;

                default:
                    break;
            }
            break;
        default:
            break;
        }

}

function returnFirstPage() {
    document.querySelector("main#first-page").style.display = "block";
    document.querySelector("main#audio-player").style.display = "none";
    document.querySelector(".navbar h1").style.display = "block";
    document.querySelector("#arrow-left").style.display = "none";
    document.querySelector("main").style.marginTop = "100px";
    document.querySelector("nav").style.position = "fixed";

    resetNames();
    let audio = document.querySelector("source#player");
    audio.src = "";
}