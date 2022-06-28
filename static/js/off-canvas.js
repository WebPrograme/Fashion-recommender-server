(function($) {
  'use strict';
  $(function() {
    $('[data-toggle="offcanvas"]').on("click", function() {
      console.log('f')
      $('.sidebar-offcanvas').toggleClass('active')
    });
  });
})(jQuery);