import React, { PureComponent as Component } from "react";
import ChatWindow from "./components/ChatWindow";
import Launcher from "./components/Launcher";

const URL =
  window.location.host !== "localhost:3000"
    ? `wss://${window.location.host}/ws/vitacat/chat/`
    : `ws://localhost:8000/ws/vitacat/chat/`;

class App extends Component {
  ws = new WebSocket(URL);

  constructor() {
    super();
    this.state = {
      chatOpen: false,
      new_message: {
        recived: false,
        message: ""
      },
      messages: []
    };
  }

  componentDidMount() {
    this.ws.onopen = () => {};

    this.ws.onmessage = evt => {
      const message = JSON.parse(evt.data);
      this.setState({
        messages: Array.isArray(message)
          ? [...this.state.messages, ...message]
          : [...this.state.messages, message]
      });
    };

    this.ws.onclose = () => {
      // Автоматическое подключения если соккет упал
      this.setState({
        ws: new WebSocket(URL)
      });
    };
  }

  // state = {
  //   chatOpen: false,
  //   new_message: {
  //     recived: false,
  //     message: ""
  //   },
  //   messages: [
  //     {
  //       recived: true,
  //       message: "Привет"
  //     },
  //     {
  //       recived: false,
  //       message: "Привет"
  //     },
  //     {
  //       recived: false,
  //       message: "Как дела"
  //     },
  //     {
  //       recived: true,
  //       message: "Нормально"
  //     },
  //     {
  //       recived: false,
  //       message: "Хорошо"
  //     },
  //     {
  //       recived: true,
  //       message: "Я сломался"
  //     }
  //   ]
  // };

  onClickOpenChat = e => {
    this.setState({ chatOpen: !this.state.chatOpen });
  };

  sendMessage = message => {
    this.ws.send(JSON.stringify(message));
    this.setState({
      messages: [...this.state.messages, message],
      new_message: {
        recived: false,
        message: ""
      }
    });
  };

  _handleSendMessage = e => {
    if (this.state.new_message.message) {
      let message = this.state.new_message;
      this.sendMessage(message);
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
        let message = this.state.new_message;
        this.sendMessage(message);
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
