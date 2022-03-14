$(document).ready(function(){
    $("#fo, #fx").click(function(){
        $("#caixa1").fadeOut(1000);
});

$("#fi").click(function(){
    $("#caixa1").fadeIn(1000);
});

$("#ft").click(function(){
    $("#caixa1").fadeToggle();
});

$("#su, #fxs").click(function(){
    $("#caixa2").slideUp();
});

$("#sd").click(function(){
    $("#caixa2").slideDown();
});

$("#st").click(function(){
    $("#caixa2").slideToggle();
});


});