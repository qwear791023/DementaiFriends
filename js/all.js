var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper2 = new Swiper(".mySwiper.mobile", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
$(document).ready(function () {
    $(".hover").mouseover(function () {
        $(this).children(".a").hide();
        $(this).children(".b").show();
    }).mouseout(function () {
        $(this).children(".b").hide();
        $(this).children(".a").show();
    });
    $(".btn-menu").click(function () {
        $(this).toggleClass("open");
        $(".nav").toggleClass("open");
    });
    $(".menu-nav__link").click(function () {
        $(".btn-menu").removeClass("open");
        $(".nav").removeClass("open");
    });
    $(".article, .footer").click(function () {
        $(".btn-menu").removeClass("open");
        $(".nav").removeClass("open");
    });
});