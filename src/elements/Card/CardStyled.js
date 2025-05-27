import styled from 'styled-components';

import CardCss from './CardCss';

import spacing from "tokens/spacing";

// Extend the below as needed
const CardStyled = styled.div`
  ${CardCss};
  height: auto;
  max-width: 320px;
  min-width: 320px;
  flex: 1 0 33%;
  margin-bottom: ${spacing.tall};
`;

export default CardStyled;