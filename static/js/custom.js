$(function () {
    $(document).scroll(function () {
        var $nav = $("#top");
        var toggle = $(this).scrollTop() > $nav.height();
        $nav.toggleClass('scrolled', toggle);
        console.log('derp');
        var $navLinks = $("#top #top-nav-main a");
        $navLinks.toggleClass('scrolled', toggle);
        var $brand = $("#top #top-brand a");
        $brand.toggleClass('scrolled', toggle);
        var $border = $("#top #top-nav-main");
        $border.toggleClass('scrolled', toggle);
    });
});
