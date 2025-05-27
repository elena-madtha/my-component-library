import styled from 'styled-components';

import InputCss from './InputCss';

import colors from 'tokens/colors';
import radii from 'tokens/radii';

// Extend the below as needed
const InputStyled = styled.input`
  ${InputCss};
  border: 1px solid;

  :focus {
    outline: 1px solid ${colors.purple};
    border-radius: ${radii.sharp};
  }
`;

export default InputStyled;