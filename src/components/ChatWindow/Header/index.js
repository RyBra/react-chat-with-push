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
  height: 40px;
  width: 60px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    top: 19px;
    right: 6px;
    height: 2px;
    width: 24px;
    background-color: #000;
    transform: rotate(45deg);
    border-radius: 2px;
  }

  &:after {
    content: "";
    position: absolute;
    top: 19px;
    right: 6px;
    height: 2px;
    width: 24px;
    background-color: #000;
    transform: rotate(-45deg);
    border-radius: 2px;
  }

  &:hover {
    background: -o-linear-gradient(
      260.92deg,
      #ac32e4 0%,
      #7918f2 47.87%,
      #4801ff 100%
    );
    background: linear-gradient(
      189.08deg,
      #ac32e4 0%,
      #7918f2 47.87%,
      #4801ff 100%
    );
    &:before,
    &:after {
      background-color: #f1f1f1;
      transition: 0.3s ease-in-out;
    }
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
        <CloseBtn onClick={this.props.handleOnClickOpenChat}></CloseBtn>
      </HeaderWrapper>
    );
  }
}

export default Header;
