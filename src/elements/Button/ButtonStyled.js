import styled from 'styled-components';

import ButtonCss from './ButtonCss';

// Extend the below as needed
const ButtonStyled = styled.button`
  ${ButtonCss};
  cursor: pointer;
  transition: 0.15s;
`;

export default ButtonStyled;