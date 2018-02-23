// 页面滚动事件
$(window).scroll(function() {
    var returnTop = $(".return-top");
    var top = $(document).scrollTop();
    if (top >= 640) {
        returnTop.show();
    } else {
        returnTop.hide();
    }

    // 子页面内部导航
    var items = $(".item");
    var menu = $("#menu");
    var currentId = ""; //滚动条现在所在位置的item id
    items.each(function() {
        var m = $(this);
        //注意：m.offset().top代表每一个item的顶部位置
        if (top > m.offset().top - 300) {
            currentId = "#" + m.attr("id");
        } else {
            return false;
        }
    });
    var currentLink = menu.find(".current");
    if (top >= 400 && top < 1050) {
        $('.nav-link').removeClass('current');
        menu.find('.nav-link').eq(0)
            .addClass('current');
    }
    if (currentId && currentLink.attr("href") != currentId) {
        currentLink.removeClass("current");
        menu.find("[href=" + currentId + "]").addClass("current");
    }
});

//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}

//页面滚动对应位置
function scrollRight(currentId){
    if(currentId != null){
        if(currentId == 'item1'){
            $("html, body").animate({scrollTop: 0 }, {duration: 0,easing: "swing"});
        }else{
            $("html, body").animate({scrollTop: $('#'+currentId+'').offset().top}, {duration: 0 ,easing: "swing"});
        }   
    }
}

// 返回顶部
$(".return-top").click(function() {
    var speed = 300;
    $('body,html').animate({ scrollTop: 0 }, speed);
})

