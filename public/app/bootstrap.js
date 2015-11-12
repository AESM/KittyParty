// bootstrap.js

import mainModule from './main';
// import mainModule from '../../app/main';

angular.element(document).ready(function() {
  angular.bootstrap(document, [mainModule.name], {
    strictDi: true
  });
});

