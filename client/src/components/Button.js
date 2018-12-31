import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.primary ? '#24292e' : 'white'};
  color: ${props => props.primary ? 'white' : '#24292e'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #24292e;
  border-radius: 2px;
`;

export default Button;