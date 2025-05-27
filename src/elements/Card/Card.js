import React from 'react';
import PropTypes from 'prop-types';

import CardStyled from './CardStyled';

const Card = (props) => <CardStyled {...props}>{props.children ? props.children : ""}</CardStyled>;

Card.propTypes = {};

export default Card;