import React, { PureComponent as Component, Fragment } from "react";
import styled from "styled-components";
import cat from "./cat.svg";

const TextMessageWrapper = styled.div`
  ${props =>
    props.recived
      ? `
      position: relative;
      color: white;
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
      margin-left: auto;
      margin-right: 24px;

      &:after {
        content: '';
        position: absolute;
        left: -48px;
        top: 3px;
        background: url(${cat});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        min-width: 35px;
        min-height: 35px;
        border-radius: 50%;
        align-self: center;
        margin-right: 15px;
      }`
      : `
      color: #263238;
      background-color: #f4f7f9;
      margin-left: 24px;
      margin-right: auto;
      `}

  max-width: calc(100% - 140px);
  word-wrap: break-word;
  padding: 17px 20px;
  border-radius: 6px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  white-space: pre-wrap;
  margin-bottom: 24px;
`;

class TextMessage extends Component {
  render() {
    return (
      <Fragment>
        <TextMessageWrapper recived={false}>
          Сообщение клиента
        </TextMessageWrapper>
        <TextMessageWrapper recived={true}>Ответ от бота</TextMessageWrapper>
      </Fragment>
    );
  }
}

export default TextMessage;
