// pic-dash.directive.js

import template from './pic-dash.template.html!text';

function picDashDirective() {
  return {
    restrict: 'E',
    replace: false,
    scope: {
      user: '='
    },
    template: template
  };
}

picDashDirective.$inject = [];

export default picDashDirective;
