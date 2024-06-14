var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el);
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })

    })
}

allLozadImg();


$(window).scroll(function (e) {
    $el = $('.header');
    $el.toggleClass('header-fixed', $(this).scrollTop() > 32);

});

//anim
//add counting number to show delay speed
var counterContainer = [...document.querySelectorAll('.counting-delay')];

function addCoutingDelay() {
    if (counterContainer.length) {
        counterContainer.forEach((cont) => {
            var anims = [...cont.querySelectorAll('.anim')];
            anims.forEach((btn, k) => {
                btn.dataset.animDelay = k * 40;
            })
        })
    }
}

addCoutingDelay();

var animStage = [...document.querySelectorAll('.anim-stage')];

function scrollAnimationsStage() {
    if (animStage.length) {
        var animItems = [...document.querySelectorAll(':scope > *')];

        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // console.log(entry.target);
                var eles = [...entry.target.querySelectorAll(":scope > *")];
                var len = eles.length;

                // console.log(eles);
                if (entry.isIntersecting) {
                    for (var i = 0; i < len; i++) {
                        // console.log(eles[1]);
                        eles[i].style.animationDelay = (entry.target.dataset.animDelay * i) + 'ms';
                        eles[i].style.animationDuration = entry.target.dataset.animDuration + 'ms';
                        eles[i].style.animationName = entry.target.dataset.anim;
                    }
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5})

        animStage.forEach((animate, k) => {
            observer.observe(animate);
        })

    }
}

scrollAnimationsStage();


// scroll animations
var anim = document.querySelectorAll('.anim');

function scrollAnimations() {
    if (anim.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target
                if (entry.isIntersecting) {
                    if (el.classList.contains('anim-js')) {

                    } else {
                        el.style.animationDelay = el.dataset.animDelay + 'ms';
                        el.style.animationDuration = el.dataset.animDuration + 'ms';
                        el.style.animationName = el.dataset.anim;
                    }


                    el.classList.add('done');
                    observer.unobserve(entry.target);
                    if (el.classList.contains('some-info__cont')) {
                        // console.log('zuza');
                        counters.forEach(counter);
                    }
                }

            })
        }, {threshold: .5});
        if (window.innerWidth > 991) {
            anim.forEach(animate => {
                observer.observe(animate)
            })
        } else {

            anim.forEach(animate => {

                observer.observe(animate)


            })
        }
    }
}

scrollAnimations();

//

// blog container
let blogContainer = document.querySelector('.blog-container');

function controlPaddingForImage() {
    if (blogContainer) {
        let elementsBlog = [...blogContainer.querySelectorAll('.single-blog')];
        let thirdEl = elementsBlog[2];
        let thirdElTitle = $(elementsBlog[2].querySelector('span')).outerHeight(true);
        let thirdElImage = elementsBlog[2].querySelector('.img');

        let gapEl = Number(window.getComputedStyle(blogContainer).rowGap.replace('px', ''));
        let widthEl = window.getComputedStyle(blogContainer).width;

        let widthOfBig = thirdEl.offsetWidth;

        let firstElHeight = $(elementsBlog[0]).outerHeight(true);
        let fourElHeight = $(elementsBlog[3].querySelector('span')).outerHeight(true) + $(elementsBlog[3].querySelector('.img')).outerHeight(true);
        let totalHeightForThird = firstElHeight + fourElHeight + gapEl - thirdElTitle;

        let paddingTopThird = (totalHeightForThird / widthOfBig) * 100;


        let sixEl = elementsBlog[5];
        let sixElTitle = $(elementsBlog[5].querySelector('span')).outerHeight(true);
        let sixElImage = elementsBlog[5].querySelector('.img');

        let sevenElHeight = $(elementsBlog[6]).outerHeight(true);
        let nineElHeight = $(elementsBlog[8].querySelector('span')).outerHeight(true) + $(elementsBlog[8].querySelector('.img')).outerHeight(true);
        let totalHeightForSix = sevenElHeight + nineElHeight + gapEl - sixElTitle;
        // console.log(sixElTitle)
        let paddingTopSix = (totalHeightForSix / widthOfBig) * 100;

        if (window.innerWidth < 768) {
            thirdElImage.style.paddingTop = 138.15 + '%';
            sixElImage.style.paddingTop = 138.15 + '%';
        } else {
            thirdElImage.style.paddingTop = paddingTopThird + '%';
            sixElImage.style.paddingTop = paddingTopSix + '%';
        }


    }
}

controlPaddingForImage();


window.addEventListener("resize", (event) => {
    controlPaddingForImage();
});

window.onresize = (event) => {
    controlPaddingForImage();
};
// blog container


var header = document.querySelector('.header');


//swipers

//news slider

let instaSlider = [...document.querySelectorAll('.insta-block__slider')];

function startInstaSlider() {
    if (!instaSlider.length) {

    } else {
        instaSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.dots');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: true,
                grabCursor: true,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: false,

                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 27,
                pagination: false,
                breakpoints: {
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    }
                }


            });

        })


    }
}

startInstaSlider();


let servicesSlider = [...document.querySelectorAll('.categories-slider')];

function startServicesSlider() {
    if (!servicesSlider.length) {

    } else {
        servicesSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');

            let pagin = sld.querySelector('.dots');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                grabCursor: true,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: true,

                navigation: false,
                autoplay: false,
                spaceBetween: 8,
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 2,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 8,
                    }
                }


            });

        })


    }
}

startServicesSlider();


let reviewsSlider = [...document.querySelectorAll('.reviews__slider')];

function startReviewsSlider() {
    if (!reviewsSlider.length) {

    } else {
        reviewsSlider.forEach((sld) => {
            let paginTexts = [...sld.querySelectorAll('.pagin-info li')];

            let sldCont = sld.querySelector('.slider-reviews .swiper');
            let sldThumb = sld.querySelector('.reviews-thumb .swiper');
            let pagin = sld.querySelector('.reviews-thumb');

            var swiperThumb = new Swiper(sldThumb, {
                speed: 600,
                slidesPerView: 1,
                slidesPerGroup: 1,
                direction: 'horizontal',
                grabCursor: false,
                loop: false,
                draggable: false,
                allowTouchMove: false,
                centeredSlides: false,
                spaceBetween: 0,
                resistance: true,
                resistanceRatio: 0.3,
                centeredSlidesBounds: true,
                // initialSlide: 2,
                slideToClickedSlide: true,
                cssMode: false,
                breakpoints: {
                    768: {
                        slidesPerView: 1,
                    }
                }
            });

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                grabCursor: true,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,

                centeredSlides: false,
                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: true,

                navigation: false,
                autoplay: false,
                spaceBetween: 10,
                // initialSlide: 2,
                centeredSlidesBounds: true,
                pagination: false,


            });
            swiper2.controller.control = swiperThumb;

            swiperThumb.controller.control = swiper2;
        })


    }
}

startReviewsSlider();

//news slider


//swipers


//modal windows

//modal window

let btnMod = [...document.querySelectorAll('.btn-mod')];
let textMod = [...document.querySelectorAll('.play-btn')];
let modJobs = [...document.querySelectorAll('.mod-jobs')];
let modals = [...document.querySelectorAll('.modal-window')];
let closeModal = [...document.querySelectorAll('.modal-close')];
let clsSecModal = [...document.querySelectorAll('.modal-window .cls')];
let backplates = [...document.querySelectorAll('.backplate')];

function controlModal() {
    if (btnMod.length || textMod.length || modJobs.length) {
        btnMod.forEach((btn) => {
            let data = btn.dataset.mod;

            btn.addEventListener('click', (e) => {

                e.preventDefault();
                e.stopPropagation();


                modals.forEach((mod) => {
                    if (mod.dataset.modal === data) {
                        document.body.classList.add('no-scroll');
                        mod.classList.add('visible');

                    }
                })
            })
        });


        $('body').on('click', '.mod-jobs', function (e) {
            e.preventDefault();
            e.stopPropagation();

            let data = this.dataset.mod;

            modals.forEach((mod) => {
                if (mod.dataset.modal === data) {
                    document.body.classList.add('no-scroll');

                    mod.classList.add('visible');

                }
            })


        });


        backplates.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');
                if (btn.closest('.modal-window').classList.contains('modal-window--video')) {
                    btn.closest('.modal-window').querySelector('.video-container').innerHTML = '';
                }

            })
        });

        clsSecModal.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');

                if (btn.closest('.modal-window').classList.contains('modal-window--video')) {
                    btn.closest('.modal-window').querySelector('.video-container').innerHTML = '';
                }
            })
        });


    }
}

controlModal();


//modal


//video controls

var player3;

function createVideo(videoBlockId, videoId, btn) {
    player3 = new YT.Player(videoBlockId, {
        videoId: videoId,
        playerVars: {
            // 'autoplay':1,
            'autohide': 1,
            'showinfo': 0,
            'rel': 0,
            'loop': 1,
            'playsinline': 1,
            'fs': 1,
            'allowsInlineMediaPlayback': true
        },
        events: {
            'onReady': function (e) {
                // e.target.mute();
                // if ($(window).width() > 991) {

                e.target.playVideo();

                // }
            },

        }
    });
}


let botSlides = [...document.querySelectorAll('.play-btn')];
var player2;

$('body').on('click', '.play-btn', function (e) {
    let btn = this;
    let type = btn.dataset.videoType;
    let id = btn.dataset.videoId;
    let modalVideo = $('.modal-window--video')[0];
    console.log(modalVideo);
    let videoId = id;
    document.body.classList.add('no-scroll');
    modalVideo.classList.add('visible');

    if (type === 'vimeo') {
        player2 = new Vimeo.Player($('.modal-window--video .video-container').html(
            '<iframe class="video-iframe" allow="autoplay" src="https://player.vimeo.com/video/' +
            videoId +
            '?playsinline=1&autoplay=1&transparent=1&api=1">'
        ));
        player2.play();
        btn.classList.add('pause');
    } else {
        if (type === 'video') {

            let videoBl = document.createElement('video');
            videoBl.src = id;
            videoBl.playsinline = true;
            videoBl.controls = true;
            modalVideo.querySelector('.video-container').append(videoBl);
            videoBl.play();
        } else {

            $('.modal-window--video .video-container').append('<div class="video-iframe" id="' + videoId + '"></div>');
            createVideo(videoId, videoId, btn);
        }
    }
});

// videoControlSlides();

var mobile = $(window).width() < 768;
$('.faq-list .question').on('click', function () {
    var $this = $(this);
    var $item = $('.faq-list .item');
    if (!$this.parent().hasClass('open')) {
        $item.removeClass('open').find('.answer').slideUp(300);
        $this.parent().addClass('open').find('.answer').slideDown(300, function () {
            if (mobile)
                $('html, body').animate({
                    scrollTop: $this.offset().top - $('header').outerHeight()
                }, 500);
        });
    } else {
        $item.removeClass('open').find('.answer').slideUp(300);
    }
});

$('body').on('click', '.btn-to', function (e) {
    e.preventDefault();
    e.stopPropagation();
    let lnk = this.dataset.to;
    lnk = lnk.replace(/^/, '.');

    $([document.documentElement, document.body]).animate({
        scrollTop: $(lnk).offset().top - $('.header').height()
    }, 600);

});