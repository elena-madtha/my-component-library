import React from 'react';
import PropTypes from 'prop-types';

import Label from 'elements/Label/Label';
import Input from 'elements/Input/Input';

import { FormInputStyle } from './FormInputCss';

const FormInput = ({ label, type }) => (
  <div style={FormInputStyle}>
    <Label htmlFor={label}>{label}</Label>
    <Input name={label} type={type} />
  </div>
);

FormInput.default = {
  type: 'text'
};

FormInput.propTypes = {
  /**
   * The label for this input.
   */
  label: PropTypes.string.isRequired,
  /**
   * The type on this input.
   */
  type: PropTypes.string
};

export default FormInput;
