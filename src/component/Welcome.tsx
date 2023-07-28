import { BackgroundImage, Grid, Container, Text, Image } from "@mantine/core";
import { useImperativeHandle, forwardRef, useRef } from "react";

type sectionProp = {
  backgroundImage: string;
  image: string;
  title: string;
  message: string;
};

const Welcome = forwardRef((props: sectionProp, ref) => {
  const { backgroundImage, image, title, message } = props;
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
          <Grid grow>
            <Grid.Col sm={12}>
              <center>
                <Image
                  src={message}
                  height={"150px"}
                  width={"auto"}
                />
              </center>
              {/* <Text
                size="2rem"
                color="white"
              >
                {message}
              </Text> */}
            </Grid.Col>
            <Grid.Col sm={12}>
              <center>
                <Image
                  src={image}
                  height={"300px"}
                  width={"auto"}
                />
              </center>
            </Grid.Col>
            <Grid.Col sm={12}>
              <Text
                size="2rem"
                color="giantsjj.1"
              >
                {title}
              </Text>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
      <BackgroundImage
        className="img"
        src={backgroundImage}
      />
      <div className="overlay" />
    </div>
  );
});

export default Welcome;
