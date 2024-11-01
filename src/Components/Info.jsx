import React from 'react';
import './styles/Info.css';
import FrameSvc from './FrameSvc';
import ButtonAgende from './ButtonAgende';

const Info = () => {
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
						img={'../../assets/corte-tesoura.svg'}
						description={
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab error necessitatibus totam id nisi, deserunt ex unde natus fugiat, aliquid hic possimus quod quasi. Non doloribus asperiores voluptatibus recusandae?'
						}
					/>
					<FrameSvc
						title={'Barba'}
						img={'../../assets/navalha.svg'}
						description={
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab error necessitatibus totam id nisi, deserunt ex unde natus fugiat, aliquid hic possimus quod quasi. Non doloribus asperiores voluptatibus recusandae?'
						}
					/>
					<FrameSvc
						title={'Corte infantil'}
						img={'../../assets/crianca.svg'}
						description={
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab error necessitatibus totam id nisi, deserunt ex unde natus fugiat, aliquid hic possimus quod quasi. Non doloribus asperiores voluptatibus recusandae?'
						}
					/>
					<FrameSvc
						title={'Coloração'}
						img={'../../assets/pincel.svg'}
						description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab error necessitatibus totam id nisi, deserunt ex unde natus fugiat, aliquid hic possimus quod quasi. Non doloribus asperiores voluptatibus recusandae?`}
					/>
				</div>
				<div className="container-btn">
					<ButtonAgende>AGENDE UM HORÁRIO</ButtonAgende>
				</div>
			</div>
		</section>
	);
};

export default Info;
