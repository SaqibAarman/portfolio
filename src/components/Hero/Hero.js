import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm{" "}
        <span
          style={{
            fontSize: "36px",
            color: "white",
            backgroundImage:
              "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)",
          }}
        >
          Saqib Ahmed
        </span>{" "}
        , Full Stack Developer who can develop both client and server software.
        In addition to mastering HTML and CSS, I'm also knows how to: Program a
        browser (like using JavaScript, React, Next.js) Program a server (like
        using Node,Express.js) And database (Mongodb, psql, firebase, mySql).
      </SectionText>
      <Button onclick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
