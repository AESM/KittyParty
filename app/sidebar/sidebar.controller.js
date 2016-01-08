// sidebar.controller.js

import Auth from '../auth/auth';

class SidebarController {
  constructor() {
  }

  currentUser() {
    return Auth.getCurrentUser();
  }
}

SidebarController.$inject = [];

export default SidebarController;
