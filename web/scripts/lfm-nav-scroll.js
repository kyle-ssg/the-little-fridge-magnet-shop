const navClass = 'nav__past-hero';
const NAV_OFFSET = 20;

jQuery(function ($) {

    var $nav = $('.nav');
    var $win = $(window);
    var winH = document.body.clientWidth > 768 ? $win.height() - NAV_OFFSET : $win.height() / 4 - NAV_OFFSET;   // Get the window height.

    $win.on("scroll", function () {
        if ($(this).scrollTop() > winH) {
            $nav.addClass(navClass);
        } else {
            $nav.removeClass(navClass);
        }
    }).on("resize", function () { // If the user resizes the window
        winH = document.body.clientWidth > 768 ? $win.height() - NAV_OFFSET : $win.height() / 4 - NAV_OFFSET;   // Get the window height.
    });

});