import React from 'react';
import './styles/Info.css';
import FrameSvc from './FrameSvc';
import ButtonAgende from './ButtonAgende';
import Gallery from './Gallery';
import Comment from './Comment';

const Info = ({ aos }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
	};

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
				<Gallery aos={aos} />

				<section className="general-comments">
					<div>
						<h2 className="title-avl">Avaliações</h2>
					</div>

					<div className="container-comments">
						<Comment
							name={'Renan A.'}
							comment={
								'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit eligendi, soluta in voluptas tempore temporibus voluptatibus nemo maxime officia recusandae inventore ducimus odit, ipsam ut asperiores aliquam, est explicabo fuga.'
							}
						/>
						<Comment
							name={'Renan A.'}
							comment={
								'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit eligendi, soluta in voluptas tempore temporibus voluptatibus nemo maxime officia recusandae inventore ducimus odit, ipsam ut asperiores aliquam, est explicabo fuga.'
							}
						/>
						<Comment
							name={'Renan A.'}
							comment={
								'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit eligendi, soluta in voluptas tempore temporibus voluptatibus nemo maxime officia recusandae inventore ducimus odit, ipsam ut asperiores aliquam, est explicabo fuga.'
							}
						/>
						<Comment
							name={'Renan A.'}
							comment={
								'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit eligendi, soluta in voluptas tempore temporibus voluptatibus nemo maxime officia recusandae inventore ducimus odit, ipsam ut asperiores aliquam, est explicabo fuga.'
							}
						/>
					</div>
				</section>
			</div>
		</section>
	);
};

export default Info;