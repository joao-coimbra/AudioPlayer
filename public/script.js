//Variável Global
var audio;

//Página carregada
function onLoadPage() {
    //Acessar controle Audio via JavaScript
    audio = document.getElementById("audio");

    audio.addEventListener("play", onPlayMusic, false);
    audio.addEventListener("timeupdate", onAtualizarTempo, false);
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

    setInterval(play()
    ,100);
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

function closePopUp(bool) {
    document.querySelector(".wrap").style.visibility = "hidden";
    document.querySelector("main#first-page").style.marginTop = "100px";

    document.getElementById("td1").style.display = "flex";
    document.getElementById("td2").style.display = "flex";
    document.getElementById("td3").style.display = "flex";
    document.getElementById("td4").style.display = "flex";
    document.getElementById("td5").style.display = "flex";
    document.getElementById("td6").style.display = "flex";

    if (bool == true) {
        document.querySelector("nav").style.position = "fixed";
    }
}

function openAlbum(num) {

    document.querySelector(".wrap").style.visibility = "visible";
    document.querySelector("nav").style.position = "relative";
    document.querySelector("main#first-page").style.marginTop = "20px";

    switch (num) {
        case 1:
            document.getElementById("albumname").innerHTML = "Rock Nacional";
            document.getElementById("p1").innerHTML = "Eduardo e Mônica";
            document.getElementById("p2").innerHTML = "Equalize";
            document.getElementById("p3").innerHTML = "faroeste Caboclos";
            document.getElementById("td4").style.display = "none";
            document.getElementById("td5").style.display = "none";
            document.getElementById("td6").style.display = "none";
            break;

        case 2:
            document.getElementById("albumname").innerHTML = "Hit Nacional";
            document.getElementById("p1").innerHTML = "Chão de giz";
            document.getElementById("p2").innerHTML = "Dar-te-ei";
            document.getElementById("p3").innerHTML = "Favela";
            document.getElementById("p4").innerHTML = "Pesadão";
            document.getElementById("td5").style.display = "none";
            document.getElementById("td6").style.display = "none";
            break;

        case 3:
            document.getElementById("albumname").innerHTML = "Rock";
            document.getElementById("p1").innerHTML = "Every you";
            document.getElementById("p2").innerHTML = "Bohemian Rhapsody";
            document.getElementById("p3").innerHTML = "Lonely Day";
            document.getElementById("p4").innerHTML = "Welcome to the jungle";
            document.getElementById("p5").innerHTML = "Heat of the moment";
            document.getElementById("p6").innerHTML = "You shook me all night long";
            break;

        case 4:
            document.getElementById("albumname").innerHTML = "Pop";
            document.getElementById("p1").innerHTML = "Bad";
            document.getElementById("p2").innerHTML = "Billie Jean";
            document.getElementById("p3").innerHTML = "Old town road";
            document.getElementById("p4").innerHTML = "They Don't care about us";
            document.getElementById("p5").innerHTML = "Thriller";
            document.getElementById("td6").style.display = "none";
            break;

        case 5:
            document.getElementById("albumname").innerHTML = "Mpb";
            document.getElementById("p1").innerHTML = "Era um Garoto";
            document.getElementById("p2").innerHTML = "Por Enquanto";
            document.getElementById("p3").innerHTML = "Pra Você Guardei o Amor";
            document.getElementById("p4").innerHTML = "Velha Infância";
            document.getElementById("td5").style.display = "none";
            document.getElementById("td6").style.display = "none";
            break;

        default:
            break;
    }
}

function changeMusic(num) {

    let albumName = document.querySelector("#albumname").innerHTML;
    let aud = document.querySelector("source#player");

    switch (albumName) {
        case "Rock Nacional":
            switch (num) {
                case 1:
                    aud.src = 'public/audio/rocknacional/eduardo_e_monica.mp3';
                    break;
                
                case 2:
                    aud.src = 'public/audio/rocknacional/equalize.mp3';
                    break;

                case 3:
                    aud.src = 'public/audio/rocknacional/faroeste_caboclo.mp3';
                    break;

                case 4:
                    break;
                        
                case 5:
                    break;
                        
                case 6:
                    break;

                default:
                    break;
                }
            break;

        case "Hit Nacional":
            switch (num) {
                case 1:
                    aud.src = 'public/audio/hitnacional/chao_de_giz.mp3';
                    break;

                case 2:
                    aud.src = 'public/audio/hitnacional/dar_te_ei.mp3';
                    break;

                case 3:
                    aud.src = 'public/audio/hitnacional/favela.mp3';
                    break;

                case 4:
                    aud.src = 'public/audio/hitnacional/pesadao.mp3';
                    break;

                case 5:
                    break;

                case 6:
                    break;

                default:
                    break;
            }
            break;  

        case "Rock":
            switch (num) {
                case 1:
                    aud.src = 'public/audio/rock/every_you.mp3';
                    break;

                case 2:
                    aud.src = 'public/audio/rock/bohemian_rhapsody.mp3';
                    break;

                case 3:
                    aud.src = 'public/audio/rock/lonely_day.mp3';
                    break;

                case 4:
                    aud.src = 'public/audio/rock/welcome_to_the_jungle.mp3';
                    break;

                case 5:
                    aud.src = "'public/audio/rock/heat_of_the_moment.mp3'";
                    break;

                case 6:
                    aud.src = 'public/audio/rock/you_shook_me_all_night_long.mp3';
                    break;

                default:
                    break;
            }
            break;

        case "Pop":
            switch (num) {
                case 1:
                    aud.src = 'public/audio/pop/bad.mp3';
                    break;
                
                case 2:
                    aud.src = 'public/audio/pop/billie_jean.mp3';
                    break;

                case 3:
                    aud.src = 'public/audio/pop/old_town_road.mp3';
                    break;

                case 4:
                    aud.src = 'public/audio/pop/they_dont_care_about_us.mp3';
                    break;
                        
                case 5:
                    aud.src = 'public/audio/pop/thriller.mp3';
                    break;
                        
                case 6:
                    break;

                default:
                    break;
                }
            break;

        case "Mpb":
            switch (num) {
                case 1:
                    aud.src = 'public/audio/mpb/era_um_garoto.mp3';
                    break;
                
                case 2:
                    aud.src = 'public/audio/mpb/por_enquanto.mp3';
                    break;

                case 3:
                    aud.src = 'public/audio/mpb/pra_voce_guardei_o_amor.mp3';
                    break;

                case 4:
                    aud.src = 'public/audio/mpb/velha_infancia.mp3';
                    break;
                        
                case 5:
                    break;
                        
                case 6:
                    break;

                default:
                    break;
                }
            break;

        default:
            break;
        }

}

function ativarTd() {
    document.querySelector("#td1").style.BackGroundColor = "black";
}

function alterarBtn(test) {

    let play = document.getElementById("play");
    let pause = document.getElementById("pause");

    if (play.style.display == "none") {
        play.style.display = "block";
        pause.style.display = "none";
    }
    else {
        play.style.display = "none";
        pause.style.display = "block";
    }

}

function alterarVolume() {

    let vol = document.getElementById("vol");

    if (vol.style.visibility == "hidden") {
        vol.style.visibility = "visible";
    }
    else {
        vol.style.visibility = "hidden";
    }
}