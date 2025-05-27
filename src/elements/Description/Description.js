import React from 'react';
import PropTypes from 'prop-types';

import DescriptionStyled from './DescriptionStyled';

const Description = (props) => <DescriptionStyled {...props}>{props.children ? props.children : "This is a fine flower grown from quality seeds in a garden near you. Price includes pot and saucer."}</DescriptionStyled>;

Description.propTypes = {};

export default Description;