import React from 'react';
import './styles/ButtonAgende.css';
import PropTypes from 'prop-types';

const ButtonAgende = ({ children }) => {
	return <button className="btn">{children}</button>;
};

ButtonAgende.propTypes = {
	children: PropTypes.any,
};

export default ButtonAgende;
