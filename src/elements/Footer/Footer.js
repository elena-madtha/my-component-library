import React from 'react';
import PropTypes from 'prop-types';

import FooterStyled from './FooterStyled';

const Footer = (props) => <FooterStyled {...props}>{props.children ? props.children : "Footer"}</FooterStyled>;

Footer.propTypes = {};

export default Footer;