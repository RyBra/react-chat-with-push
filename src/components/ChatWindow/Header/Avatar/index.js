import React, { PureComponent as Component } from "react";
import styled from "styled-components";

const AvatarWrapper = styled.div`
  border-radius: 50%;
  align-self: center;
  padding: 10px;
`;

class Avatar extends Component {
  render() {
    return (
      <AvatarWrapper>
        <img src={this.props.img} alt={this.props.description} />
      </AvatarWrapper>
    );
  }
}

export default Avatar;
