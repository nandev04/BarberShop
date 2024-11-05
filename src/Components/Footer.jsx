import React from 'react';
import WhatsAppIcon from '../../assets/whatsapp.svg?react';
import InstagramIcon from '../../assets/instagram.svg?react';
import './styles/Footer.css';

const Footer = () => {
	return (
		<footer className="container-footer">
			<div className="container-content-footer">
				<h3 className="title-footer">
					Entre em <p>contato</p> conosco <p>!</p>
				</h3>
				<div className="social-media">
					<a href="https://www.whatsapp.com/">
						<WhatsAppIcon />
					</a>
					<a href="https://www.instagram.com/">
						<InstagramIcon />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
