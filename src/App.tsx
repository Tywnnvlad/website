import { useRef, useState } from "react";
import Mysection from "./component/Mysection";
import Head from "./component/Head";
import Welcome from "./component/Welcome";
import Location from "./component/Location";
import Images from "./component/Images";
import "./App.css";

function App() {
  const welcomePage = useRef(null);
  const aboutUsPage = useRef(null);
  const schedulePage = useRef(null);
  const locationPage = useRef(null);
  const imagePage = useRef(null);
  const contactUsPage = useRef(null);

  return (
    <>
      <div className="container">
        <Head
          refToWelcomePage={welcomePage}
          refToAboutUsPage={aboutUsPage}
          refToSchedulePage={schedulePage}
          refToLocationPage={locationPage}
          refToImagePage={imagePage}
          refToContactUsPage={contactUsPage}
        />
        <Welcome
          backgroundImage={"src/assets/newbg2.jpg"}
          title={"Welcome GIANT"}
          message={""}
          image={"src/assets/rotatinggiant.gif"}
          ref={welcomePage}
        />

        <Mysection
          image={"src/assets/newbg1.jpg"}
          title={"About Us"}
          ref={aboutUsPage}
        />

        <Mysection
          image={"src/assets/bg1.jpg"}
          title={"Schedule"}
          ref={schedulePage}
        />
        <Location
          backgroundImage={"src/assets/bg2.jpg"}
          map={"test"}
          title={"Location"}
          message={"Our humble mojo dojo casa house"}
          ref={locationPage}
        />
        <Images
          backgroundImage={"src/assets/bg3.jpg"}
          img={"Test"}
          title={"Images"}
          message={"Snippets of our dojo"}
          ref={imagePage}
        />
        <Mysection
          image={"src/assets/bg4.jpg"}
          title={"Contact Us"}
          ref={contactUsPage}
        />
      </div>
    </>
  );
}

export default App;
