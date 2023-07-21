import { ClassNames, Image, Button, Text } from "@mantine/core";
// import './Mysection.css';
import { useEffect, useRef } from "react";

//Proper way of passing and declaring props!
type sectionProp = {
  image: string;
  text: string;
};

const Mysection = (props: sectionProp) => {
  const { image, text } = props;
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
    <div className="section">
      <div className="copy">
        <Text
          size="3rem"
          color="white"
        >
          {text}
        </Text>
      </div>
      <Image
        className="img"
        src={image}
        fit="fill"
      />
      <div className="overlay"></div>
    </div>
  );
};

export default Mysection;
