$(function(){
    
    var picList = ['images/Amin/Amin1.jpg',
                   'images/Amin/Amin2.jpg',
                   'images/Amin/Amin3.jpg',
                   'images/Amin/Amin4.jpg',
                   'images/Amin/Amin5.jpg',
                   'images/Amin/Amin6.jpg',
                   'images/Amin/Amin7.jpg'];
    
    var i;
    i = getRandomInt(0, picList.length-1);
    $('.left-pic').css("background-image","url(" + picList[i] + ")");
    $('.right-pic').css("background-image","url(images/MrFrog.jpg)");
    
    $('.left-pic').mouseenter(function(){
        $('.left-pic .about-me').slideDown(400,"swing");
    });
    
    $('.left-pic').mouseleave(function(){
        $('.left-pic .about-me').slideUp(400,"swing");
    });
    
    $('.right-pic').mouseenter(function(){
        $('.right-pic .about-me').slideDown(400,"swing");
    });
    
    $('.right-pic').mouseleave(function(){
        $('.right-pic .about-me').slideUp(400,"swing");
    });
    
    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});