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



//Piano con evento tecla
var entrada1 = document.getElementsByTagName('body')[0];
entrada1.addEventListener('keydown',function(e){
    var letra1 = e.key;

    if(letra1 !== '1' && letra1 !== '2' && letra1 !== '3' && letra1 !== '4' && letra1 !== '5' && letra1 !== '6' && letra1 !== '7'){
        alert('no es la tecla, las teclas son: 1,2,3,4,5,6,7');
    }else{
        var dd = document.querySelector(`audio[data-key="${letra1}"]`).pause();
        var dd = document.querySelector(`audio[data-key="${letra1}"]`).currentTime=0;
        var dd = document.querySelector(`audio[data-key="${letra1}"]`).play();
    }
});
