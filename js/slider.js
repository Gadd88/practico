// CONFIGURACION DEL SLIDER
///////////////////////////////////////
$(document).ready(function(){
    $("#slippry").slippry({
        captions: false,
        pager: false,
    })
});

// Para sacar la altura de la imagen en NOSOTROS
///////////////////////////////////////


let diamante_width = $('.diamante').width();
$('.diamante').css({
    "height": diamante_width
});


// Para agregar una CLASE A la NAV BAR
///////////////////////////////////////

let slider = $('#slider').height();
$(window).scroll(function(){
    let scroll = $(window).scrollTop();
    if(scroll >= $('#nosotros').offset().top-300){
        $('#nav').addClass("nav-overlay")
    }else{
        $('#nav').removeClass("nav-overlay")
    }
})
$(window).scroll();

