import {
	ClassNames,
	Image,
	Button,
	Text,
	BackgroundImage,
} from '@mantine/core';
// import './Mysection.css';
import { useImperativeHandle, forwardRef, useRef } from 'react';

//Proper way of passing and declaring props!
type sectionProp = {
	image: string;
	text: string;
};

const Mysection = forwardRef((props: sectionProp, ref) => {
	const { image, text } = props;
	const compRef = useRef();
	useImperativeHandle(ref, () => ({
		scrollIntoView: () => {
			compRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
		},
	}));
	return (
		<div
			className='section'
			ref={compRef}>
			<div className='copy'>
				<Text
					size='3rem'
					color='white'>
					{text}
				</Text>
			</div>
			<BackgroundImage
				className='img'
				src={image}>
				{/* <Image
				className='img'
				src={image}
				// fit='fill'
			/> */}
			</BackgroundImage>
			<div className='overlay'></div>
		</div>
	);
});

export default Mysection;
