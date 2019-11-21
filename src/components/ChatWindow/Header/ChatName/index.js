import React, { PureComponent as Component } from "react";
import styled from "styled-components";

const ChatNameWrapper = styled.div`
  border-radius: 50%;
  align-self: center;
  padding: 10px;
  width: 100%;
`;

class ChatName extends Component {
  render() {
    return <ChatNameWrapper>{this.props.chatName}</ChatNameWrapper>;
  }
}

export default ChatName;
