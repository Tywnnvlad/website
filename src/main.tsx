import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { MantineProvider } from '@mantine/core';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MantineProvider
			withCSSVariables
			withNormalizeCSS
			withGlobalStyles
			theme={{
				colors: {
					giantsjj: [
						'#A19D99',
						'#948573',
						'#797670',
						'#806F5F',
						'#776A57',
						'#745F48',
						'#42382C',
						'#322E2A',
						'#1B1816',
						'#000000',
					],
				},
				primaryColor: 'giantsjj',
			}}>
			<App />
		</MantineProvider>
	</React.StrictMode>
);
