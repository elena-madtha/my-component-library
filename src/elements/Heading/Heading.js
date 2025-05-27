import React from 'react';
import PropTypes from 'prop-types';

import HeadingStyled from './HeadingStyled';

const Heading = (props) => <HeadingStyled {...props}>{props.children ? props.children : "Some product."}</HeadingStyled>;

Heading.propTypes = {};

export default Heading;