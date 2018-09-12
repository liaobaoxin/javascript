$(function () {
    $(".container").fullpage({
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        afterLoad: function (link, index) {
            $(".section").eq(index - 1).addClass("now");
        },
        afterRender: function () {
            $(".more").click("on", function () {
                $.fn.fullpage.moveSectionDown();
            });
            $(".section.screen04  .sofa").on('transitionend',function () {
                console.log("11");
            });

        },
        onLeave: function (index, nextInt, direction) {
            if (index == 2 && nextInt == 3) {
                $(".section").eq(index - 1).addClass("leave");
                console.log(index);
            }else if(index == 3 && nextInt == 4){
                $(".section").eq(index - 1).addClass("leave");
            }
        },


        scrollingSpeed:1000

    })
});