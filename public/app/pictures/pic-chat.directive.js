// pic-chat.directive.js

import template from './pic-chat.template.html!text';

function picChatDirective() {
  let picMapping = {};

  return {
    restrict: 'E',
    replace: false,
    scope: {
      user: '='
    },
    template: template,
    link: function($scope) {
    }
  };
}

picChatDirective.$inject = [];

export default picChatDirective;
