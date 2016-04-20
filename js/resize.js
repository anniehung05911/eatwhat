$(document).ready(function(){
    $('article .container').css("height",$('article .pic-bg').width() + "px");
    $('.left-pic, .right-pic').css("width",$('article .pic-bg').width()-14 + "px");
    $('.left-pic, .right-pic').css("height",$('article .pic-bg').height()-14 + "px");
    $('article .circle').css("height",$('article .circle').width() + "px");
    $('article .circle').css("margin-top",$('article .circle').height()*-0.5 + "px");
    $('article .circle').css("margin-left",$('article .circle').width()*-0.5 + "px");
    $('article .circle').css("line-height",$('article .circle').height()+"px");
});