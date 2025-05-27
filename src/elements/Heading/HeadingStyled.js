import styled from 'styled-components';

import HeadingCss from './HeadingCss';

import spacing from "tokens/spacing";

// Extend the below as needed
const HeadingStyled = styled.h2`
  ${HeadingCss};
  margin: 0 0 ${spacing.big} 0;
`;

export default HeadingStyled;