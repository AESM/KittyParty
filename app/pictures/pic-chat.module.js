// pic-chat.module.js

import picChatDirective from './pic-chat.directive';

export default angular.module('PicChat', [])
  .directive('picChat', picChatDirective);
