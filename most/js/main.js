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
    $(".counter").counterUp({ time: 1500 });
});

let tl = gsap.timeline();
let promoTitle = document.querySelector('.promo-all__title');
let promoSubtitle = document.querySelector('.promo-all__button');
let promoImg = document.querySelectorAll('.promo-all img');
let aboutLeft = document.querySelector('.about-all__left');
let aboutRight = document.querySelector('.about-all__right');
let productsTitle = document.querySelector('.products-all__title');
let productsItem = document.querySelectorAll('.products-all__main .main-item');
let historyTitle = document.querySelector('.history-all__title');
let mainLinks = document.querySelector('.main-links');
let mainAbout = document.querySelector('.main-about');
let partnersItem = document.querySelectorAll('.partners-list .partners-list__item');
let basketTitle = document.querySelector('.basket-all__title');
let mainList = document.querySelectorAll('.basket-all__main .main-list');
let mainSumm = document.querySelectorAll('.basket-all__main .main-summ');
let faqTitle = document.querySelector('.faq-all__title');
let mainAccordion = document.querySelectorAll('.faq-all__main .main-accordion');
let mainFaqRight = document.querySelectorAll('.faq-all__main .main-right');
let locationMap = document.querySelectorAll('.location-all .location-all__map');
let locationText = document.querySelectorAll('.location-all .location-all__text');
let investmentCaption = document.querySelectorAll('.investment-all__main .main-caption');
let investmentBlock = document.querySelectorAll('.investment-all__main .main-block');
let investmentDesc = document.querySelectorAll('.investment-all__main .main-desc');
let investmentAboutImg = document.querySelectorAll('.investment-all__main .main-about .main-about__img img');
let investmentAboutDesc = document.querySelectorAll('.investment-all__main .main-about .main-about__desc');
let newsBlog = document.querySelectorAll('.news-wrapper .news-wrapper__blog');
let investmentTitle = document.querySelector('.investment-all__title');
let investmentHeading = document.querySelectorAll('.investment-all__main .main-heading');
let newsTitle = document.querySelector('.news-all__title');
let newsWrapper = document.querySelectorAll('.news-all__main .main-wrapper');
let newsWrapperBlog = document.querySelectorAll('.news-all__main .main-wrapper .main-wrapper__blog');
let guideTitle = document.querySelector('#captions-one');
let guideText = document.querySelectorAll('#text-one');
let guideImg = document.querySelectorAll('#img-one');
let guideTitleTwo = document.querySelector('#captions-two');
let guideTextTwo = document.querySelectorAll('#text-two');
let guideImgTwo = document.querySelectorAll('#img-two');
let guideTitleThree = document.querySelector('#captions-three');
let guideTextThree = document.querySelectorAll('#text-three');
let guideImgThree = document.querySelectorAll('#img-three');
let extractsOne = document.querySelectorAll('#extracts-main-one .main-item');
let extractsTwo = document.querySelectorAll('#extracts-main-two .main-item');
let extractsThree = document.querySelectorAll('#extracts-main-three .main-item');
let vanillaTitle = document.querySelector('.vanilla-all__title');
let vanillaItem = document.querySelectorAll('.vanilla-all__main .main-item');
let guideTitleFour = document.querySelectorAll('#captions-four');
let guideTextFour = document.querySelectorAll('#text-four span');
let guideImgFour = document.querySelectorAll('#img-four');
let descItem = document.querySelectorAll('.desc-all .desc-all__item');
let extractsTitle = document.querySelector('#title-one');
let extractsItem = document.querySelectorAll('#main-one .main-item');
let extractsTitleTwo = document.querySelector('#title-two');
let extractsItemTwo = document.querySelectorAll('#main-two .main-item');
let productImg = document.querySelectorAll('.product-all__images');
let productInfo = document.querySelectorAll('.product-all__info #productItem');
let specifText = document.querySelectorAll('#specif-text');
let specifCaptions = document.querySelectorAll('#specif-captions');

tl.from('.header', { translateY: -70, duration: 1, opacity: 0.5 });
tl.from(promoTitle, { duration: 0.5, translateY: 50, opacity: 0 });
tl.from(promoSubtitle, { duration: 0.5, translateY: 50, opacity: 0 });
tl.from(promoImg, { x: 400, opacity: 0, duration: 0.5 });
gsap.timeline({ scrollTrigger: { trigger: ".about" } })
    .from(aboutLeft, { x: -600, opacity: 0, duration: 0.5 }, 0)
    .from(aboutRight, { x: 600, opacity: 0, duration: 0.5 }, 0)
gsap.timeline({ scrollTrigger: { trigger: ".products" } })
    .from(productsTitle, { translateX: -300, opacity: 0, duration: 0.5 }, 0)
gsap.timeline({ scrollTrigger: { trigger: ".products-all__main" } })
    .from(productsItem, { translateX: -300, translateY: -200, opacity: 0, duration: 0.5, stagger: 0.2 }, 0)
tl.from(historyTitle, { duration: 0.5, translateY: -70, opacity: 0 }, 1);
tl.from(mainLinks, { duration: 0.5, translateX: -400, opacity: 0 }, 1.5);
tl.from(mainAbout, { duration: 0.5, translateX: 400, opacity: 0 }, 1.5);
gsap.timeline({ scrollTrigger: { trigger: ".partners" } })
    .from(partnersItem, { translateX: -200, translateY: -100, opacity: 0, duration: 0.5, stagger: 0.2 }, 0)
tl.from(basketTitle, { duration: 0.5, translateY: -70, opacity: 0 }, 1);
tl.from(mainList, { duration: 0.5, translateX: -400, opacity: 0 }, 1.5);
tl.from(mainSumm, { duration: 0.5, translateX: 400, opacity: 0 }, 1.5);
tl.from(faqTitle, { duration: 0.5, translateY: -70, opacity: 0 }, 1);
tl.from(mainAccordion, { duration: 0.5, translateX: -400, opacity: 0 }, 1.5);
tl.from(mainFaqRight, { duration: 0.5, translateX: 400, opacity: 0 }, 1.5);
tl.from(locationMap, { duration: 0.5, translateX: -400, opacity: 0 }, 1);
tl.from(locationText, { duration: 0.5, translateX: 400, opacity: 0 }, 1);
tl.from(investmentCaption, { duration: 0.5, translateX: -400, opacity: 0 }, 1);
gsap.timeline({ scrollTrigger: { trigger: investmentBlock } })
    .from(investmentBlock, { duration: 0.5, translateX: 400, opacity: 0 }, 0)
gsap.timeline({ scrollTrigger: { trigger: investmentDesc } })
    .from(investmentDesc, { duration: 0.5, translateX: 400, opacity: 0 }, 0)
gsap.timeline({ scrollTrigger: { trigger: ".main-about" } })
    .from(investmentAboutImg, { duration: 0.5, translateX: -400, opacity: 0 }, 0)
    .from(investmentAboutDesc, { duration: 0.5, translateX: 400, opacity: 0 }, 0)
gsap.timeline({ scrollTrigger: { trigger: ".main-news" } })
    .from(newsBlog, { translateX: -200, translateY: -100, opacity: 0, duration: 0.5, stagger: 0.2 }, 0)
tl.from(investmentTitle, { duration: 0.5, translateY: -70, opacity: 0 }, 1);
gsap.timeline({ scrollTrigger: { trigger: investmentHeading } })
    .from(investmentHeading, { duration: 0.5, translateX: -400, opacity: 0 }, 0);
tl.from(newsTitle, { duration: 0.5, translateY: -70, opacity: 0 }, 1);
gsap.timeline({ scrollTrigger: { trigger: newsWrapper } })
    .from(newsWrapperBlog, { translateX: -300, translateY: -200, opacity: 0, duration: 0.5, stagger: 0.2 }, 1.5)
gsap.timeline({ scrollTrigger: { trigger: "#guide-one" } })
    .from(guideTitle, { translateX: -400, duration: 0.5, opacity: 0 }, 1)
    .from(guideText, { translateX: -200, opacity: 0, duration: 0.5, stagger: 0.2 }, 1.5)
    .from(guideImg, { translateX: 400, opacity: 0, duration: 0.5 }, 2)
gsap.timeline({ scrollTrigger: { trigger: "#guide-all-two" } })
    .from(guideTitleTwo, { translateX: -400, duration: 0.5, opacity: 0 }, 0)
    .from(guideTextTwo, { translateX: -200, opacity: 0, duration: 0.5, stagger: 0.2 }, 0.5)
    .from(guideImgTwo, { translateX: 400, opacity: 0, duration: 0.5 }, 1)
gsap.timeline({ scrollTrigger: { trigger: "#guide-all-three" } })
    .from(guideTitleThree, { translateX: -400, duration: 0.5, opacity: 0 }, 0)
    .from(guideTextThree, { translateX: -200, opacity: 0, duration: 0.5, stagger: 0.2 }, 0.5)
    .from(guideImgThree, { translateX: 400, opacity: 0, duration: 0.5 }, 1)
gsap.timeline({ scrollTrigger: { trigger: "#extracts-main-one" } })
    .from(extractsOne, { translateX: -200, translateY: -100, opacity: 0, duration: 0.5, stagger: 0.2 }, 0)
gsap.timeline({ scrollTrigger: { trigger: "#extracts-main-two" } })
    .from(extractsTwo, { translateX: -200, translateY: -100, opacity: 0, duration: 0.5, stagger: 0.2 }, 0)
gsap.timeline({ scrollTrigger: { trigger: "#extracts-main-three" } })
    .from(extractsThree, { translateX: -200, translateY: -100, opacity: 0, duration: 0.5, stagger: 0.2 }, 0)
tl.from(vanillaTitle, { duration: 0.5, translateY: -70, opacity: 0 }, 1);
tl.from(vanillaItem, { translateX: -200, opacity: 0, duration: 0.5, stagger: 0.2 }, 1.5)
gsap.timeline({ scrollTrigger: { trigger: "#guide-all-four" } })
    .from(guideTitleFour, { translateX: -400, duration: 0.5, opacity: 0, stagger: 0.2 }, 0)
    .from(guideTextFour, { translateX: -200, opacity: 0, duration: 0.5, stagger: 0.2 }, 0.5)
    .from(guideImgFour, { translateX: 400, opacity: 0, duration: 0.5 }, 1)
gsap.timeline({ scrollTrigger: { trigger: ".desc" } })
    .from(descItem, { translateX: -400, duration: 0.8, opacity: 0, stagger: 0.2 }, 0)
tl.from(extractsTitle, { duration: 0.5, translateY: -70, opacity: 0 }, 1);
tl.from(extractsItem, { translateX: -200, opacity: 0, duration: 0.5, stagger: 0.2 }, 1.5)
gsap.timeline({ scrollTrigger: { trigger: "#ext-all-one" } })
    .from(extractsTitleTwo, { translateX: -400, duration: 0.5, opacity: 0 }, 0)
gsap.timeline({ scrollTrigger: { trigger: "#main-two" } })
    .from(extractsItemTwo, { translateX: -400, duration: 0.8, opacity: 0, stagger: 0.2 }, 0)
tl.from(productImg, { duration: 0.5, translateX: -400, opacity: 0 }, 1);
tl.from(productInfo, { translateX: 200, opacity: 0, duration: 0.5, stagger: 0.2 }, 1);
gsap.timeline({ scrollTrigger: { trigger: ".specif-all__text" } })
    .from(specifText, { duration: 0.5, translateX: 400, opacity: 0 }, 0)
    .from(specifCaptions, { duration: 0.5, translateX: -400, opacity: 0 }, 0)
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIndvdyA9IG5ldyBXT1coe1xyXG4gICAgYW5pbWF0ZUNsYXNzOiAnd293JyxcclxuICAgIG9mZnNldDogMCxcclxufSk7XHJcbndvdy5pbml0KCk7XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLm1lbnUtd3JhcHBlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5oYW1idXJnZXItbWVudScpLnRvZ2dsZUNsYXNzKCdhbmltYXRlJyk7XHJcbiAgICAgICAgJCgnLmFkYXB0aXZlJykuc2xpZGVUb2dnbGUoKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLmFkYXB0aXZlJykuY3NzKCd0b3AnLCAkKCcuaGVhZGVyJykuaGVpZ2h0KCkpO1xyXG4gICAgJCgnLmd1aWRlLWJ1dHRvbi1vbmUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuZ3VpZGUtYnV0dG9uLW9uZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcuZ3VpZGUtYnV0dG9uLXR3bycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcuZ3VpZGUtYnV0dG9uLXRocmVlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcuZ3VpZGUtYnV0dG9uLXR3bycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5ndWlkZS1idXR0b24tdHdvJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5ndWlkZS1idXR0b24tb25lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5ndWlkZS1idXR0b24tdGhyZWUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgICQoJy5ndWlkZS1idXR0b24tdGhyZWUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuZ3VpZGUtYnV0dG9uLXRocmVlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5ndWlkZS1idXR0b24tb25lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5ndWlkZS1idXR0b24tdHdvJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNwZWNpZi1idXR0b24tb25lJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLnNwZWNpZi1idXR0b24tb25lJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zcGVjaWYtYnV0dG9uLXR3bycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcuc3BlY2lmLWJ1dHRvbi10aHJlZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLnNwZWNpZi1idXR0b24tdHdvJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLnNwZWNpZi1idXR0b24tdHdvJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy5zcGVjaWYtYnV0dG9uLW9uZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcuc3BlY2lmLWJ1dHRvbi10aHJlZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLnNwZWNpZi1idXR0b24tdGhyZWUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuc3BlY2lmLWJ1dHRvbi10aHJlZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcuc3BlY2lmLWJ1dHRvbi1vbmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnLnNwZWNpZi1idXR0b24tdHdvJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLm9wZW4tYWNjLW9uZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5wYW5lbC1vbmUnKS5zbGlkZVRvZ2dsZSgzMDApO1xyXG4gICAgfSk7XHJcbiAgICAkKCcub3Blbi1hY2MtdHdvJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLnBhbmVsLXR3bycpLnNsaWRlVG9nZ2xlKDMwMCk7XHJcbiAgICB9KTtcclxuICAgICQoJy5vcGVuLWFjYy10aHJlZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5wYW5lbC10aHJlZScpLnNsaWRlVG9nZ2xlKDMwMCk7XHJcbiAgICB9KTtcclxuICAgICQoJy5vcGVuLWFjYy1mb3VyJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLnBhbmVsLWZvdXInKS5zbGlkZVRvZ2dsZSgzMDApO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiLmNvdW50ZXJcIikuY291bnRlclVwKHsgdGltZTogMTUwMCB9KTtcclxufSk7XHJcblxyXG5sZXQgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XHJcbmxldCBwcm9tb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb21vLWFsbF9fdGl0bGUnKTtcclxubGV0IHByb21vU3VidGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvbW8tYWxsX19idXR0b24nKTtcclxubGV0IHByb21vSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb21vLWFsbCBpbWcnKTtcclxubGV0IGFib3V0TGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dC1hbGxfX2xlZnQnKTtcclxubGV0IGFib3V0UmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQtYWxsX19yaWdodCcpO1xyXG5sZXQgcHJvZHVjdHNUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0cy1hbGxfX3RpdGxlJyk7XHJcbmxldCBwcm9kdWN0c0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdHMtYWxsX19tYWluIC5tYWluLWl0ZW0nKTtcclxubGV0IGhpc3RvcnlUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaXN0b3J5LWFsbF9fdGl0bGUnKTtcclxubGV0IG1haW5MaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWxpbmtzJyk7XHJcbmxldCBtYWluQWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1hYm91dCcpO1xyXG5sZXQgcGFydG5lcnNJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnRuZXJzLWxpc3QgLnBhcnRuZXJzLWxpc3RfX2l0ZW0nKTtcclxubGV0IGJhc2tldFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2tldC1hbGxfX3RpdGxlJyk7XHJcbmxldCBtYWluTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYXNrZXQtYWxsX19tYWluIC5tYWluLWxpc3QnKTtcclxubGV0IG1haW5TdW1tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhc2tldC1hbGxfX21haW4gLm1haW4tc3VtbScpO1xyXG5sZXQgZmFxVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFxLWFsbF9fdGl0bGUnKTtcclxubGV0IG1haW5BY2NvcmRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFxLWFsbF9fbWFpbiAubWFpbi1hY2NvcmRpb24nKTtcclxubGV0IG1haW5GYXFSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXEtYWxsX19tYWluIC5tYWluLXJpZ2h0Jyk7XHJcbmxldCBsb2NhdGlvbk1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sb2NhdGlvbi1hbGwgLmxvY2F0aW9uLWFsbF9fbWFwJyk7XHJcbmxldCBsb2NhdGlvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubG9jYXRpb24tYWxsIC5sb2NhdGlvbi1hbGxfX3RleHQnKTtcclxubGV0IGludmVzdG1lbnRDYXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmludmVzdG1lbnQtYWxsX19tYWluIC5tYWluLWNhcHRpb24nKTtcclxubGV0IGludmVzdG1lbnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnZlc3RtZW50LWFsbF9fbWFpbiAubWFpbi1ibG9jaycpO1xyXG5sZXQgaW52ZXN0bWVudERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW52ZXN0bWVudC1hbGxfX21haW4gLm1haW4tZGVzYycpO1xyXG5sZXQgaW52ZXN0bWVudEFib3V0SW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmludmVzdG1lbnQtYWxsX19tYWluIC5tYWluLWFib3V0IC5tYWluLWFib3V0X19pbWcgaW1nJyk7XHJcbmxldCBpbnZlc3RtZW50QWJvdXREZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmludmVzdG1lbnQtYWxsX19tYWluIC5tYWluLWFib3V0IC5tYWluLWFib3V0X19kZXNjJyk7XHJcbmxldCBuZXdzQmxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXdzLXdyYXBwZXIgLm5ld3Mtd3JhcHBlcl9fYmxvZycpO1xyXG5sZXQgaW52ZXN0bWVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludmVzdG1lbnQtYWxsX190aXRsZScpO1xyXG5sZXQgaW52ZXN0bWVudEhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW52ZXN0bWVudC1hbGxfX21haW4gLm1haW4taGVhZGluZycpO1xyXG5sZXQgbmV3c1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3MtYWxsX190aXRsZScpO1xyXG5sZXQgbmV3c1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3cy1hbGxfX21haW4gLm1haW4td3JhcHBlcicpO1xyXG5sZXQgbmV3c1dyYXBwZXJCbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5ld3MtYWxsX19tYWluIC5tYWluLXdyYXBwZXIgLm1haW4td3JhcHBlcl9fYmxvZycpO1xyXG5sZXQgZ3VpZGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXB0aW9ucy1vbmUnKTtcclxubGV0IGd1aWRlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0ZXh0LW9uZScpO1xyXG5sZXQgZ3VpZGVJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjaW1nLW9uZScpO1xyXG5sZXQgZ3VpZGVUaXRsZVR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXB0aW9ucy10d28nKTtcclxubGV0IGd1aWRlVGV4dFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0ZXh0LXR3bycpO1xyXG5sZXQgZ3VpZGVJbWdUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjaW1nLXR3bycpO1xyXG5sZXQgZ3VpZGVUaXRsZVRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcHRpb25zLXRocmVlJyk7XHJcbmxldCBndWlkZVRleHRUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0ZXh0LXRocmVlJyk7XHJcbmxldCBndWlkZUltZ1RocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2ltZy10aHJlZScpO1xyXG5sZXQgZXh0cmFjdHNPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZXh0cmFjdHMtbWFpbi1vbmUgLm1haW4taXRlbScpO1xyXG5sZXQgZXh0cmFjdHNUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZXh0cmFjdHMtbWFpbi10d28gLm1haW4taXRlbScpO1xyXG5sZXQgZXh0cmFjdHNUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNleHRyYWN0cy1tYWluLXRocmVlIC5tYWluLWl0ZW0nKTtcclxubGV0IHZhbmlsbGFUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52YW5pbGxhLWFsbF9fdGl0bGUnKTtcclxubGV0IHZhbmlsbGFJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZhbmlsbGEtYWxsX19tYWluIC5tYWluLWl0ZW0nKTtcclxubGV0IGd1aWRlVGl0bGVGb3VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NhcHRpb25zLWZvdXInKTtcclxubGV0IGd1aWRlVGV4dEZvdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdGV4dC1mb3VyIHNwYW4nKTtcclxubGV0IGd1aWRlSW1nRm91ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNpbWctZm91cicpO1xyXG5sZXQgZGVzY0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVzYy1hbGwgLmRlc2MtYWxsX19pdGVtJyk7XHJcbmxldCBleHRyYWN0c1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLW9uZScpO1xyXG5sZXQgZXh0cmFjdHNJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21haW4tb25lIC5tYWluLWl0ZW0nKTtcclxubGV0IGV4dHJhY3RzVGl0bGVUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtdHdvJyk7XHJcbmxldCBleHRyYWN0c0l0ZW1Ud28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWFpbi10d28gLm1haW4taXRlbScpO1xyXG5sZXQgcHJvZHVjdEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWFsbF9faW1hZ2VzJyk7XHJcbmxldCBwcm9kdWN0SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWFsbF9faW5mbyAjcHJvZHVjdEl0ZW0nKTtcclxubGV0IHNwZWNpZlRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc3BlY2lmLXRleHQnKTtcclxubGV0IHNwZWNpZkNhcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NwZWNpZi1jYXB0aW9ucycpO1xyXG5cclxudGwuZnJvbSgnLmhlYWRlcicsIHsgdHJhbnNsYXRlWTogLTcwLCBkdXJhdGlvbjogMSwgb3BhY2l0eTogMC41IH0pO1xyXG50bC5mcm9tKHByb21vVGl0bGUsIHsgZHVyYXRpb246IDAuNSwgdHJhbnNsYXRlWTogNTAsIG9wYWNpdHk6IDAgfSk7XHJcbnRsLmZyb20ocHJvbW9TdWJ0aXRsZSwgeyBkdXJhdGlvbjogMC41LCB0cmFuc2xhdGVZOiA1MCwgb3BhY2l0eTogMCB9KTtcclxudGwuZnJvbShwcm9tb0ltZywgeyB4OiA0MDAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSk7XHJcbmdzYXAudGltZWxpbmUoeyBzY3JvbGxUcmlnZ2VyOiB7IHRyaWdnZXI6IFwiLmFib3V0XCIgfSB9KVxyXG4gICAgLmZyb20oYWJvdXRMZWZ0LCB7IHg6IC02MDAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgMClcclxuICAgIC5mcm9tKGFib3V0UmlnaHQsIHsgeDogNjAwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIDApXHJcbmdzYXAudGltZWxpbmUoeyBzY3JvbGxUcmlnZ2VyOiB7IHRyaWdnZXI6IFwiLnByb2R1Y3RzXCIgfSB9KVxyXG4gICAgLmZyb20ocHJvZHVjdHNUaXRsZSwgeyB0cmFuc2xhdGVYOiAtMzAwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIDApXHJcbmdzYXAudGltZWxpbmUoeyBzY3JvbGxUcmlnZ2VyOiB7IHRyaWdnZXI6IFwiLnByb2R1Y3RzLWFsbF9fbWFpblwiIH0gfSlcclxuICAgIC5mcm9tKHByb2R1Y3RzSXRlbSwgeyB0cmFuc2xhdGVYOiAtMzAwLCB0cmFuc2xhdGVZOiAtMjAwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41LCBzdGFnZ2VyOiAwLjIgfSwgMClcclxudGwuZnJvbShoaXN0b3J5VGl0bGUsIHsgZHVyYXRpb246IDAuNSwgdHJhbnNsYXRlWTogLTcwLCBvcGFjaXR5OiAwIH0sIDEpO1xyXG50bC5mcm9tKG1haW5MaW5rcywgeyBkdXJhdGlvbjogMC41LCB0cmFuc2xhdGVYOiAtNDAwLCBvcGFjaXR5OiAwIH0sIDEuNSk7XHJcbnRsLmZyb20obWFpbkFib3V0LCB7IGR1cmF0aW9uOiAwLjUsIHRyYW5zbGF0ZVg6IDQwMCwgb3BhY2l0eTogMCB9LCAxLjUpO1xyXG5nc2FwLnRpbWVsaW5lKHsgc2Nyb2xsVHJpZ2dlcjogeyB0cmlnZ2VyOiBcIi5wYXJ0bmVyc1wiIH0gfSlcclxuICAgIC5mcm9tKHBhcnRuZXJzSXRlbSwgeyB0cmFuc2xhdGVYOiAtMjAwLCB0cmFuc2xhdGVZOiAtMTAwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41LCBzdGFnZ2VyOiAwLjIgfSwgMClcclxudGwuZnJvbShiYXNrZXRUaXRsZSwgeyBkdXJhdGlvbjogMC41LCB0cmFuc2xhdGVZOiAtNzAsIG9wYWNpdHk6IDAgfSwgMSk7XHJcbnRsLmZyb20obWFpbkxpc3QsIHsgZHVyYXRpb246IDAuNSwgdHJhbnNsYXRlWDogLTQwMCwgb3BhY2l0eTogMCB9LCAxLjUpO1xyXG50bC5mcm9tKG1haW5TdW1tLCB7IGR1cmF0aW9uOiAwLjUsIHRyYW5zbGF0ZVg6IDQwMCwgb3BhY2l0eTogMCB9LCAxLjUpO1xyXG50bC5mcm9tKGZhcVRpdGxlLCB7IGR1cmF0aW9uOiAwLjUsIHRyYW5zbGF0ZVk6IC03MCwgb3BhY2l0eTogMCB9LCAxKTtcclxudGwuZnJvbShtYWluQWNjb3JkaW9uLCB7IGR1cmF0aW9uOiAwLjUsIHRyYW5zbGF0ZVg6IC00MDAsIG9wYWNpdHk6IDAgfSwgMS41KTtcclxudGwuZnJvbShtYWluRmFxUmlnaHQsIHsgZHVyYXRpb246IDAuNSwgdHJhbnNsYXRlWDogNDAwLCBvcGFjaXR5OiAwIH0sIDEuNSk7XHJcbnRsLmZyb20obG9jYXRpb25NYXAsIHsgZHVyYXRpb246IDAuNSwgdHJhbnNsYXRlWDogLTQwMCwgb3BhY2l0eTogMCB9LCAxKTtcclxudGwuZnJvbShsb2NhdGlvblRleHQsIHsgZHVyYXRpb246IDAuNSwgdHJhbnNsYXRlWDogNDAwLCBvcGFjaXR5OiAwIH0sIDEpO1xyXG50bC5mcm9tKGludmVzdG1lbnRDYXB0aW9uLCB7IGR1cmF0aW9uOiAwLjUsIHRyYW5zbGF0ZVg6IC00MDAsIG9wYWNpdHk6IDAgfSwgMSk7XHJcbmdzYXAudGltZWxpbmUoeyBzY3JvbGxUcmlnZ2VyOiB7IHRyaWdnZXI6IGludmVzdG1lbnRCbG9jayB9IH0pXHJcbiAgICAuZnJvbShpbnZlc3RtZW50QmxvY2ssIHsgZHVyYXRpb246IDAuNSwgdHJhbnNsYXRlWDogNDAwLCBvcGFjaXR5OiAwIH0sIDApXHJcbmdzYXAudGltZWxpbmUoeyBzY3JvbGxUcmlnZ2VyOiB7IHRyaWdnZXI6IGludmVzdG1lbnREZXNjIH0gfSlcclxuICAgIC5mcm9tKGludmVzdG1lbnREZXNjLCB7IGR1cmF0aW9uOiAwLjUsIHRyYW5zbGF0ZVg6IDQwMCwgb3BhY2l0eTogMCB9LCAwKVxyXG5nc2FwLnRpbWVsaW5lKHsgc2Nyb2xsVHJpZ2dlcjogeyB0cmlnZ2VyOiBcIi5tYWluLWFib3V0XCIgfSB9KVxyXG4gICAgLmZyb20oaW52ZXN0bWVudEFib3V0SW1nLCB7IGR1cmF0aW9uOiAwLjUsIHRyYW5zbGF0ZVg6IC00MDAsIG9wYWNpdHk6IDAgfSwgMClcclxuICAgIC5mcm9tKGludmVzdG1lbnRBYm91dERlc2MsIHsgZHVyYXRpb246IDAuNSwgdHJhbnNsYXRlWDogNDAwLCBvcGFjaXR5OiAwIH0sIDApXHJcbmdzYXAudGltZWxpbmUoeyBzY3JvbGxUcmlnZ2VyOiB7IHRyaWdnZXI6IFwiLm1haW4tbmV3c1wiIH0gfSlcclxuICAgIC5mcm9tKG5ld3NCbG9nLCB7IHRyYW5zbGF0ZVg6IC0yMDAsIHRyYW5zbGF0ZVk6IC0xMDAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUsIHN0YWdnZXI6IDAuMiB9LCAwKVxyXG50bC5mcm9tKGludmVzdG1lbnRUaXRsZSwgeyBkdXJhdGlvbjogMC41LCB0cmFuc2xhdGVZOiAtNzAsIG9wYWNpdHk6IDAgfSwgMSk7XHJcbmdzYXAudGltZWxpbmUoeyBzY3JvbGxUcmlnZ2VyOiB7IHRyaWdnZXI6IGludmVzdG1lbnRIZWFkaW5nIH0gfSlcclxuICAgIC5mcm9tKGludmVzdG1lbnRIZWFkaW5nLCB7IGR1cmF0aW9uOiAwLjUsIHRyYW5zbGF0ZVg6IC00MDAsIG9wYWNpdHk6IDAgfSwgMCk7XHJcbnRsLmZyb20obmV3c1RpdGxlLCB7IGR1cmF0aW9uOiAwLjUsIHRyYW5zbGF0ZVk6IC03MCwgb3BhY2l0eTogMCB9LCAxKTtcclxuZ3NhcC50aW1lbGluZSh7IHNjcm9sbFRyaWdnZXI6IHsgdHJpZ2dlcjogbmV3c1dyYXBwZXIgfSB9KVxyXG4gICAgLmZyb20obmV3c1dyYXBwZXJCbG9nLCB7IHRyYW5zbGF0ZVg6IC0zMDAsIHRyYW5zbGF0ZVk6IC0yMDAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUsIHN0YWdnZXI6IDAuMiB9LCAxLjUpXHJcbmdzYXAudGltZWxpbmUoeyBzY3JvbGxUcmlnZ2VyOiB7IHRyaWdnZXI6IFwiI2d1aWRlLW9uZVwiIH0gfSlcclxuICAgIC5mcm9tKGd1aWRlVGl0bGUsIHsgdHJhbnNsYXRlWDogLTQwMCwgZHVyYXRpb246IDAuNSwgb3BhY2l0eTogMCB9LCAxKVxyXG4gICAgLmZyb20oZ3VpZGVUZXh0LCB7IHRyYW5zbGF0ZVg6IC0yMDAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUsIHN0YWdnZXI6IDAuMiB9LCAxLjUpXHJcbiAgICAuZnJvbShndWlkZUltZywgeyB0cmFuc2xhdGVYOiA0MDAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgMilcclxuZ3NhcC50aW1lbGluZSh7IHNjcm9sbFRyaWdnZXI6IHsgdHJpZ2dlcjogXCIjZ3VpZGUtYWxsLXR3b1wiIH0gfSlcclxuICAgIC5mcm9tKGd1aWRlVGl0bGVUd28sIHsgdHJhbnNsYXRlWDogLTQwMCwgZHVyYXRpb246IDAuNSwgb3BhY2l0eTogMCB9LCAwKVxyXG4gICAgLmZyb20oZ3VpZGVUZXh0VHdvLCB7IHRyYW5zbGF0ZVg6IC0yMDAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUsIHN0YWdnZXI6IDAuMiB9LCAwLjUpXHJcbiAgICAuZnJvbShndWlkZUltZ1R3bywgeyB0cmFuc2xhdGVYOiA0MDAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSwgMSlcclxuZ3NhcC50aW1lbGluZSh7IHNjcm9sbFRyaWdnZXI6IHsgdHJpZ2dlcjogXCIjZ3VpZGUtYWxsLXRocmVlXCIgfSB9KVxyXG4gICAgLmZyb20oZ3VpZGVUaXRsZVRocmVlLCB7IHRyYW5zbGF0ZVg6IC00MDAsIGR1cmF0aW9uOiAwLjUsIG9wYWNpdHk6IDAgfSwgMClcclxuICAgIC5mcm9tKGd1aWRlVGV4dFRocmVlLCB7IHRyYW5zbGF0ZVg6IC0yMDAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUsIHN0YWdnZXI6IDAuMiB9LCAwLjUpXHJcbiAgICAuZnJvbShndWlkZUltZ1RocmVlLCB7IHRyYW5zbGF0ZVg6IDQwMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9LCAxKVxyXG5nc2FwLnRpbWVsaW5lKHsgc2Nyb2xsVHJpZ2dlcjogeyB0cmlnZ2VyOiBcIiNleHRyYWN0cy1tYWluLW9uZVwiIH0gfSlcclxuICAgIC5mcm9tKGV4dHJhY3RzT25lLCB7IHRyYW5zbGF0ZVg6IC0yMDAsIHRyYW5zbGF0ZVk6IC0xMDAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUsIHN0YWdnZXI6IDAuMiB9LCAwKVxyXG5nc2FwLnRpbWVsaW5lKHsgc2Nyb2xsVHJpZ2dlcjogeyB0cmlnZ2VyOiBcIiNleHRyYWN0cy1tYWluLXR3b1wiIH0gfSlcclxuICAgIC5mcm9tKGV4dHJhY3RzVHdvLCB7IHRyYW5zbGF0ZVg6IC0yMDAsIHRyYW5zbGF0ZVk6IC0xMDAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUsIHN0YWdnZXI6IDAuMiB9LCAwKVxyXG5nc2FwLnRpbWVsaW5lKHsgc2Nyb2xsVHJpZ2dlcjogeyB0cmlnZ2VyOiBcIiNleHRyYWN0cy1tYWluLXRocmVlXCIgfSB9KVxyXG4gICAgLmZyb20oZXh0cmFjdHNUaHJlZSwgeyB0cmFuc2xhdGVYOiAtMjAwLCB0cmFuc2xhdGVZOiAtMTAwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41LCBzdGFnZ2VyOiAwLjIgfSwgMClcclxudGwuZnJvbSh2YW5pbGxhVGl0bGUsIHsgZHVyYXRpb246IDAuNSwgdHJhbnNsYXRlWTogLTcwLCBvcGFjaXR5OiAwIH0sIDEpO1xyXG50bC5mcm9tKHZhbmlsbGFJdGVtLCB7IHRyYW5zbGF0ZVg6IC0yMDAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUsIHN0YWdnZXI6IDAuMiB9LCAxLjUpXHJcbmdzYXAudGltZWxpbmUoeyBzY3JvbGxUcmlnZ2VyOiB7IHRyaWdnZXI6IFwiI2d1aWRlLWFsbC1mb3VyXCIgfSB9KVxyXG4gICAgLmZyb20oZ3VpZGVUaXRsZUZvdXIsIHsgdHJhbnNsYXRlWDogLTQwMCwgZHVyYXRpb246IDAuNSwgb3BhY2l0eTogMCwgc3RhZ2dlcjogMC4yIH0sIDApXHJcbiAgICAuZnJvbShndWlkZVRleHRGb3VyLCB7IHRyYW5zbGF0ZVg6IC0yMDAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUsIHN0YWdnZXI6IDAuMiB9LCAwLjUpXHJcbiAgICAuZnJvbShndWlkZUltZ0ZvdXIsIHsgdHJhbnNsYXRlWDogNDAwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0sIDEpXHJcbmdzYXAudGltZWxpbmUoeyBzY3JvbGxUcmlnZ2VyOiB7IHRyaWdnZXI6IFwiLmRlc2NcIiB9IH0pXHJcbiAgICAuZnJvbShkZXNjSXRlbSwgeyB0cmFuc2xhdGVYOiAtNDAwLCBkdXJhdGlvbjogMC44LCBvcGFjaXR5OiAwLCBzdGFnZ2VyOiAwLjIgfSwgMClcclxudGwuZnJvbShleHRyYWN0c1RpdGxlLCB7IGR1cmF0aW9uOiAwLjUsIHRyYW5zbGF0ZVk6IC03MCwgb3BhY2l0eTogMCB9LCAxKTtcclxudGwuZnJvbShleHRyYWN0c0l0ZW0sIHsgdHJhbnNsYXRlWDogLTIwMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSwgc3RhZ2dlcjogMC4yIH0sIDEuNSlcclxuZ3NhcC50aW1lbGluZSh7IHNjcm9sbFRyaWdnZXI6IHsgdHJpZ2dlcjogXCIjZXh0LWFsbC1vbmVcIiB9IH0pXHJcbiAgICAuZnJvbShleHRyYWN0c1RpdGxlVHdvLCB7IHRyYW5zbGF0ZVg6IC00MDAsIGR1cmF0aW9uOiAwLjUsIG9wYWNpdHk6IDAgfSwgMClcclxuZ3NhcC50aW1lbGluZSh7IHNjcm9sbFRyaWdnZXI6IHsgdHJpZ2dlcjogXCIjbWFpbi10d29cIiB9IH0pXHJcbiAgICAuZnJvbShleHRyYWN0c0l0ZW1Ud28sIHsgdHJhbnNsYXRlWDogLTQwMCwgZHVyYXRpb246IDAuOCwgb3BhY2l0eTogMCwgc3RhZ2dlcjogMC4yIH0sIDApXHJcbnRsLmZyb20ocHJvZHVjdEltZywgeyBkdXJhdGlvbjogMC41LCB0cmFuc2xhdGVYOiAtNDAwLCBvcGFjaXR5OiAwIH0sIDEpO1xyXG50bC5mcm9tKHByb2R1Y3RJbmZvLCB7IHRyYW5zbGF0ZVg6IDIwMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSwgc3RhZ2dlcjogMC4yIH0sIDEpO1xyXG5nc2FwLnRpbWVsaW5lKHsgc2Nyb2xsVHJpZ2dlcjogeyB0cmlnZ2VyOiBcIi5zcGVjaWYtYWxsX190ZXh0XCIgfSB9KVxyXG4gICAgLmZyb20oc3BlY2lmVGV4dCwgeyBkdXJhdGlvbjogMC41LCB0cmFuc2xhdGVYOiA0MDAsIG9wYWNpdHk6IDAgfSwgMClcclxuICAgIC5mcm9tKHNwZWNpZkNhcHRpb25zLCB7IGR1cmF0aW9uOiAwLjUsIHRyYW5zbGF0ZVg6IC00MDAsIG9wYWNpdHk6IDAgfSwgMCkiXSwiZmlsZSI6Im1haW4uanMifQ==