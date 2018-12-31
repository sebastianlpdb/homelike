import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  color: red;
  font-size: 5em;
`;

const Error = props => {
  return (
    <StyledP>
      An error occurred
    </StyledP>
  );
}

export default Error;