import React from "react";
import withMotion from "@/HOC/MotionHOC";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <Content>
        <p>
          Welcome to my <code>Portfolio</code>,<br />
          Where i tell more about myself and my work,
          <br />
          I started programming, since i entered University,
          <br />
          After 3 months i started exploring different programming languages
          (like <code>Java, C++, Python</code>),
          <br />
          And after all i found myself more attracted to{" "}
          <code>Web Programming</code> than other stuff,
          <br />
          And now here i am, with most of my experience in{" "}
          <code>Front-End development</code>,<br />
          Working on my skills and always <code>improving</code> my knowledge,{" "}
          <code>passionate</code> about learning stuff, and <code>caring</code>,
          <br />
          Feel free to take a look at rest of my website.
        </p>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding-left: 80px;
  padding-right: 20px;
  position: relative;
  color: var(--grayish-blue);
  z-index: -1;
  height: 100vh;
`;

const Content = styled.div`
  width: calc(100% - 100px);
  text-align: center;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  border: 1px solid var(--link-icon-color);
  box-shadow: 0 0 20px var(--link-icon-color);
  border-radius: 12px;
  padding: 60px 50px;
  p {
    font-size: 24px;
    font-weight: 300;
    code {
      color: var(--grey-second);
    }
  }
  @media (min-width: 0) and (max-width: 870px) {
    border: none;
    box-shadow: none;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
`;

export default withMotion(About);
