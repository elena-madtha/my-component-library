import React from 'react';
import PropTypes from 'prop-types';

import Image from 'elements/Image/Image';
import Description from 'elements/Description/Description';
import IconButton from 'components/IconButton/IconButton';

import {
  CheckoutItemOuter,
  CheckoutItemImage,
  CheckoutItemContents,
  CheckoutItemMinus,
  CheckoutItemPlus,
  Ellipsis
} from './CheckoutItemCss';

const CheckoutItem = ({ name, count, price, imageUrl, addItemToCart, removeItemFromCart }) => {
  return (
    <div style={CheckoutItemOuter}>
      <div style={CheckoutItemImage}>
        <Image hardCorners height="144px" url={imageUrl} />
      </div>
      <div style={CheckoutItemContents}>
        <div>
          <Description right bold style={Ellipsis}>
            {name}
          </Description>
          <Description right bold purple style={Ellipsis}>
            {count} x {price} $
          </Description>
        </div>
        <div>
          <div style={CheckoutItemMinus}>
            <IconButton minus onClickEvent={removeItemFromCart} />
          </div>
          <div style={CheckoutItemPlus}>
            <IconButton plus onClickEvent={addItemToCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {
  /**
   * Name of product.
   */
  name: PropTypes.string.isRequired,
  /**
   * Quantity of this product.
   */
  count: PropTypes.number.isRequired,
  /**
   * Price of the product.
   */
  price: PropTypes.number.isRequired,
  /**
   * The URL for this image.
   */
  imageUrl: PropTypes.string.isRequired,
  /**
   * Function to add a single item of this product to the cart.
   */
  addItemToCart: PropTypes.func.isRequired,
  /**
   * Function to remove a single item of this product to the cart.
   */
  removeItemFromCart: PropTypes.func.isRequired
};

export default CheckoutItem;
