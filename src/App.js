import React ,{ Component } from 'react';
import ChatRoom from './components/chatroom.js';

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      showChatRoom: false,
    }

    this.updateUserName = this.updateUserName.bind(this);
    this.enterChatRoom = this.enterChatRoom.bind(this);
  }

  updateUserName(e) {
    this.setState({
      userName: e.target.value
    })
  }

  enterChatRoom() {
    this.setState({
      showChatRoom: true
    })
  }

  render() {
    return(
      <div>
        {
          this.state.showChatRoom ? <ChatRoom username={this.state.userName} />
           :
           <div style={{padding: 30, textAlign: 'center'}}>
             <h3>Enter your chat name..</h3>
             <input type = "text" onChange={ this.updateUserName } /><br />
             <button onClick={this.enterChatRoom} style={{margin: 20}}>Enter Chat Room</button>
           </div>
        }
      </div>
    )
  }
}
