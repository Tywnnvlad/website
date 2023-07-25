import { useRef, useState } from 'react';
import { MantineProvider } from '@mantine/core';
import Mysection from './component/Mysection';
import Head from './component/Head';

import './App.css';

function App() {
	const welcomePage = useRef(null);
	const aboutUsPage = useRef(null);
	const schedulePage = useRef(null);
	const locationPage = useRef(null);
	const imagePage = useRef(null);
	const contactUsPage = useRef(null);

	return (
		<>
			<div className='container'>
				<Head
					refToWelcomePage={welcomePage}
					refToAboutUsPage={aboutUsPage}
					refToSchedulePage={schedulePage}
					refToLocationPage={locationPage}
					refToImagePage={imagePage}
					refToContactUsPage={contactUsPage}
				/>

				<Mysection
					image={'src/assets/newbg2.jpg'}
					title={'Welcome page'}
					ref={welcomePage}
				/>

				<Mysection
					image={'src/assets/newbg1.jpg'}
					title={'About Us'}
					ref={aboutUsPage}
				/>

				<Mysection
					image={'src/assets/bg1.jpg'}
					title={'Schedule'}
					ref={schedulePage}
				/>
				<Mysection
					image={'src/assets/bg2.jpg'}
					title={'Location'}
					ref={locationPage}
				/>
				<Mysection
					image={'src/assets/bg3.jpg'}
					title={'Image'}
					ref={imagePage}
				/>
				<Mysection
					image={'src/assets/bg4.jpg'}
					title={'Contact Us'}
					ref={contactUsPage}
				/>
			</div>
		</>
	);
}

export default App;
