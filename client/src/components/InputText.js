import styled from 'styled-components';

const InputText = styled.input`
  background: transparent;
  height: 30px;
  color: ${props => props.color || '#FAFAFA'};

  ${props => props.border && `
    border: ${props => props.border};
    border-radius: 10px;
  `}
`;



export default InputText;