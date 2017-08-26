$(document).ready(function(){
  var isHome = $('.site-container').find('.homepage');
    if(isHome) {
        $('#logo-tgh').hide();
    } else {
        $('#logo-tgh').show();
    }
});