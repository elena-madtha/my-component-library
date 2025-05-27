import React from 'react';
import PropTypes from 'prop-types';

import Card from 'elements/Card/Card';
import Image from 'elements/Image/Image';
import Heading from 'elements/Heading/Heading';
import Description from 'elements/Description/Description';
import Button from 'elements/Button/Button';

import { ProductCardContentsStyle } from './ProductCardCss';

const ProductCard = ({ imageUrl, heading, description, price, id, addItemToCart }) => (
  <Card>
    <Image url={imageUrl} />
    <div style={ProductCardContentsStyle}>
      <Heading>{heading}</Heading>
      <Description>{description}</Description>
      <Button id={id} onClick={addItemToCart}>
        {price} $
      </Button>
    </div>
  </Card>
);

ProductCard.propTypes = {
  /**
   * The URL for this image.
   */
  imageUrl: PropTypes.string.isRequired,
  /**
   * Heading of the product, typically the name of the product.
   */
  heading: PropTypes.string.isRequired,
  /**
   * The description for this product.
   */
  description: PropTypes.string.isRequired,
  /**
   * Price of the product.
   */
  price: PropTypes.number.isRequired,
  /**
   * The ID of the product.
   */
  id: PropTypes.string.isRequired,
  /**
   * Function to call when adding an item to the card (gets passed down to Button element).
   */
  addItemToCart: PropTypes.func.isRequired
};

export default ProductCard;
