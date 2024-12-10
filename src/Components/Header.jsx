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
				<ul>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#gallery">Gallery</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
