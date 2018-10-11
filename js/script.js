var delay = 400;

function scrollCheck() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-btn").style.display = "block";
    } else {
        document.getElementById("scroll-btn").style.display = "none";
    }
}

function scrollToStart() {
    $("html, body").animate({ scrollTop: 0 }, delay);
}

function scrollAnimate(){
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, delay);
}

function participate(){
    $('html, body').animate({ scrollTop: $("#participation").offset().top }, delay);   
}

$(function (){

    $('body').scrollspy({target: ".navbar", offset: 50});
    window.onscroll = function() {scrollCheck()};
    $('.nav-item').click(scrollAnimate);
    $('#participate-btn').click(participate);
    $('#scroll-btn').click(scrollToStart);
    $('.navbar-brand').click(scrollToStart);
});