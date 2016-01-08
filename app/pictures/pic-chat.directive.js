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

      // function randomPic(){
      //   var randomNumber = Math.floor(Math.random() * 3) + 1,
      //       picName = 'img-' + randomNumber + '.png';
      //   document.getElementById('picture-id').src='../../assets/images/portraits/' + picName;
      //  }

      // var unwatch = $scope.$watch('user', function(user) {
      //   console.log('User', user);

      //   if (user) {

      //     if (!picMapping[user.id]) picMapping[user.id] = randomPic();
      //     $scope.color = picMapping[user.id];

      //     unwatch();
      //   }
      // });
    }
  };
}

picChatDirective.$inject = [];

export default picChatDirective;
