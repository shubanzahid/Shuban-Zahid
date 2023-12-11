jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    let header = $("#header");
    let mobileNavToggle = $(".mobile-nav-toggle");

    // Initialize header styles based on screen width
    if ($(window).width() <= 992) {
        header.css({
            'left': '-300px',
            'display': 'none'
        });
    } else {
        header.css({
            'left': '0',
            'display': 'block'
        });
    }

    mobileNavToggle.click(function () {
        if ($(window).width() <= 992) {
            // Toggle the display and position only on smaller screens
            if (header.css('left') === '0px') {
                header.animate({
                    'left': '-300px'
                }, 500, function () {
                    header.css('display', 'none');
                });
            } else {
                header.css('display', 'block');
                header.animate({
                    'left': '0'
                }, 500);
            }
        } else {
            // On larger screens, toggle the display without animation
            header.css('left', header.css('left') === '0px' ? '-300px' : '0');
            mobileNavToggle.removeClass('fa-times').toggleClass('fa-bars');
        }
        $(this).toggleClass('fa-bars fa-times');
    });

    // Close the mobile menu when clicking outside of it
    $(document).on('click', function (event) {
        if ($(window).width() <= 992 && !$(event.target).closest('.mobile-nav-toggle').length && !$(event.target).closest(header).length) {
            header.animate({
                'left': '-300px'
            }, 500, function () {
                header.css('display', 'none');
            });

            mobileNavToggle.removeClass('fa-times').addClass('fa-bars');
        }
    });

    // Handle window resize to adjust header styles
    $(window).on('resize', function () {
        if ($(window).width() > 992) {
            header.css({
                'left': '0',
                'display': 'block'
            });
            mobileNavToggle.removeClass('fa-times').addClass('fa-bars');
        } else {
            header.css({
                'left': '-300px',
                'display': 'none'
            });
        }
    });


});