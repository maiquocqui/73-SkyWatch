(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
    // jQuery.scrollSpeed(100, 500);
    new WOW({
        offset: 0
    }).init();
    // $('header').scrollToFixed({
    //     zIndex: 1000,
    // });
    if ($(window).width() > 1199) {
        $('.filter-wrap2').scrollToFixed({
            marginTop: 166,
            zIndex: 50,
            limit: function limit() {
                return $('.pages').offset().top - $('.filter-wrap2').outerHeight();
            }
        });
    }

    if ($(window).width() > 1199) {
        $('.product-description .tabs-list').scrollToFixed({
            marginTop: 166,
            zIndex: 50
        });
    }
    if ($(window).width() < 1200) {
        $('.product-description .tabs-list').scrollToFixed({
            marginTop: 60,
            zIndex: 50
        });
    }
    // $('.tabs-list a[href^="#"]').click(function(e) {
    //     e.preventDefault();
    //     $('html,body').animate({
    //         scrollTop: $(this.hash).offset().top - 230
    //     }, 700);
    //     $('.tabs-list a').parent().removeClass('active');
    //     $(this).parent().addClass('active');
    //     return false;
    // });
    $('[data-toggle="tooltip"]').tooltip();
    // $(".TickerNews").newsTicker();
    // $(window).bind('scroll', function() {
    //     if ($(window).scrollTop() > 150) {
    //         $('header').addClass('hide');
    //     } else {
    //         $('header').removeClass('hide');
    //     }
    // });
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 300) {
            $('.up').addClass('active');
        } else {
            $('.up').removeClass('active');
        }
    });
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 400) {
            $('.product-fly-button').addClass('open');
        } else {
            $('.product-fly-button').removeClass('open');
        }
    });
    $('.up').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
    $(".counter").countimator({
        duration: 1000
    });
    $(".pagename").append($('.breadcrumb li a').eq(1).find('span').html());
    $('#responsivetabs').responsiveTabs({
        startCollapsed: 'accordion'
    });

    // MENU
    if ($(window).width() < 1200) {
        $('.cart').insertAfter('.login-dropdown');
    }

    $('.btn-showmenu').click(function () {
        $('.fullpage').toggleClass('open');
        $('.mobile-menu').toggleClass('open');
        $('.overlay').fadeIn(500);
        $('html').css('overflow', 'hidden');
    });
    $('.btn-closemenu').click(function () {
        $('.fullpage').removeClass('open');
        $('.mobile-menu').removeClass('open');
        $('html').css('overflow', 'auto');
    });
    $('.overlay').click(function () {
        $(this).fadeOut(500);
        $('.menu').removeClass('open');
        $('html').css('overflow', 'auto');
    });
    $('.btn-showsub').click(function () {
        $(this).siblings('.sub').slideToggle(300);
        $(this).siblings('.mega').slideToggle(300);
    });
    $('.searchtoggle').click(function () {
        $('.searchwrap').toggleClass('open');
        // $('.overlay').fadeIn(500);
        // $('html').css('overflow', 'hidden');
    });
    $('.btn-closesearch').click(function () {
        $('.searchwrap').removeClass('open');
        // $('.overlay').fadeOut(500);
        // $('html').css('overflow', 'auto');
    });
    // END-MENU

    $('.btn-apply').click(function () {
        $('.apply-form').slideToggle(300);
    });
    $('#map').click(function () {
        $(this).find('iframe').addClass('active');
    }).mouseleave(function () {
        $(this).find('iframe').removeClass('active');
    });
    $('.addresslist .address').click(function () {
        $('.addresslist .address').removeClass('active');
        $(this).addClass('active');
    });

    // BRAND
    // $('.brand-intro .btn-viewmore').click(function() {
    //     $('.brand-intro .content').toggleClass('open');
    //     $(this).slideUp(300);
    // });

    // FILTER SCRIPT

    $('.btn-showsubfilter').click(function () {
        $(this).toggleClass('active');
        $(this).siblings('.sub').slideToggle(300);
    });
    $('.btn-showcate').click(function () {
        $(this).toggleClass('active');
        $('.btn-showfilter').removeClass('active');
        $('.option-group').removeClass('open');
        $('.category-group').toggleClass('open');
        // $('html').css('overflow', 'hidden');
    });
    $('.btn-showfilter').click(function () {
        $(this).toggleClass('active');
        $('.btn-showcate').removeClass('active');
        $('.category-group').removeClass('open');
        $('.option-group').toggleClass('open');
        // $('html').css('overflow', 'hidden');
    });
    $('.btn-closefilter').click(function () {
        $('.btn-showcate').removeClass('active');
        $('.btn-showfilter').removeClass('active');
        $('.filter-wrap').removeClass('open');
        $('.filter-wrap2').removeClass('open');
        // $('html').css('overflow', 'auto');
    });

    $('.faqtitle').click(function () {
        $(this).siblings('.faqcontent').slideToggle(300);
    });

    // USER
    $('.user-sidebar').click(function () {
        $('.user-sidelink').slideToggle(300);
    });

    $('#btn-changepw').click(function () {
        $('.changepw-form').slideToggle(300);
    });

    // PRODUCT SCRIPT
    if ($(window).width() < 576) {
        // $('.product-info .product-name').insertBefore('.product-page .slidewrap .product-slide');
        // $('.product-info .promotion').insertAfter('.product-page .slidewrap .product-name');
        // $('.product-info .product-overview').insertBefore('.product-page .product-info .share');
    }

    $('.btn-expand').click(function () {
        var $this = $(this);
        $this.toggleClass('active');
        $('.brand-intro .content').toggleClass('open');
        if ($this.hasClass('active')) {
            $this.text('Thu gọn');
        } else {
            $this.text('Xem thêm');
        }
    });

    // SLIDE
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: true,
        dots: true
    });
    $('.home-brand-slide').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 500,
        autoplay: false,
        arrows: true,
        dots: false,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    $('.home-sale-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        swipe: true,
        swipeToSlide: true,
        infinite: false,
        arrows: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    $('.other-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        swipe: true,
        swipeToSlide: true,
        infinite: true,
        arrows: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    $('.cart-lastview-slide').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        swipe: true,
        swipeToSlide: true,
        infinite: false,
        arrows: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    $('.bannerads').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: true,
        speed: 1000
    });

    $('.home-system .store-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        arrows: true,
        dots: false,
        autoplay: false
    });

    // PRODUCT SLIDE

    $('.product-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        fade: true,
        asNavFor: '.product-nav'
    });
    $('.product-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.product-slide',
        dots: false,
        focusOnSelect: true,
        infinite: true,
        swipe: true,
        swipeToSlide: true,
        vertical: true,
        verticalSwiping: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 5,
                vertical: false,
                verticalSwiping: false
            }
        }]
    });
    $('.lastview-slide').slick({
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 8
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 7
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 3
            }
        }]
    });

    $('.news-list-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        fade: true,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });

    // CART PAGE SCRIPT

    $('.removenotice').click(function () {
        $('.cartnotice').slideToggle(300);
    });

    $('#btn-ttmh').click(function () {
        $('.user-info').slideToggle(300);
    });
    $('#btn-xuathd').click(function () {
        $('.bill-form').slideToggle(300);
    });

    $('#ship1').click(function () {
        $('#ship1-popup').show(300);
        $('#ship2-popup').hide(300);
    });
    $('#ship2').click(function () {
        $('#ship2-popup').show(300);
        $('#ship1-popup').hide(300);
    });

    $('.btn-spin').click(function () {

        var $button = $(this);
        var oldValue = $button.parent().find('input').val();

        if ($button.text() == '+') {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }

        $button.parent().find('input').val(newVal);
    });
});

// REVOLUTION SLIDER
var tpj = jQuery;

var banner001;
tpj(document).ready(function () {
    if (tpj("#banner001").revolution == undefined) {
        revslider_showDoubleJqueryError("#banner001");
    } else {
        banner001 = tpj("#banner001").show().revolution({
            sliderType: "standard",
            sliderLayout: 'auto',
            dottedOverlay: "none",
            delay: 5000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    enable: true,
                    style: 'uranus',
                    tmp: '',
                    rtl: false,
                    hide_onleave: true,
                    hide_onmobile: true,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 300,
                    hide_delay_mobile: 1200,
                    left: {
                        container: 'slider',
                        h_align: 'left',
                        v_align: 'center',
                        h_offset: 50,
                        v_offset: 0
                    },

                    right: {
                        container: 'slider',
                        h_align: 'right',
                        v_align: 'center',
                        h_offset: 50,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    style: 'hermes',
                    tmp: '',
                    direction: 'horizontal',
                    rtl: false,

                    container: 'slider',
                    h_align: 'center',
                    v_align: 'bottom',
                    h_offset: 0,
                    v_offset: 20,
                    space: 10,

                    hide_onleave: false,
                    hide_onmobile: false,
                    hide_under: 0,
                    hide_over: 9999,
                    hide_delay: 200,
                    hide_delay_mobile: 1200

                }
            },
            responsiveLevels: [1024, 991, 767, 543],
            visibilityLevels: [1024, 991, 767, 543],
            gridwidth: [1600, 1024, 768, 575],
            gridheight: [580, 400, 300, 200],
            lazyType: "none",
            // parallax: {
            //     type: "scroll",
            //     origo: "slidercenter",
            //     speed: 50,
            //     levels: [5000]
            // },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false
            }
        });
    }
});
$(document).ready(function () {
    // $(document).on("scroll", onScroll);

    // $('.fly-menu a[href^="#"]').on('click', function(e) {
    //     e.preventDefault();
    //     $(document).off("scroll");

    //     $('a').each(function() {
    //         $(this).removeClass('active');
    //     })
    //     $(this).addClass('active');

    //     var target = this.hash,
    //         menu = target;
    //     $target = $(target);
    //     $('html, body').stop().animate({
    //         'scrollTop': $target.offset().top - 150
    //     }, 700, 'swing', function() {
    //         window.location.hash = target;
    //         $(document).on("scroll", onScroll);
    //     });
    // });

    $('.fly-menu a[href^="#"]').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 160
        }, 700);
        $('.fly-menu li').removeClass('active');
        $(this).parent('li').addClass('active');
        return false;
    });
});

// function onScroll(event) {
//     var scrollPos = $(document).scrollTop() + 170;
//     $('.fly-menu a').each(function() {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('.fly-menu ul li').removeClass("active");
//             currLink.parent().addClass("active");
//         } else {
//             currLink.parent().removeClass("active");
//         }
//     });
// }

},{}]},{},[1])

//# sourceMappingURL=main.js.map
