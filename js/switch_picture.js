$(function(){
    
    var imagePath = "images/food/";
    var picList = [imagePath+'food1.jpg',
                   imagePath+'food2.jpg',
                   imagePath+'food3.jpg',
                   imagePath+'food4.jpg',
                   imagePath+'food5.jpg',
                   imagePath+'food6.jpg',
                   imagePath+'food7.jpg',
                   imagePath+'food8.jpg',
                   imagePath+'food9.jpg',
                   imagePath+'food10.jpg',
                   imagePath+'food11.jpg',
                   imagePath+'food12.jpg',
                   imagePath+'food13.jpg',
                   imagePath+'food14.jpg',
                   imagePath+'food15.jpg',
                   imagePath+'food16.jpg',
                   imagePath+'food17.jpg',
                   imagePath+'food18.jpg',
                   imagePath+'food19.jpg',
                   imagePath+'food20.jpg',
                   imagePath+'food21.jpg',
                   imagePath+'food22.jpg',
                   imagePath+'food23.jpg',
                   imagePath+'food24.jpg',
                   imagePath+'food25.jpg',
                   imagePath+'food26.jpg',
                   imagePath+'food27.jpg',
                   imagePath+'food28.jpg',
                   imagePath+'food29.jpg',
                   imagePath+'food30.jpg',
                   imagePath+'food31.jpg',
                   imagePath+'food32.jpg',
                   imagePath+'food33.jpg',
                   imagePath+'food34.jpg',
                   imagePath+'food35.jpg',
                   imagePath+'food36.jpg',
                   imagePath+'food37.jpg',
                   imagePath+'food38.jpg',
                   imagePath+'food39.jpg',
                   imagePath+'food40.jpg',
                   imagePath+'food41.jpg',
                   imagePath+'food42.jpg',
                   imagePath+'food43.jpg',
                   imagePath+'food44.jpg',
                   imagePath+'food45.jpg',
                   imagePath+'food46.jpg',
                   imagePath+'food47.jpg',
                   imagePath+'food48.jpg',
                   imagePath+'food49.jpg',
                   imagePath+'food50.jpg',
                   imagePath+'food51.jpg',
                   imagePath+'food52.jpg',
                   imagePath+'food53.jpg',
                   imagePath+'food54.jpg',
                   imagePath+'food55.jpg',
                   imagePath+'food56.jpg',
                   imagePath+'food57.jpg'];
         
    
    var nameList = ["佐賀丼飯",
                    "I'm Pasta",
                    "元富小吃",
                    "Hi Burger 美式漢堡餐廳",
                    "光華紅豆餅",
                    "咖食堂",
                    "Gyuho Burger &amp; Fries 牛宝",
                    "銀記手擀刀切牛肉麵",
                    "嵐迪義大利麵館",
                    "八方雲集",  //10
                    "老德記手工拉麵",
                    "楊記大餛飩",
                    "老虎醬溫州大餛飩",
                    "文慶雞",
                    "老魏四川担担麵",  //15
                    "玖伍牛肉麵",
                    "伍柒玖牛肉麵",
                    "七十二牛肉麵",
                    "人人素食麵館",
                    "垃圾麵",  //20
                    "70送飲料的阿姨小吃",
                    "公園後養狗們的小吃",
                    "吉丼",
                    "鴨麵館",
                    "麵線&臭豆腐",  //25
                    "Subway",
                    "麥噹噹",
                    "摩斯漢堡",
                    "小林麵食館",
                    "光華鐵板燒",  //30
                    "鍋加鍋",
                    "百八漁場",
                    "豆腐村",
                    "阿里巴巴手工甩餅專賣店",
                    "五鄉地窯烤披薩",  //35
                    "吃便利商店吧你",
                    "省錢吃學餐唷",
                    "甘泉魚麵",
                    "鬍鬚張魯肉飯",
                    "天下一製麵",  //40
                    "麵太郎拉麵",
                    "住吉關東煮",
                    "江蘇韭菜盒子",
                    "漢堡王",
                    "肯德基 KFC",  //45
                    "三商巧福",
                    "定食8",
                    "四海遊龍鍋貼專賣店",
                    "米塔義式廚房",
                    "高家涼麵",  //50
                    "饌味香",
                    "快樂小吃",
                    "老地方牛肉麵",
                    "合味拉麵",
                    "王記非常麵",  //55
                    "五味臭臭鍋",
                    "博多拉麵"];
    
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