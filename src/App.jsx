import About from './Components/About';
import Header from './Components/Header';
import Info from './Components/Info';
import Slogan from './Components/Slogan';
import './app.css';

import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
	React.useEffect(() => {
		AOS.init({
			anchorPlacement: 'top-bottom',
			once: false,
		});
	}, []);

	return (
		<>
			<Header aos={AOS} />
			<Slogan aos={AOS} />
			<About aos={AOS} />
			<Info aos={AOS} />
		</>
	);
}

export default App;
