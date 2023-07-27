import { BackgroundImage, Grid, Container, Text, Image } from "@mantine/core";
import { useImperativeHandle, forwardRef, useRef } from "react";
import { Carousel } from "@mantine/carousel";

type sectionProp = {
  backgroundImage: string;
  img: string;
  title: string;
  message: string;
};

const Images = forwardRef((props: sectionProp, ref) => {
  const { backgroundImage, img, title, message } = props;
  const compRef = useRef();
  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      compRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  }));
  return (
    <div
      className="section"
      ref={compRef}
    >
      <div className="copy">
        <Container size="lg">
          <Grid
            grow
            style={{
              color: "giantsjj.1",
            }}
          >
            <Grid.Col sm={12}>
              <Text size="2rem">{title}</Text>
            </Grid.Col>
            <Grid.Col sm={12}>
              <Text size="2rem">{message}</Text>
            </Grid.Col>
          </Grid>
        </Container>
      </div>

      {/* break */}
      <Carousel
        slideSize="70%"
        height={200}
        slideGap="xs"
        controlsOffset="lg"
        loop
        withIndicators
      >
        <Carousel.Slide>{img}</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
      </Carousel>
      <BackgroundImage
        className="img"
        src={backgroundImage}
      />
      <div className="overlay" />
    </div>
  );
});

export default Images;
