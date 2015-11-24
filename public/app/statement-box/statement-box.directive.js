// statement-box.directive.js

import template from './statement-box.template.html!text';
import StatementBoxController from './statement-box.controller';

function statementBoxDirective() {
  return {
    restrict: 'E',
    replace: false,
    scope: {},
    template: template,
    bindToController: true,
    controllerAs: 'ctrl',
    controller: StatementBoxController
  };
}

statementBoxDirective.$inject = [];

export default statementBoxDirective;
