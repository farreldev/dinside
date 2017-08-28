(function($){
    "use strict"
    
    var app = (function() {
        
        var isHome = $('.site-container').find('.homepage');

        if(isHome) {
            $('.top-center').hide()
        } else {
            $('.top-center').show()
        }
        console.log(isHome)
        
        $('.humburger-btn').on('click', function() {
            $(this).toggleClass('humTrigger');
            $('.navigasi').toggleClass('mnuOpen');
        });
        $('.top-left').on('click', '.cari-btn', function() {
            $('.inputSearch').toggleClass('searchOpen');
        })
    })();
    
})(jQuery);