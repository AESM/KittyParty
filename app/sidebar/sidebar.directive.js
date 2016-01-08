// sidebar.directive.js

import template from './sidebar.template.html!text';
import SidebarController from './sidebar.controller';

function sidebarDirective() {
  return {
    restrict: 'E',
    replace: false,
    scope: true,
    template: template,
    bindToController: true,
    controllerAs: 'ctrl',
    controller: SidebarController
  };
}

sidebarDirective.$inject = [];

export default sidebarDirective;
