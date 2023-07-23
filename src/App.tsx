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
				<div className='welcomePage'>
					<Mysection
						image={'src/assets/bg1Mobile.jpg'}
						text={'Welcome page'}
						ref={welcomePage}
					/>
				</div>
				<div className='aboutUsPage'>
					<Mysection
						image={'src/assets/bg2.jpg'}
						text={'About Us'}
						ref={aboutUsPage}
					/>
				</div>
				<Mysection
					image={'src/assets/bg3.jpg'}
					text={'Schedule'}
					ref={schedulePage}
				/>
				<Mysection
					image={'src/assets/bg3.jpg'}
					text={'Location'}
					ref={locationPage}
				/>
				<Mysection
					image={'src/assets/bg3.jpg'}
					text={'Image'}
					ref={imagePage}
				/>
				<Mysection
					image={'src/assets/bg3.jpg'}
					text={'Contact Us'}
					ref={contactUsPage}
				/>
			</div>
		</>
	);
}

export default App;
