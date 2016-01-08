// statement-box.controller.js

import Auth from '../auth/auth';

class StatementBoxController {
  constructor($http) {
    this.$http = $http;
  }

  sendMessage(message) {
    let params = {
      message: message,
      created_at: new Date().toISOString(),
      user_id: Auth.getCurrentUser().id
    };

    this.$http.post('/messages', params).then(
      () => {
        this.message = '';
      },
      (reason) => {
        console.log('Error', reason);
      }
    );
  }
}

StatementBoxController.$inject = ['$http'];

export default StatementBoxController;
