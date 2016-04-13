$(function(){
    $('#menu').mouseover(function(){
        $('#menu').animate({left: "0"},250);
    });
    
    $('#menu').mouseleave(function(){
        $('#menu').animate({left: "-20%"},250);
    });
});