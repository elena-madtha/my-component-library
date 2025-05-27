import React from 'react';
import PropTypes from 'prop-types';

import ImageStyled from './ImageStyled';

const Image = (props) => <ImageStyled src={props.url} {...props} />;

Image.propTypes = {
  /**
   * The URL for the image to use.
   */
  url: PropTypes.string.isRequired,
  /**
   * The height of the element in pixels. Defaults to "296px".
   */
  height: PropTypes.string,
  /**
   * Should this have hard (sharp) corners? Defaults to false (rounded corners).
   */
  hardCorners: PropTypes.bool
};

Image.defaultProps = {
  height: '296px',
  hardCorners: false
};

export default Image;
