// messages.directive.js

import template from './messages.template.html!text';
import MessagesController from './messages.controller';

function messagesDirective() {
  return {
    restrict: 'E',
    replace: false,
    template: template,
    scope: {},
    bindToController: true,
    controllerAs: 'ctrl',
    controller: MessagesController
  };
}

messagesDirective.$inject = [];

export default messagesDirective;
