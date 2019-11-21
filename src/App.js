import React, { PureComponent as Component } from "react";
import ChatWindow from "./components/ChatWindow";
import Launcher from "./components/Launcher";

class App extends Component {
  state = {
    chatOpen: false
  };

  onClickOpenChat = e => {
    this.setState({ chatOpen: !this.state.chatOpen });
  };

  render() {
    return (
      <div>
        <ChatWindow handleOnClickOpenChat={this.onClickOpenChat}></ChatWindow>
        <Launcher
          chatOpen={this.state.chatOpen}
          handleOnClickOpenChat={this.onClickOpenChat}
        ></Launcher>
      </div>
    );
  }
}

export default App;
