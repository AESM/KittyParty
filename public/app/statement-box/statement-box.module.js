// statement-box.module.js

import statementBoxDirective from './statement-box.directive';
import submitFormOnReturnDirective from './submit-form-on-return.directive';

export default angular.module('StatementBox', [])
  .directive('statementBox', statementBoxDirective)
  .directive('submitFormOnReturn', submitFormOnReturnDirective);
