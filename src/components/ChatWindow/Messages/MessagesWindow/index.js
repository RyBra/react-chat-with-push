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
  messagesEndRef = React.createRef();

  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    if (this.props.chatOpen) {
      this.scrollToBottom();
    }
    return (
      <MessageWindowWrapper>
        {this.props.messages.map((msg, i) => (
          <TextMessage
            key={i}
            msgText={msg.message}
            recived={msg.recived}
          ></TextMessage>
        ))}
        <div ref={this.messagesEndRef} />
      </MessageWindowWrapper>
    );
  }
}

export default MessagesWindow;
