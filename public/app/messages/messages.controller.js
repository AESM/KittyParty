// messages.controller.js

import Auth from '../auth/auth';

class MessagesController {
  constructor(Socket) {
    this.messages = [];
    this.Socket = Socket;
    this.register();
  }

  register() {
    this.Socket.on('incoming_message', (data) => {
      this.handleIncomingMessage(data);
    });

    this.Socket.on('new_connection', (data) => {
      this.handleNewConnection(data);
    });

    this.Socket.on('user_disconnected', (data) => {
      this.handleUserDisconnected(data);
    });
  }

  handleIncomingMessage(data) {
    this.messages.push({
      message: data.message,
      user: data.user,
      type: data.type,
      messageGIF: data.messageGIF,
      created_at: data.created_at
    });
  }

  handleUserDisconnected(data) {
    this.messages.push({
      message: data.user.name + ' has disconnected',
      name: 'System',
      type: 'notification',
      created_at: data.created_at
    });
  }

  handleNewConnection(data) {
    if (Auth.getCurrentUser()) {
      this.messages.push({
        message: data.user.name + ' has joined',
        name: 'System',
        type: 'notification',
        created_at: data.created_at
      });
    } else {
      this.messages = data.messages;
    }
  }
}

MessagesController.$inject = ['Socket'];

export default MessagesController;
