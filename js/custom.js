$(function () {
    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        // if( sct > 0 ){}
        sct > 0 ?
            $('.Header').addClass('on')
            :
            $('.Header').removeClass('on')
    });

    const MainSlide = new Swiper('.main_slide', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: {
            slideChangeTransitionStart: function () {
                $('.MainVisual .dots li').eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on');
            }
        }
    });

    const ItmSlide = new Swiper('.itm_slide', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
    });

    $('.MainVisual .arrows .left').on('click', function () {
        MainSlide.slidePrev();
    });
    $('.MainVisual .arrows .right').on('click', function () {
        MainSlide.slideNext();
    });

    $('.MainVisual .dots li').on('click', function () {
        const idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        MainSlide.slideTo(idx);

    });

});