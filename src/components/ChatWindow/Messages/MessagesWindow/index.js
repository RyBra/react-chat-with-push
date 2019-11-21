import React, { PureComponent as Component } from "react";
import styled from "styled-components";
import TextMessage from "./TextMessage";
const MessageWindowWrapper = styled.div`
  height: 80%;
  overflow-y: auto;
  background-color: white;
  background-size: 100%;
  padding: 40px 0px;
`;

class MessagesWindow extends Component {
  render() {
    return (
      <MessageWindowWrapper>
        <TextMessage></TextMessage>
      </MessageWindowWrapper>
    );
  }
}

export default MessagesWindow;
