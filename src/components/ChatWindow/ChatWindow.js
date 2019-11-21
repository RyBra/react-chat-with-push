import React, { PureComponent as Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import MessagesWindow from "./Messages/MessagesWindow";
import MessageInput from "./Messages/MessageInput";

const ChatWindowWrapper = styled.div`
  width: 370px;
  height: calc(100% - 120px);
  max-height: 590px;
  position: fixed;
  right: 25px;
  bottom: 100px;
  box-sizing: border-box;
  box-shadow: 0px 7px 40px 2px rgba(148, 149, 150, 0.3);
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s ease-in-out;
  border-radius: 10px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

class ChatWindow extends Component {
  render() {
    const { handleOnClickOpenChat } = this.props;
    return (
      <ChatWindowWrapper>
        <Header
          handleOnClickOpenChat={handleOnClickOpenChat}
          chatName="VitaCat"
        ></Header>
        <MessagesWindow></MessagesWindow>
        <MessageInput placeholder="Сообщение"></MessageInput>
      </ChatWindowWrapper>
    );
  }
}

export default ChatWindow;
