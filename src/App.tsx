import { useRef, useState } from 'react';
import Mysection from './component/Mysection';
import Head from './component/Head';
import Welcome from './component/Welcome';
import Location from './component/Location';
import Images from './component/Images';
import Aboutus from './component/Aboutus';
import Schedule from './component/Schedule';
import ContactPage from './component/ContactPage';
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
				<Welcome
					backgroundImage={'src/assets/newbg2.jpg'}
					title={'BE DANGEROUS'}
					message={'src/assets/giantstitle.png'}
					image={'src/assets/rotatinggiant.gif'}
					ref={welcomePage}
				/>

				{/* <Mysection
          image={"src/assets/newbg1.jpg"}
          title={"About Us"}
          ref={aboutUsPage}
        /> */}
				<Aboutus
					backgroundImage={'src/assets/newbg1.jpg'}
					title={'About Us'}
					message={
						'Jonah and Parker Edmundson have been training no-gi Jiu Jitsu since July 2020. Jonah earned his purple belt in 2023 under Sterling Redlack of RDC Jiu Jitsu, and Parker earned his blue belt in 2022 under Craig Shintani of Kingdom MMA. The Edmundsons bring a fun, modern approach to the grappling arts, and aim to provide an enjoyable training environment for both hobbyists and competitive athletes. Unique features of Giants Jiu Jitsu include the exclusive focus on no-gi grappling, as well as the weekly wrestling-only and leglock-only classes. Overall, Giants Jiu Jitsu provides members with a fun, competitive training environment and high level grappling instruction'
					}
					pic1={'src/assets/jonahImg.jpg'}
					pic2={'src/assets/parkerImg.jpg'}
					about1={'Jonah Edmunson'}
					about2={'Parker Edmunson'}
					ref={aboutUsPage}
				/>

				{/* <Mysection
					image={'src/assets/bg1.jpg'}
					title={'Schedule'}
					ref={schedulePage}
				/> */}

				<Schedule
					backgroundImage={'src/assets/bg1.jpg'}
					schedule={'/src/assets/current_schedule.png'}
					title={'Schedule'}
					message={'Holidays not included'}
					ref={schedulePage}
				/>

				<Location
					backgroundImage={'src/assets/bg2.jpg'}
					map={'test'}
					title={'Location'}
					message={'Our humble mojo dojo casa house'}
					ref={locationPage}
				/>
				<Images
					backgroundImage={'src/assets/bg3.jpg'}
					img={'Test'}
					title={'Images'}
					message={'Snippets of our dojo'}
					ref={imagePage}
				/>
				{/* <Mysection
					image={'src/assets/bg4.jpg'}
					title={'Contact Us'}
					ref={contactUsPage}
				/> */}
				<ContactPage
					backgroundImage={'src/assets/bg4.jpg'}
					title={'Contact Us'}
					ref={contactUsPage}
				/>
			</div>
		</>
	);
}

export default App;
