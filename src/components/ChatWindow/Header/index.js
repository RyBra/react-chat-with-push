import React, { PureComponent as Component } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import ChatName from "./ChatName";

import img from "./cat.svg";

const HeaderWrapper = styled.div`
  background: #fff;
  min-height: 75px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: #000;
  padding: 8px 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseBtn = styled.a`
  position: relative;
  height: 24px;
  width: 24px;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    top: 12px;
    height: 2px;
    width: 100%;
    background-color: #000;
    transform: rotate(45deg);
    border-radius: 2px;
  }

  &:after {
    content: "";
    position: absolute;
    top: 12px;
    height: 2px;
    width: 100%;
    background-color: #000;
    transform: rotate(-45deg);
    border-radius: 2px;
  }
`;

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Avatar
          handleOnClickOpenChat={this.props.handleOnClickOpenChat}
          img={img}
          description={"Vitacat"}
        ></Avatar>
        <ChatName chatName={this.props.chatName}></ChatName>
        <CloseBtn href="#kek"></CloseBtn>
      </HeaderWrapper>
    );
  }
}

export default Header;
