//crear grid

function cGrid(x){
    var i = 0;
    var celdas = x * x;
    while (i < celdas){
      $('#grid').append("<div class='pixel'></div>");
      i++;
    }
} 

$(document).ready(function(){
    cGrid(80);

    $(".pixel").mouseenter(function() {
        $(this).css("background-color", "#000");
    });
});
