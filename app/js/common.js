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


var header = document.querySelector('.header');


//swipers

//news slider


let servicesSlider = [...document.querySelectorAll('.work-slider')];

function startServicesSlider() {
    if (!servicesSlider.length) {

    } else {
        servicesSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');

            let pagin = sld.querySelector('.dots');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: true,
                grabCursor: true,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 300,
                centeredSlides: true,

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

                navigation: false,
                autoplay: false,
                spaceBetween: 22,
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
                initialSlide: 2,

                breakpoints: {
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                        initialSlide:2,
                    }
                }


            });

        })


    }
}

startServicesSlider();


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


$('body').on('click', '.btn-to', function (e) {
    e.preventDefault();
    e.stopPropagation();
    let lnk = this.closest('.section-block').nextElementSibling;


    $([document.documentElement, document.body]).animate({
        scrollTop: $(lnk).offset().top
    }, 600);

});


$('.filter-select select').niceSelect();

let sortUlLi = [...document.querySelectorAll('.filter-select ul li')];

function sortSelectClick() {
    if (!sortUlLi.length) {

    } else {
        sortUlLi.forEach((btn) => {
            btn.addEventListener('click', () => {
                let optValue = btn.dataset.value;
                let event2 = new Event('change');
                let event3 = new Event('click');
                let event4 = new Event('change');
                let suggestOpt = document.querySelector(`option[value='${optValue}']`);
                // btn.closest('.sort-selector').querySelector('select option[selected]').removeAttribute('selected');

                suggestOpt.selected = 'selected';
                suggestOpt.setAttribute('selected', 'selected');
                suggestOpt.click();
                // console.log(btn.closest('.filter-select').querySelector('select'));
                // console.log(suggestOpt);
                // $('select.sort-select').niceSelect();
            })
        })
    }
}

sortSelectClick();