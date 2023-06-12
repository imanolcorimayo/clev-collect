export default () => {
    (function($) {
        "use strict";
    
        $(document).ready(function() {
    
            /* Nice Scroll js */
            $(".dashboard-bottom, .notification-list").niceScroll({});
    
            /*-------------------------------------------
                On Click Open Navbar right contents 
            ------------------------------------------*/
            $(document).on('click', '.click_show_icon', function() {
                $(".nav-right-content").toggleClass("active");
            });
            /*--------------------
                wow js init
            ---------------------*/
            new WOW().init();
            /* 
            ----------------------------------------
                Location click
            ----------------------------------------
            */
            $(document).on('click', '.single-location, .date-time-list .list', function() {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
            });
            /* 
            ========================================
                Dashboard Dropdown Side Menu
            ========================================
            */
    
            $(document).on('click', '.dashboard-list .has-children a', function(e) {
                var db = $(this).parent('.has-children');
                if (db.hasClass('open')) {
                    db.removeClass('open');
                    db.find('.submenu').children('.has-children').removeClass("open"); //2nd children remove 
                    db.find('.submenu').removeClass('open');
                    db.find('.submenu').slideUp(300, "swing");
                } else {
                    db.addClass('open');
                    db.children('.submenu').slideDown(300, "swing");
                    db.siblings('.has-children').children('.submenu').slideUp(300, "swing");
                    db.siblings('.has-children').removeClass('open');
                }
            });
            /* 
            ========================================
                Dashboard Responsive Sidebar
            ========================================
            */
            $(document).on('click', '.close-bars, .body-overlay', function() {
                $('.dashboard-close, .dashboard-left-content, .body-overlay').removeClass('active');
            });
            $(document).on('click', '.sidebar-icon', function() {
                $('.dashboard-close, .dashboard-left-content, .body-overlay').addClass('active');
            });
            /*----------------------
                Category Slider
            -----------------------*/
            $('.category-slider').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                prevArrow: '<div class="prev-icon"><i class="las la-angle-left"></i></div>',
                nextArrow: '<div class="next-icon"><i class="las la-angle-right"></i></div>',
                infinite: true,
                autoplay: false,
                pauseOnHover: true,
                swipeToSlide: true,
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 4,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 425,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
    
            /*----------------------
                Service Slider
            -----------------------*/
            $('.services-slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                prevArrow: '<div class="prev-icon"><i class="las la-angle-left"></i></div>',
                nextArrow: '<div class="next-icon"><i class="las la-angle-right"></i></div>',
                infinite: true,
                autoplay: false,
                pauseOnHover: true,
                swipeToSlide: true,
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
    
            /*----------------------
                Professional Slider
            -----------------------*/
            $('.professional-slider').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                prevArrow: '<div class="prev-icon"><i class="las la-angle-left"></i></div>',
                nextArrow: '<div class="next-icon"><i class="las la-angle-right"></i></div>',
                infinite: true,
                autoplay: false,
                pauseOnHover: true,
                swipeToSlide: true,
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 4,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 2,
                        }
                    }
                ]
            });
    
            /*----------------------
                Client logo Slider
            -----------------------*/
            $('.clientlogo-slider').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                prevArrow: '<div class="prev-icon"><i class="las la-angle-left"></i></div>',
                nextArrow: '<div class="next-icon"><i class="las la-angle-right"></i></div>',
                infinite: true,
                autoplay: true,
                pauseOnHover: true,
                swipeToSlide: true,
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 2,
                        }
                    }
                ]
            });
    
            /*
            ========================================
                Faq Accordion
            ========================================
            */
            $(document).on('click', '.faq-contents .faq-title', function(e) {
                var fq = $(this).parent('.faq-item');
                if (fq.hasClass('open')) {
                    fq.removeClass('open');
                    fq.find('.faq-panel').removeClass('open');
                    fq.find('.faq-panel').slideUp(300, "swing");
                } else {
                    fq.addClass('open');
                    fq.children('.faq-panel').slideDown(300, "swing");
                    fq.siblings('.faq-item').children('.faq-panel').slideUp(300, "swing");
                    fq.siblings('.faq-item').removeClass('open');
                    fq.siblings('.faq-item').find('.faq-title').removeClass('open');
                    fq.siblings('.faq-item').find('.faq-panel').slideUp(300, "swing");
                }
            });
            /*-----------------
                Nice Select
            ------------------*/
            $('select').niceSelect();
            /* 
            ========================================
                Tab
            ========================================
            */
            $(document).on('click', 'ul.tabs li', function() {
                var tab_id = $(this).attr('data-tab');
    
                $('ul.tabs li').removeClass('active');
                $('.tab-content-item').removeClass('active');
    
                $(this).addClass('active');
                $("#" + tab_id).addClass('active');
            });
    
            /* 
            ========================================
                Pagination 
            ========================================
            */
            $(document).on('click', '.pagination-list li', function() {
                $(this).siblings().removeClass("active");
                $(this).addClass("active");
            });
    
            /*
            ----------------------------
                Multi step Form
            ------------------------------
            */
            var current_fs, next_fs, previous_fs; //fieldsets
            var opacity;
            var current = 1;
            var steps = $("fieldset").length;
    
    
            $(document).on('click', ".next", function() {
    
                current_fs = $(this).parent();
                next_fs = $(this).parent().next();
    
                //Add Class Active
                $(".step-list li, .step-list-two li").eq($("fieldset").index(next_fs)).addClass("active");
    
                //show the next fieldset
                next_fs.show();
                //hide the current fieldset with style
                current_fs.animate({ opacity: 0 }, {
                    step: function(now) {
                        // for making fielset appear animation
                        opacity = 1 - now;
    
                        current_fs.css({
                            'display': 'none',
                            'position': 'relative'
                        });
                        next_fs.css({ 'opacity': opacity });
                    },
                    duration: 500
                });
            });
    
            $(document).on('click', ".previous", function() {
    
                current_fs = $(this).parent();
                previous_fs = $(this).parent().prev();
    
                //Remove class active
                $(".step-list li, .step-list-two li").eq($("fieldset").index(current_fs)).removeClass("active");
    
                //show the previous fieldset
                previous_fs.show();
    
                //hide the current fieldset with style
                current_fs.animate({ opacity: 0 }, {
                    step: function(now) {
                        // for making fieldset appear animation
                        opacity = 1 - now;
    
                        current_fs.css({
                            'display': 'none',
                            'position': 'relative'
                        });
                        previous_fs.css({ 'opacity': opacity });
                    },
                    duration: 500
                });
            });
    
            // $(document).on('click', ".submit", (function() {
            //         return false;
            // })
            $(document).on('click', ".submit", function() {
                return false;
            });
    
            /*-------------------------------
                Navbar Toggler Icon
            ------------------------------
            */
            $(document).on('click', '.navbar-toggler', function() {
                $(this).toggleClass("active")
            });
            /*------------------
                back to top
            ------------------*/
            $(document).on('click', '.back-to-top', function() {
                $("html,body").animate({
                    scrollTop: 0
                }, 1500);
            });
    
        });
        /*-------------------------------
            Back To Top
        ------------------------------
        */
        $(window).on('scroll', function() {
            //back to top show/hide
            var ScrollTop = $('.back-to-top');
            if ($(window).scrollTop() > 300) {
                ScrollTop.fadeIn(300);
            } else {
                ScrollTop.fadeOut(300);
            }
        });
    
        /*-----------------
        preloader
        ------------------*/
        $(window).on('load', function() {
            $('#preloader').delay(300).fadeOut('fast');
            $('body').delay(300).css({
                'overflow': 'visible'
            });
        });
    
    
    })(jQuery);
}