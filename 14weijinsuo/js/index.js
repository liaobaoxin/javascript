$(function () {
    initMobileTab();
});

var getData = function (callback) {
    if (window.data) {
        callback && callback(window.data);
        return;
    }
    $.ajax({
        type: "get",
        url: 'js/data.json',
        dataType: 'json',
        dara: '',
        success: function (data) {
            window.data = data;
            callback && callback(window.data);
        }

    });
};
var render = function () {
    getData(function (data) {
            var isMobile = $(window).width() < 768;
            var pointHtml = template('pointTemplate', {list: data});
            $(".carousel-indicators").html(pointHtml);
            var imageHtml = template('imageTemplate', {list: data, isMobile: isMobile});
            $(".carousel-inner").html(imageHtml);
        }
    );

};

$(window).on('resize', function () {
    render();
}).trigger('resize');

var startX = 0;
var distanceX = 0;
var isMove = false;
$('.wjs_banner').on('touchstart', function (e) {
    startX = e.originalEvent.touches[0].clientX;
}).on('touchmove', function (e) {
    var moveX = e.originalEvent.touches[0].clientX;
    distanceX = moveX - startX;
    isMove = true;
}).on('touchend', function (e) {
    /*距离足够 50px 一定要滑动过*/
    if (isMove && Math.abs(distanceX) > 50) {
        /*手势*/
        /*左滑手势*/
        if (distanceX < 0) {
            //console.log('next');
            $('.carousel').carousel('next');
        }
        /*右滑手势*/
        else {
            //console.log('prev');
            $('.carousel').carousel('prev');
        }
    }
    startX = 0;
    distanceX = 0;
    isMove = false;
});

var initMobileTab = function () {
    /*1.解决换行问题*/
    var $navTabs = $('.wjs_product .nav-tabs');
    var width = 0;
    $navTabs.find('li').each(function (i, item) {
        var $currLi = $(this);//$(item);
        /*
        * width()  内容
        * innerWidth() 内容+内边距
        * outerWidth() 内容+内边距+边框
        * outerWidth(true) 内容+内边距+边框+外边距
        * */
        var liWidth = $currLi.outerWidth(true);
        width += liWidth;
    });
    $navTabs.width(width);

    /*2.修改结构使之区域滑动的结构*/
    //加一个父容器给 .nav-tabs 叫  .nav-tabs-parent

    /*3.自己实现滑动效果 或者 使用iscroll */
    new IScroll($('.nav-tabs-parent')[0],{
        scrollX:true,
        scrollY:false,
        click:true,
        vScrollbar: false
    });
};