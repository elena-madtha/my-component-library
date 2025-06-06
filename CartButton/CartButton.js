import React from 'react';
import PropTypes from 'prop-types';

import CartSymbol from 'elements/CartSymbol/CartSymbol';

import { CartButtonStyle, CartButtonCountStyle } from './CartButtonCss';

const CartButton = ({ itemCount = 0 }) => (
  <div style={CartButtonStyle}>
    <a href="/checkout">
      <div style={CartButtonCountStyle}>{itemCount}</div>
      <CartSymbol />
    </a>
  </div>
);

CartButton.propTypes = {
  /**
   * Number of items in cart.
   */
  itemCount: PropTypes.number
};

export default CartButton;
