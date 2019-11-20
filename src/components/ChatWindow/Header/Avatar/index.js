import React, { PureComponent as Component } from "react";
import styled from "styled-components";
import img from "./cat.svg";

const AvatarWrapper = styled.div`
  border-radius: 50%;
  align-self: center;
  padding: 10px;
`;

class Avatar extends Component {
  render() {
    // const avatar = this.props.avatar;

    const avatar = {
      img: img,
      description: "KOTE"
    };

    return (
      <AvatarWrapper>
        <img src={avatar.img} alt={avatar.description} />
      </AvatarWrapper>
    );
  }
}

export default Avatar;
