require('../common/css/style.scss')
require('./css/style.scss')

$(document).ready(function() {

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    var debouncedScroll = debounce(function() {

        var data_content = $(this).data("scrollfrom");

        if ($("nav.navbar").css('position') == 'fixed') {
            var scrollTop = $("[data-scrollTo=" + data_content + "]").offset().top - $("nav.navbar").height();
        } else {
            var scrollTop = $("[data-scrollTo=" + data_content + "]").offset().top;
        }

        $('html,body').animate({
            scrollTop: scrollTop
        }, 1000);


    }, 250);


    $("[data-scrollFrom]").click(

        function(e) {

            e.preventDefault();
            debouncedScroll.call(this)

        })

});