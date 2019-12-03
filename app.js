//Piano con Jquery
/*$(document).ready(function () {
    $('#padre').on('click', 'div', function(){
        var atributo = "#"+"a"+$(this).attr('id');

        $(atributo)[0].pause();
        $(atributo)[0].currentTime=0;
        $(atributo)[0].play();
    });
});*/


//Piano con JavaScript Vanilla
var ar = document.querySelectorAll('.tecla');
//console.log(ar);

ar.forEach(function(numero){
    var idbotones = numero;
    //console.log(idbotones);

    idbotones.addEventListener('click',function(e){
        var nombreaudio = "a" + e.target.id;
        //console.log(nombreaudio);
        var sonaraudio = document.getElementById(nombreaudio).pause();
        var sonaraudio = document.getElementById(nombreaudio).currentTime=0;
        var sonaraudio = document.getElementById(nombreaudio).play();
    });
});