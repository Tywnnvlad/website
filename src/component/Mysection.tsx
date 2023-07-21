import { ClassNames, Image, Button, Text } from "@mantine/core";
// import './Mysection.css';
import { useEffect, useRef } from "react";

const Mysection = ({ image, text }) => {
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
