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