import React from 'react';
import './styles/FrameSvc.css';

const FrameSvc = ({ title, description, img }) => {
	return (
		<div className="conteiner-frame">
			<div>
				<h1 className="frame-title">{title}</h1>
				<img src={img} alt="ícone correspondente ao título" />
			</div>
			<p className="frame-description">{description}</p>
		</div>
	);
};

export default FrameSvc;
