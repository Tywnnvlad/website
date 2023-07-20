import { ClassNames, Image, Button } from '@mantine/core';
import React from 'react';
import { useEffect, useRef } from 'react';

const Mysection = ({ image, headline }) => {
	return (
		// <div className='section'>
		// 	<div className='copy'>
		// 		<h2>Lorem ipsum dolor sit amet.</h2>
		// 	</div>
		// 	<Image
		// 		src='src/assets/bg1.jpg'
		// 		fit='fill'
		// 	/>
		// 	<Button>Down</Button>
		// </div>
		<div className='section'>
			<div className='copy'>
				<h2>{headline}</h2>
			</div>
			<Image
				className='img'
				src={image}
				fit='fill'
			/>
		</div>
	);
};

export default Mysection;
