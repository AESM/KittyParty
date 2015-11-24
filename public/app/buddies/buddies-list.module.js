// buddies-list.module.js

import buddiesListDirective from './buddies-list.directive';

export default angular.module('BuddiesList', [])
  .directive('buddiesList', buddiesListDirective);
