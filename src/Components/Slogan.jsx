import React from 'react';
import './styles/Slogan.css';
import ButtonAgende from './ButtonAgende';

const Slogan = () => {
	return (
		<div className="main-container">
			<div
				className="container-animation"
				data-aos="fade-right"
				data-aos-duration="1000"
			>
				<div className="container-img">
					<img
						src="../../../assets/slogan.jpg"
						alt="Imagem de um de nossos clientes"
					/>
				</div>
				<div className="slogan-container">
					<div>
						<h2>
							Estilo que vai além do corte.{' '}
							<p className="word-contrast">Aqui,</p> seu visual ganha{' '}
							<p className="word-contrast">vida!</p>
						</h2>

						<ButtonAgende>AGENDE UM HORÁRIO</ButtonAgende>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slogan;
