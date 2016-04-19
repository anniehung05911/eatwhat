$(function(){
    
    var imagePath = "images/food/";
    var picList = [imagePath+'food1.jpg',
                   imagePath+'food2.jpg',
                   imagePath+'food3.jpg',
                   imagePath+'food4.jpg',
                   imagePath+'food5.jpg',
                   imagePath+'food6.jpg'];
    var nameList = ["佐賀丼飯",
                    "I'm Pasta",
                    "元富小吃",
                    "Hi Burger 美式漢堡餐廳",
                    "光華紅豆餅",
                    "咖食堂"];
    
    var i = getRandomInt(0,picList.length-1);
    var j = getRandomInt(0,picList.length-1);
    
    // Show the initial images
    refreshLeft();
    refreshRight();
    
    // Click the refresh circle to change both the images
    $('article .circle').click(function(){
        refreshLeft();
        refreshRight();
    });
    
    $('.left-pic').click(function(){
        refreshLeft();
    });
    
    $('.right-pic').click(function(){
        refreshRight();
    });
    
    function refreshLeft(){
        i = getRandomInt(0,picList.length-1);
        if(i==j){
            i = getRandomInt(0,picList.length-1);
        }else{
            $('.left-pic').css("background-image", "url(" + picList[i] + ")");
            $('.left-pic p').empty().append(nameList[i]);
        }
        
    }
    
    function refreshRight(){
        j = getRandomInt(0,picList.length-1);
        if(j==i){
            j = getRandomInt(0,picList.length-1);
        }else{
            $('.right-pic').css("background-image", "url(" + picList[j] + ")");
            $('.right-pic p').empty().append(nameList[j]);
        }
    }
  
    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});