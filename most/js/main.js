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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIndvdyA9IG5ldyBXT1coe1xyXG4gICAgYW5pbWF0ZUNsYXNzOiAnd293JyxcclxuICAgIG9mZnNldDogMCxcclxufSk7XHJcbndvdy5pbml0KCk7XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLm1lbnUtd3JhcHBlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5oYW1idXJnZXItbWVudScpLnRvZ2dsZUNsYXNzKCdhbmltYXRlJyk7XHJcbiAgICAgICAgJCgnLmFkYXB0aXZlJykuc2xpZGVUb2dnbGUoKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLmFkYXB0aXZlJykuY3NzKCd0b3AnLCAkKCcuaGVhZGVyJykuaGVpZ2h0KCkpO1xyXG4gICAgJCgnLmd1aWRlLWJ1dHRvbi1vbmUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuZ3VpZGUtYnV0dG9uLW9uZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcuZ3VpZGUtYnV0dG9uLXR3bycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcuZ3VpZGUtYnV0dG9uLXRocmVlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcuZ3VpZGUtYnV0dG9uLXR3bycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5ndWlkZS1idXR0b24tdHdvJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5ndWlkZS1idXR0b24tb25lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5ndWlkZS1idXR0b24tdGhyZWUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgICQoJy5ndWlkZS1idXR0b24tdGhyZWUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuZ3VpZGUtYnV0dG9uLXRocmVlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5ndWlkZS1idXR0b24tb25lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5ndWlkZS1idXR0b24tdHdvJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNwZWNpZi1idXR0b24tb25lJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLnNwZWNpZi1idXR0b24tb25lJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zcGVjaWYtYnV0dG9uLXR3bycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcuc3BlY2lmLWJ1dHRvbi10aHJlZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLnNwZWNpZi1idXR0b24tdHdvJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLnNwZWNpZi1idXR0b24tdHdvJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zcGVjaWYtYnV0dG9uLW9uZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcuc3BlY2lmLWJ1dHRvbi10aHJlZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLnNwZWNpZi1idXR0b24tdGhyZWUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuc3BlY2lmLWJ1dHRvbi10aHJlZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcuc3BlY2lmLWJ1dHRvbi1vbmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNwZWNpZi1idXR0b24tdHdvJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLm9wZW4tYWNjLW9uZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5wYW5lbC1vbmUnKS5zbGlkZVRvZ2dsZSgzMDApO1xyXG4gICAgfSk7XHJcbiAgICAkKCcub3Blbi1hY2MtdHdvJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLnBhbmVsLXR3bycpLnNsaWRlVG9nZ2xlKDMwMCk7XHJcbiAgICB9KTtcclxuICAgICQoJy5vcGVuLWFjYy10aHJlZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5wYW5lbC10aHJlZScpLnNsaWRlVG9nZ2xlKDMwMCk7XHJcbiAgICB9KTtcclxuICAgICQoJy5vcGVuLWFjYy1mb3VyJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLnBhbmVsLWZvdXInKS5zbGlkZVRvZ2dsZSgzMDApO1xyXG4gICAgfSk7XHJcblxyXG59KTsiXSwiZmlsZSI6Im1haW4uanMifQ==