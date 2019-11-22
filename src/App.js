import React, { PureComponent as Component } from "react";
import ChatWindow from "./components/ChatWindow";
import Launcher from "./components/Launcher";

class App extends Component {
  state = {
    chatOpen: false,
    new_message: {
      recived: false,
      message: ""
    },
    messages: [
      {
        recived: true,
        message: "Привет"
      },
      {
        recived: false,
        message: "Привет"
      },
      {
        recived: false,
        message: "Как дела"
      },
      {
        recived: true,
        message: "Нормально"
      },
      {
        recived: false,
        message: "Хорошо"
      },
      {
        recived: true,
        message: "Я сломался"
      }
    ]
  };

  onClickOpenChat = e => {
    this.setState({ chatOpen: !this.state.chatOpen });
  };

  _handleSendMessage = e => {
    if (this.state.new_message.message) {
      const newMessages = [...this.state.messages, this.state.new_message];
      this.setState({
        new_message: {
          recived: false,
          message: ""
        },
        messages: newMessages
      });
    }
  };

  _updateInputValue = e => {
    this.setState({
      new_message: {
        recived: false,
        message: e.target.value
      }
    });
  };

  _handleKeyDown = e => {
    if (e.keyCode === 13 && !e.shiftKey) {
      if (this.state.new_message.message) {
        const newMessages = [...this.state.messages, this.state.new_message];
        this.setState({
          new_message: {
            recived: false,
            message: ""
          },
          messages: newMessages
        });
      }
    }
  };

  render() {
    return (
      <div>
        <ChatWindow
          messages={this.state.messages}
          new_message={this.state.new_message}
          chatOpen={this.state.chatOpen}
          handleOnClickOpenChat={this.onClickOpenChat}
          handleSendMessage={this._handleSendMessage}
          updateInputValue={this._updateInputValue}
          handleKeyDown={this._handleKeyDown}
        ></ChatWindow>
        <Launcher
          chatOpen={this.state.chatOpen}
          handleOnClickOpenChat={this.onClickOpenChat}
        ></Launcher>
      </div>
    );
  }
}

export default App;
