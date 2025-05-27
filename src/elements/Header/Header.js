import React from 'react';
import PropTypes from 'prop-types';

import HeaderStyled from './HeaderStyled';

const Header = (props) => <HeaderStyled {...props}>{props.children ? props.children : "Header"}</HeaderStyled>;

Header.propTypes = {};

export default Header;