$(function(){
    
    var picList = ['images/Amin/Amin1.jpg',
                   'images/Amin/Amin2.jpg',
                   'images/Amin/Amin3.jpg',
                   'images/Amin/Amin4.jpg',
                   'images/Amin/Amin5.jpg',
                   'images/Amin/Amin6.jpg',
                   'images/Amin/Amin7.jpg'];
    
    var i;
    
    // Show the initial images
    refreshImage('.left-pic');
    
    $('.right-pic').css("background-image", "url(images/MrFrog.jpg)");

    function refreshImage(which){
        i = getRandomInt(0,picList.length-1);
        $(which).css("background-image", "url(" + picList[i] + ")");
    }
  
    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});