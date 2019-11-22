import React, { PureComponent as Component } from "react";
import styled from "styled-components";
import chat_close_icon from "./img/cat_sleep.svg";
import chat_open_icon from "./img/cat.svg";

const LauncherWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(
    189.08deg,
    #ac32e4 0%,
    #7918f2 47.87%,
    #4801ff 100%
  );
  background-image: url(${({ chatOpen }) =>
    chatOpen ? chat_open_icon : chat_close_icon});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  right: 25px;
  bottom: 25px;
  border-radius: 50%;
  box-shadow: none;
  transition: 0.3s ease-in-out;

  &:before {
    content: "";
    position: relative;
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    transition: 0.3s ease-in-out;
  }

  &.sc-open-icon {
    transform: rotate(-360deg);
  }

  &.sc-closed-icon {
    transform: rotate(360deg);
  }
`;

class Launcher extends Component {
  render() {
    return (
      <LauncherWrapper
        className={this.props.chatOpen ? "sc-open-icon" : "sc-closed-icon"}
        chatOpen={this.props.chatOpen}
        onClick={this.props.handleOnClickOpenChat}
      ></LauncherWrapper>
    );
  }
}

export default Launcher;
