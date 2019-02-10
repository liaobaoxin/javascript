window.onload = function () {
    search();
};

var search = function () {
    var searchBox = document.querySelector(".jd_search_box");
    var banner = document.querySelector(".jd_banner");
    var height = banner.offsetHeight;
    window.onscroll = function () {
        var scrollTop=document.body.scrollTop;
        var opacity=0.85;
        if(scrollTop<height){
            opacity=scrollTop/height*0.85;
        }
        searchBox.style.background='rgba(201, 21, 35, '+opacity+')';
    }

};