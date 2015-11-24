// buddies-list.directive.js

import template from './buddies-list.template.html!text';
import BuddiesListController from './buddies-list.controller';

function buddiesListDirective() {
  return {
    restrict: 'E',
    replace: false,
    template: template,
    scope: true,
    bindToController: true,
    controllerAs: 'ctrl',
    controller: BuddiesListController
  };
}

buddiesListDirective.$inject = [];

export default buddiesListDirective;
