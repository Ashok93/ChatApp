import React, {Component} from 'react';
import * as firebase from 'firebase';

export default class ChatRoom extends Component {
  constructor(props) {
      super(props);
      this.updateMessage = this.updateMessage.bind(this);
      this.sendMessage = this.sendMessage.bind(this);

      this.state = {
        message: '',
        messages: []
      }
  }

  componentDidMount() {
    firebase.database().ref('messages/').on('value', (snapshot)=> {
      var current_messages = snapshot.val();

      if(current_messages != null) {
        this.setState({
          messages: current_messages
        })
      }
    });
  }

  sendMessage() {
    const next_message = {
      id: this.state.messages.length,
      message: this.state.message
    }

    firebase.database().ref('messages/'+ next_message.id).set(next_message);
  }
  updateMessage(event) {
    this.setState({message: event.target.value});
  }

  render() {
    var currentMessages = this.state.messages.map((message, index) => {
      return (
        <li key={index}>
          {message.message}
        </li>
      )
    });

    return(
      <div>
        <ul>
          { currentMessages }
        </ul>
        <textarea type="text" placeholder="Enter Message" onChange= { this.updateMessage } />
        <br/>
        <button onClick={ this.sendMessage }>Send</button>
      </div>
    )
  }
}
