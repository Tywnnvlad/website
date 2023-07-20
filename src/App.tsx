import { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import Mysection from './component/Mysection';

import './App.css';

function App() {
	return (
		<>
			<div className='container'>
				<Mysection
					image={'src/assets/bg1.jpg'}
					text={'Lorem, ipsum dolor.'}
				/>
				<Mysection
					image={'src/assets/bg2.jpg'}
					text={'Lorem, ipsum dolor.'}
				/>
				<Mysection
					image={'src/assets/bg3.jpg'}
					text={'Lorem, ipsum dolor.'}
				/>
			</div>
		</>
	);
}

export default App;
