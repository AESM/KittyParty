// main.js

import './vendors/vendors.module';
// import './sidebar/dropdown-menu';
import Socket from './sockets/sockets';
import MessagesModule from './messages/messages.module';
import StatementBoxModule from './statement-box/statement-box.module';
// import ChatsListModule from './chats/chats-list.module';
import BuddiesListModule from './buddies/buddies-list.module';
import SidebarModule from './sidebar/sidebar.module';
import PicChatModule from './pictures/pic-chat.module';
import PicDashModule from './pictures/pic-dash.module';
// import Giphy from './gipgy/giphy.module'; //////////

let mainModule = angular.module('mainApp', [
    MessagesModule.name,
    StatementBoxModule.name,
    // ChatsListModule.name,
    BuddiesListModule.name,
    SidebarModule.name,
    PicChatModule.name,
    // Giphy.name, //////////
    PicDashModule.name
  ]).service(Socket.name, Socket);

export default mainModule;

