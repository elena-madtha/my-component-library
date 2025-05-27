import React from 'react';
import PropTypes from 'prop-types';

import InputStyled from './InputStyled';

const Input = ({ name, type }) => <InputStyled minLength="2" className="normal" name={ name } type={ type } placeholder="Some placeholder..." />;

Input.default = {
  type: "text"
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default Input;