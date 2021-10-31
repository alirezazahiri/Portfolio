import React from "react";
import withMotion from "../HOC/MotionHOC";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <Content>
        <p>
          I started programming since i came to university, and then i tried
          different <code>Programming Languages </code>
          and figured out that i like Front-End developement the most. until now
          i have a <code>2 years</code> coding experience in
          <code> HTML5, CSS3, Javascript</code> & <code>ReactJS</code>
        </p>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 65px 40px 0 80px;
  color: var(--grayish-blue);
  z-index: -1;
`

const Content = styled.div`
  margin-top: 150px;
  border: 1px solid var(--link-icon-color);
  box-shadow: 0 0 20px var(--link-icon-color);
  border-radius: 12px;
  padding: 100px 50px;
  text-align: center;
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
    width: 100vw;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
`;

export default withMotion(About);