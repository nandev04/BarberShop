import React from 'react';
import './styles/Gallery.css';

const Gallery = () => {
	return (
		<section
			data-aos="fade-right"
			data-aos-duration="1000"
			className="container-gallery"
			data-aos-anchor-placement="top-bottom"
		>
			<div>
				<h2 className="title-glr">Galeria</h2>
			</div>
			<div className="container-imgs">
				<img src="../../assets/gal-1.jpg" alt="Imagem de cortes de cabelo" />
				<div className="group-2-1">
					<img src="../../assets/gal-2.jpg" alt="Imagem de cortes de cabelo" />
					<img src="../../assets/gal-5.jpg" alt="Imagem de cortes de cabelo" />
				</div>
				<img src="../../assets/gal-3.jpg" alt="Imagem de cortes de cabelo" />
				<img src="../../assets/gal-4.jpg" alt="Imagem de cortes de cabelo" />
				<img src="../../assets/gal-6.jpg" alt="Imagem de cortes de cabelo" />
			</div>
		</section>
	);
};

export default Gallery;
