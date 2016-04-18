$(function(){
    
    var picList = ['../images/food01.jpg',
                   '../images/food02.jpg',
                   '../images/food03.jpg',
                   '../images/food04.jpg',
                   '../images/food05.jpg',
                   '../images/food06.jpg',
                   '../images/food07.jpg',
                   '../images/food08.jpg',
                   '../images/food09.jpg',
                   '../images/food10.jpg',
                   '../images/food11.jpg',
                   '../images/food12.jpg',
                   '../images/food13.jpg',
                   '../images/food14.jpg'];
    
    var i;
    
    // Show the initial images
    refreshImage('.left-pic');
    refreshImage('.right-pic');
    
    // Click the refresh circle to change both the images
    $('article .circle').click(function(){
        refreshImage('.left-pic');
        refreshImage('.right-pic');
    });
    
    $('.left-pic').click(function(){
        refreshImage(this);
    });
    
    $('.right-pic').click(function(){
        refreshImage(this);
    });
    
    function refreshImage(which){
        i = getRandomInt(0,picList.length-1);
        $(which).css("background-image", "url(" + picList[i] + ")");
    }
  
    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});