import React from 'react';
import './styles/About.css';

const About = () => {
	return (
		<section className="container-section" id="about">
			<div
				className="container-animation"
				data-aos="fade-left"
				data-aos-duration="1000"
			>
				<div className="container-xp">
					<p>
						<span>10</span> <br />
						ANOS DE <br />
						EXPERIÊNCIA
					</p>
				</div>

				<div className="container-sobre">
					<div>
						<p className="sobre-titulo">
							QUEM SOMOS <span>?</span>
						</p>
					</div>
					<p className="descricao">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut iste
						sunt tenetur harum praesentium hic voluptas consequuntur ipsa
						eveniet ea, delectus voluptates labore, pariatur deleniti laudantium
						nostrum eos quaerat temporibus. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Consequuntur eos quasi provident,
						cumque pariatur corrupti quos eveniet fugiat incidunt amet sunt
						necessitatibus ipsam adipisci maxime atque repudiandae
						exercitationem impedit molestias! Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Facilis unde excepturi maxime ullam
						ducimus ipsa porro aliquam cupiditate magnam amet architecto ut
						quibusdam dignissimos a placeat quam, quaerat in eius.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
