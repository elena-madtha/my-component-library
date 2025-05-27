import React from 'react';
import PropTypes from 'prop-types';

import LabelStyled from './LabelStyled';

const Label = (props) => <LabelStyled htmlFor={props.htmlFor} {...props}>{props.children ? props.children : "Label"}</LabelStyled>;

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired
};

export default Label;