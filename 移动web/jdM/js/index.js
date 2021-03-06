window.onload = function () {
    // 顶部搜索
    search();
    // 轮播图
    banner();
    downTime();

};

var search = function () {
    var searchBox = document.querySelector(".jd_search_box");
    var banner = document.querySelector(".jd_banner");
    var height = banner.offsetHeight;
    window.onscroll = function () {
        var scrollTop = document.body.scrollTop;
        var opacity = 0.85;
        if (scrollTop < height) {
            opacity = scrollTop / height * 0.85;
        }
        searchBox.style.background = 'rgba(201, 21, 35, ' + opacity + ')';
    }
};

var banner = function () {
    //轮播图
    var banner = document.querySelector('.jd_banner');
    //屏幕宽度
    var width = banner.offsetWidth;
    // 图片容器
    var imageBox = banner.querySelector('ul:first-child');
    //点容器
    var pointBox = banner.querySelector('ul:last-child');
    //所有的点
    var points = pointBox.querySelectorAll('li');

    var addTransition = function () {
        imageBox.style.transition = 'all 0.2s';
        imageBox.style.webkitTransition = 'all 0.2s';
    };

    var removeTransition = function () {
        imageBox.style.transition = 'none';
        imageBox.style.webkitTransition = 'none';
    };

    var setTranslateX = function (translateX) {
        imageBox.style.transform = 'translateX(' + translateX + 'px)';
        imageBox.style.webkitTransform = 'translateX(' + translateX + 'px)';
    };
    var index = 1;
    var timer = setInterval(function () {
        index++;
        addTransition();
        setTranslateX(-index * width);
    }, 1000);

    /*需要等最后一张动画结束去判断 是否瞬间定位第一张*/
    imageBox.addEventListener('transitionend', function () {
            /*自动滚动的无缝*/
            if (index >= 9) {
                index = 1;
                /*瞬间定位*/
                /*清过渡*/
                removeTransition();
                /*做位移*/
                setTranslateX(-index * width);
            }
            /*滑动的时候也需要无缝*/
            else if (index <= 0) {
                index = 8;
                /*瞬间定位*/
                /*清过渡*/
                removeTransition();
                /*做位移*/
                setTranslateX(-index * width);
            }
            setPoint(index);
        }
    );

    var setPoint = function (index) {
        for (var i = 0; i < points.length; i++) {
            points[i].classList.remove('now');
        }
        points[index - 1].classList.add('now');
    };

    var startX = 0;
    var distanceX = 0;
    var isMove = false;
    imageBox.addEventListener('touchstart', function (e) {
        /*清除定时器*/
        clearInterval(timer);
        startX = e.touches[0].clientX;
    });
    imageBox.addEventListener('touchmove', function (e) {
        var moveX = e.touches[0].clientX;
        distanceX = moveX - startX;
        var translateX = -index * width + distanceX;
        setTranslateX(translateX);
        isMove = true;

    });
    imageBox.addEventListener('touchend', function (e) {
        if (isMove) {
            if (Math.abs(distanceX) < width / 3) {
                addTransition();
                setTranslateX(-index * width);
            } else {
                if (distanceX > 0) {
                    index--;
                } else {
                    index++;
                }
                addTransition();
                setTranslateX(-index * width);
            }
        }
        startX = 0;
        distanceX = 0;
        isMove = false;
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            /*加过渡*/
            addTransition();
            /*做位移*/
            setTranslateX(-index * width);
        }, 1000);
    });

};

var downTime = function () {
    var time = 2 * 60 * 60;
    var timer = setInterval(function () {
        var spans = document.querySelector('.time').querySelectorAll('span');
        time--;
        spans[0].innerHTML = Math.floor(time / 3600 / 10);
        spans[1].innerHTML = Math.floor(time / 3600) % 10;

        spans[3].innerHTML = Math.floor(time % 3600/60/10);
        spans[4].innerHTML = Math.floor(time % 3600/60) % 10;

        spans[6].innerHTML = Math.floor(time % 60 / 10);
        spans[7].innerHTML = (time % 60) % 10;

        if (time <= 0) {
            clearInterval(timer);
        }


    }, 1000);

};
