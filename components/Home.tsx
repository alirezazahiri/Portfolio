import Image from "next/image"
import React from "react";
import withMotion from "../HOC/MotionHOC";
import styled from "styled-components";

// assets
import me from "../assets/me.jpg";

// Icons
import MenuBookIcon from "@mui/icons-material/MenuBook";


// Resume PDF

const Home = () => {
    return (
        <Container>
            <Content>
                <ImageContainer>
                    <Image src={me} alt="my photo" aria-hidden="true" role="presentation" />
                </ImageContainer>
                <Welcome>Hey There!</Welcome>
                <NameContainer>
                    <h3>I'M</h3>
                    <h1>ALIREZA ZAHIRI</h1>
                </NameContainer>
                <Description>
                    and I'm a <code>Front-End Developer</code>
                </Description>
                <Resume onClick={() => window.open("/assets/Resume/Alireza-Zahiri.pdf")}>
                    <MenuBookIcon />
                    <span>RESUME</span>
                </Resume>
            </Content>
        </Container>
    );
};

const Container = styled.div`
  padding: 65px 40px 0 80px;
  color: #6e85b2;
  z-index: -1;
`

const Content = styled.div`
  padding: 50px;
  border: 1px solid #1e5f74;
  box-shadow: 0 0 20px #1e5f74;
  border-radius: 12px;
  text-align: center;
  @media (min-width: 0) and (max-width: 870px) {
    border: none;
    box-shadow: none;
    display: flex;
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
    box-sizing: border-box;
    width: 250px;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 20px #d8b9c344;
    border: none;
    @media (min-width: 0) and (max-width: 480px) {
        width: 125px;
    }
`;

const Welcome = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const NameContainer = styled.div`
  letter-spacing: 1px;
  text-align: center;
  align-items: baseline;
  h3 {
    margin-right: 5px;
  }
  h1 {
    color: #d8b9c3;
  }
  @media (min-width: 0) and (max-width: 870px) {
    h1 {
      font-size: 20px;
    }
  }
`;

const Description = styled.p`
  margin-top: 10px;
  font-size: 1.1rem;
  code {
    color: #d8b9c3;
  }
`;

const Resume = styled.div`
  background: #1e5f74;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  padding: 5px;
  border-radius: 14px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 40px #0f044c;
  align-items: center;
  color: #0f044c;
  border-radius: 10px;
  margin-top: 2.5rem;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    font-size: 12px;
  }
  &:hover {
    cursor: pointer;
    background: #6e85b2;
    box-shadow: 0 0 20px #d8b9c388;
  }
`;

export default withMotion(Home);