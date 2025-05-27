import styled from 'styled-components';

import FormCss from './FormCss';

import spacing from 'tokens/spacing';

// Extend the below as needed
const FormStyled = styled.form`
  ${FormCss};
  margin: 0 auto;
  margin-top: ${spacing.tall};
  margin-bottom: ${spacing.tall};
  padding: ${spacing.spacious};
  height: auto;
`;

export default FormStyled;