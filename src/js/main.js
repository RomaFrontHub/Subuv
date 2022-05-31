wow = new WOW({
    animateClass: 'wow',
    offset: 0,
});
wow.init();

$(function() {
    $('.menu-wrapper').on('click', function() {
        $('.hamburger-menu').toggleClass('animate');
        $('.adaptive').slideToggle();
    });
    $('.adaptive').css('top', $('.header').height());
    $('.guide-button-one').click(function() {
        $('.guide-button-one').addClass('active');
        $('.guide-button-two').removeClass('active');
        $('.guide-button-three').removeClass('active');
    });
    $('.guide-button-two').click(function() {
        $('.guide-button-two').addClass('active');
        $('.guide-button-one').removeClass('active');
        $('.guide-button-three').removeClass('active');
    });
    $('.guide-button-three').click(function() {
        $('.guide-button-three').addClass('active');
        $('.guide-button-one').removeClass('active');
        $('.guide-button-two').removeClass('active');
    });

    $('.specif-button-one').click(function() {
        $('.specif-button-one').addClass('active');
        $('.specif-button-two').removeClass('active');
        $('.specif-button-three').removeClass('active');
    });
    $('.specif-button-two').click(function() {
        $('.specif-button-two').addClass('active');
        $('.specif-button-one').removeClass('active');
        $('.specif-button-three').removeClass('active');
    });
    $('.specif-button-three').click(function() {
        $('.specif-button-three').addClass('active');
        $('.specif-button-one').removeClass('active');
        $('.specif-button-two').removeClass('active');
    });

    $('.open-acc-one').click(function() {
        $('.panel-one').slideToggle(300);
    });
    $('.open-acc-two').click(function() {
        $('.panel-two').slideToggle(300);
    });
    $('.open-acc-three').click(function() {
        $('.panel-three').slideToggle(300);
    });
    $('.open-acc-four').click(function() {
        $('.panel-four').slideToggle(300);
    });

});