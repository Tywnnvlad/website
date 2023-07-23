import { useState } from 'react';
import {
	AppShell,
	Header,
	Text,
	MediaQuery,
	Burger,
	useMantineTheme,
	SimpleGrid,
	Button,
	Image,
} from '@mantine/core';

import giantslogo from '../assets/giantslogo.png';
import giantstitle from '../assets/giantstitle.png';

const Head = ({
	refToWelcomePage,
	refToAboutUsPage,
	refToSchedulePage,
	refToLocationPage,
	refToImagePage,
	refToContactUsPage,
}) => {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);

	const scrolltoWelcome = () => {
		if (refToWelcomePage.current) {
			refToWelcomePage.current.scrollIntoView();
		}
	};

	const scrolltoAbout = () => {
		if (refToAboutUsPage.current) {
			refToAboutUsPage.current.scrollIntoView();
		}
	};

	const scrolltoSchedule = () => {
		if (refToSchedulePage.current) {
			refToSchedulePage.current.scrollIntoView();
		}
	};
	const scrolltoLocation = () => {
		if (refToLocationPage.current) {
			refToLocationPage.current.scrollIntoView();
		}
	};
	const scrolltoImage = () => {
		if (refToImagePage.current) {
			refToImagePage.current.scrollIntoView();
		}
	};
	const scrolltoContactUs = () => {
		if (refToContactUsPage.current) {
			refToContactUsPage.current.scrollIntoView();
		}
	};

	return (
		<AppShell
			styles={{
				main: {
					background:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[0],
				},
			}}
			header={
				<Header
					height={{ base: 50, md: 60 }}
					p='md'
					style={{
						background: '#42382C',
						border: '0px',
						opacity: '0.8',
					}}>
					<div
						style={{
							margin: 0,
							padding: 0,
							display: 'flex',
							alignItems: 'center',
							height: '100%',
							justifyContent: 'space-between',
						}}>
						{/* When small */}
						<MediaQuery
							largerThan='sm'
							styles={{ display: 'none' }}>
							<Burger
								opened={opened}
								onClick={() => setOpened((o) => !o)}
								size='sm'
								color={theme.colors.gray[6]}
								mr='xl'
							/>
						</MediaQuery>
						<MediaQuery
							largerThan='sm'
							styles={{
								display: 'none',
							}}>
							<SimpleGrid
								cols={2}
								spacing={3}
								style={{
									justifyItems: 'end',
								}}>
								<Image
									src={giantslogo}
									width='3rem'
									fit='scale-down'
								/>
								<Image
									src={giantstitle}
									width='6.5rem'
									fit='scale-down'
								/>
							</SimpleGrid>
						</MediaQuery>

						<MediaQuery
							smallerThan='sm'
							styles={{ display: 'none' }}>
							<SimpleGrid
								onClick={scrolltoWelcome}
								cols={2}
								spacing={3}
								style={{
									alignItems: 'center',
									justifyItems: 'end',
									cursor: 'pointer',
								}}>
								<Image
									src={giantslogo}
									width='3rem'
									fit='scale-down'
								/>

								<Image
									src={giantstitle}
									width='7rem'
									fit='scale-down'
								/>
							</SimpleGrid>
						</MediaQuery>
						{/* When big */}
						<MediaQuery
							smallerThan='sm'
							styles={{ display: 'none' }}>
							<SimpleGrid
								className='headerButton'
								cols={5}>
								<Button onClick={scrolltoAbout}>About Us</Button>
								<Button onClick={scrolltoSchedule}>Schedule</Button>
								<Button onClick={scrolltoLocation}>Location</Button>
								<Button onClick={scrolltoImage}>Image</Button>
								<Button onClick={scrolltoContactUs}>Contact Us</Button>
							</SimpleGrid>
						</MediaQuery>
						{/* <Text>Application header</Text> */}
					</div>
				</Header>
			}>
			{/* <Text>Resize app to see responsive navbar in action</Text> */}
		</AppShell>
	);
};

export default Head;

import React from 'react';
