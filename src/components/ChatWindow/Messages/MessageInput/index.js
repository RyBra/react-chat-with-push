import React, { PureComponent as Component } from "react";
import styled from "styled-components";

const MessageInputWrapper = styled.form`
  min-height: 55px;
  margin: 0px;
  position: relative;
  bottom: 0;
  display: flex;
  background-color: #f4f7f9;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: background-color 0.2s ease, -webkit-box-shadow 0.2s ease;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  transition: background-color 0.2s ease, box-shadow 0.2s ease,
    -webkit-box-shadow 0.2s ease;
`;

const Input = styled.input`
  width: 100%;
  resize: none;
  border: none;
  outline: none;
  border-bottom-left-radius: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 18px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.33;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: #565867;
  -webkit-font-smoothing: antialiased;
  max-height: 200px;
  overflow: scroll;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: 0px -5px 20px 0px rgba(150, 165, 190, 0.2);
`;

const Button = styled.button`
  width: 15%;
  height: 55px;
  display: flex;
  justify-content: center;
  border: none;
  border-left: 1px solid #f1f1f1;
  svg {
    fill: #686b79;
    height: 20px;
    width: 20px;
    cursor: pointer;
    -ms-flex-item-align: center;
    align-self: center;
    outline: none;

    &:hover {
      fill: #333;
    }
  }
`;

class MessageInput extends Component {
  render() {
    return (
      <MessageInputWrapper>
        <Input placeholder={this.props.placeholder}></Input>
        <Button>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="37.393px"
            height="37.393px"
            viewBox="0 0 37.393 37.393"
            enableBackground="new 0 0 37.393 37.393"
          >
            <g id="Layer_2">
              <path d="M36.511,17.594L2.371,2.932c-0.374-0.161-0.81-0.079-1.1,0.21C0.982,3.43,0.896,3.865,1.055,4.241l5.613,13.263 L2.082,32.295c-0.115,0.372-0.004,0.777,0.285,1.038c0.188,0.169,0.427,0.258,0.67,0.258c0.132,0,0.266-0.026,0.392-0.08 l33.079-14.078c0.368-0.157,0.607-0.519,0.608-0.919S36.879,17.752,36.511,17.594z M4.632,30.825L8.469,18.45h8.061 c0.552,0,1-0.448,1-1s-0.448-1-1-1H8.395L3.866,5.751l29.706,12.757L4.632,30.825z"></path>
            </g>
          </svg>
        </Button>
      </MessageInputWrapper>
    );
  }
}

export default MessageInput;
