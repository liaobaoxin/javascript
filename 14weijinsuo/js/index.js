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
    /*�����㹻 50px һ��Ҫ������*/
    if (isMove && Math.abs(distanceX) > 50) {
        /*����*/
        /*������*/
        if (distanceX < 0) {
            //console.log('next');
            $('.carousel').carousel('next');
        }
        /*�һ�����*/
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
    /*1.�����������*/
    var $navTabs = $('.wjs_product .nav-tabs');
    var width = 0;
    $navTabs.find('li').each(function (i, item) {
        var $currLi = $(this);//$(item);
        /*
        * width()  ����
        * innerWidth() ����+�ڱ߾�
        * outerWidth() ����+�ڱ߾�+�߿�
        * outerWidth(true) ����+�ڱ߾�+�߿�+��߾�
        * */
        var liWidth = $currLi.outerWidth(true);
        width += liWidth;
    });
    $navTabs.width(width);

    /*2.�޸Ľṹʹ֮���򻬶��Ľṹ*/
    //��һ���������� .nav-tabs ��  .nav-tabs-parent

    /*3.�Լ�ʵ�ֻ���Ч�� ���� ʹ��iscroll */
    new IScroll($('.nav-tabs-parent')[0],{
        scrollX:true,
        scrollY:false,
        click:true,
        vScrollbar: false
    });
};