var videoA2D = document.getElementById("videoA2D");


var demoreel = document.getElementById("DRBA2D");


var boto_play = document.getElementById("boto_play");
var boto_pause = document.getElementById("boto_pause");
var boto_stop = document.getElementById("boto_stop");

var video_clicat;
var miniatura;


demoreel.onclick = function(){
    video_clicat = "";
    miniatura = "";
}





function reinici_valors(){
    videoA2D.src = video_clicat;
    videoA2D.poster = miniatura;
}