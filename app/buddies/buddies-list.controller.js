// buddies-list.controller.js

class BuddiesListController {
  constructor(Socket) {
    this.buddies = [];
    this.Socket = Socket;
    this.register();
  }

  register() {
    this.Socket.on('new_connection', (data) => {
      this.handleNewConnection(data.buddies);
    });
  }

  handleNewConnection(buddies) {
    this.buddies = buddies;
  }
}

BuddiesListController.$inject = ['Socket'];

export default BuddiesListController;
