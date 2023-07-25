import {
	ClassNames,
	Image,
	Skeleton,
	Text,
	BackgroundImage,
	Container,
	Grid,
} from '@mantine/core';
// import './Mysection.css';
import { useImperativeHandle, forwardRef, useRef } from 'react';

//Proper way of passing and declaring props!
type sectionProp = {
	image: string;
	title: string;
};

const child = (
	<Skeleton
		height={140}
		radius='md'
		animate={false}
	/>
);

const Mysection = forwardRef((props: sectionProp, ref) => {
	const { image, title } = props;
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
				<Container size='30rem'>
					<Grid
						grow
						style={{
							color: 'white',
						}}>
						<Grid.Col xl={12}>
							<Text
								size='3rem'
								color='white'>
								{title}
							</Text>
						</Grid.Col>
						<Grid.Col xl={8}>
							<Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
								dolores ipsam quaerat inventore laborum. Ad perspiciatis optio
								dolor dolorem quos. Eum quisquam harum accusamus, molestiae
								tempora nisi quo! Aut, asperiores?
							</Text>
						</Grid.Col>
						<Grid.Col xl={4}>
							<Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Sapiente rem totam ipsum.
							</Text>
						</Grid.Col>
						<Grid.Col xl={4}>{child}</Grid.Col>
						<Grid.Col xl={8}>{child}</Grid.Col>
					</Grid>
				</Container>
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
