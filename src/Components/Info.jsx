import React from 'react';
import './styles/Info.css';
import FrameSvc from './FrameSvc';
import ButtonAgende from './ButtonAgende';
import Gallery from './Gallery';

// Carousel-Embla
import EmblaCarousel from './Carousel/src/js/EmblaCarousel';
import './Carousel/src/css/embla.css';

const reviewsDetails = [
	{
		name: 'Renan A.',
		comment:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur natus tempore, sapiente architecto voluptates, sit exercitationem quaerat quas sequi est ab. Nobis voluptatum eum tempora eligendi molestias harum laboriosam optio.',
	},
	{
		name: 'Mariana A.',
		comment:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur natus tempore, sapiente architecto voluptates, sit exercitationem quaerat quas sequi est ab. Nobis voluptatum eum tempora eligendi molestias harum laboriosam optio.',
	},
	{
		name: 'Fernanda B.',
		comment:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur natus tempore, sapiente architecto voluptates, sit exercitationem quaerat quas sequi est ab. Nobis voluptatum eum tempora eligendi molestias harum laboriosam optio.',
	},
	{
		name: 'Vitória A.',
		comment:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur natus tempore, sapiente architecto voluptates, sit exercitationem quaerat quas sequi est ab. Nobis voluptatum eum tempora eligendi molestias harum laboriosam optio.',
	},
	{
		name: 'Felipe B.',
		comment:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur natus tempore, sapiente architecto voluptates, sit exercitationem quaerat quas sequi est ab. Nobis voluptatum eum tempora eligendi molestias harum laboriosam optio.',
	},
];

const OPTIONS = { loop: true };

const SLIDES = reviewsDetails;

const Info = ({ aos }) => {
	return (
		<section className="container-info">
			<div
				className="container-animation"
				data-aos="fade-right"
				data-aos-duration="1000"
			>
				<div>
					<h2 className="title-svc">Nossos serviços</h2>
				</div>
				<div className="container-services">
					<FrameSvc
						title={'Corte'}
						img={'/assets/corte-tesoura.svg'}
						description={
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab error necessitatibus totam id nisi, deserunt ex unde natus fugiat, aliquid hic possimus quod quasi. Non doloribus asperiores voluptatibus recusandae?'
						}
					/>
					<FrameSvc
						title={'Barba'}
						img={'/assets/navalha.svg'}
						description={
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab error necessitatibus totam id nisi, deserunt ex unde natus fugiat, aliquid hic possimus quod quasi. Non doloribus asperiores voluptatibus recusandae?'
						}
					/>
					<FrameSvc
						title={'Corte infantil'}
						img={'/assets/crianca.svg'}
						description={
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab error necessitatibus totam id nisi, deserunt ex unde natus fugiat, aliquid hic possimus quod quasi. Non doloribus asperiores voluptatibus recusandae?'
						}
					/>
					<FrameSvc
						title={'Coloração'}
						img={'/assets/pincel.svg'}
						description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab error necessitatibus totam id nisi, deserunt ex unde natus fugiat, aliquid hic possimus quod quasi. Non doloribus asperiores voluptatibus recusandae?`}
					/>
				</div>
				<div className="container-btn">
					<ButtonAgende>AGENDE UM HORÁRIO</ButtonAgende>
				</div>
				<Gallery aos={aos} />

				<section className="general-comments">
					<div>
						<h2 className="title-avl">Avaliações</h2>
					</div>

					<div className="container-comments">
						<EmblaCarousel slides={SLIDES} options={OPTIONS} />
					</div>
				</section>
			</div>
		</section>
	);
};

export default Info;
