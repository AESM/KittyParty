// vendor-import.js

import angular from 'angular';
import $ from 'jquery';

// vendor-test.js

console.log('AngularJS:', angular.version.full);
console.log('jQuery:', $.fn.jquery);

// dropdown-menu.js

$(function() {
  $('.navbar__dropdown .navbar__dropdown--wrapper ul').hide();
  $('.navbar__dropdown .navbar__dropdown--wrapper').click(function(e) {
    $('.navbar__dropdown .navbar__dropdown--wrapper ul').slideToggle(200);
    $('.navbar__dropdown--menu').toggleClass('active');
    e.stopPropagation();
  });
  $(document).click(function() {
    if ($('.navbar__dropdown .navbar__dropdown--wrapper ul').is(':visible')) {
      $('.navbar__dropdown .navbar__dropdown--wrapper ul', this).slideUp();
      $('.navbar__dropdown--menu').removeClass('active');
    }
  });
});

// raptorsmacss.js

console.log('RAPTORSMACSS!\n\nSo modular...\n\n© Ali Esmaili | SuitAndCape\n\n');

//# sourceMappingURL=raptor.js.map
