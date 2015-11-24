// messages.module.js

import messagesDirective from './messages.directive';
import timeStampFilter from './time-stamp.filter';

export default angular.module('Messages', [])
  .directive('messages', messagesDirective)
  .filter('timeStamp', timeStampFilter);
