import React from 'react';
import logo from '../../assets/logo-barber.svg';
import './styles/Header.css';

const Header = () => {
	return (
		<header>
			<div className="containerLogo">
				<img src={logo} alt="logo da barber shop" width={35} />
				<span>Barber Shop</span>
			</div>

			<nav className="containerNav">
				<li>Home</li>
				<li>About</li>
				<li>Gallery</li>
				<li>Contact</li>
			</nav>
		</header>
	);
};

export default Header;
