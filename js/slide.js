$(function(){
    $('article .rank>li').click(function(){
        $(this).children('div.info').slideToggle("slow");
    });
});