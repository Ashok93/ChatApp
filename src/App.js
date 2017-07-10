import React ,{ Component } from 'react';
import ChatRoom from './components/chatroom.js';

export default class ChatScreen extends Component {
  render() {
    return(
      <div>
        This is a sample chat app!!
        <ChatRoom />
      </div>
    )
  }
}
