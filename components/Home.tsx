import Image from "next/image"
import React from "react";
import withMotion from "../HOC/MotionHOC";
import styled from "styled-components";
import { useRouter } from "next/router";

// assets
import me from "../assets/me.jpg";

// Icons
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Home = () => {
  const router = useRouter()
  
  return (
        <Container>
            <Content>
                <ImageContainer>
                    <Image src={me} alt="my photo" aria-hidden="true" role="presentation" />
                </ImageContainer>
                <Welcome>Hey There!</Welcome>
                <NameContainer>
                    <h3>I&apos;M</h3>
                    <h1>ALIREZA ZAHIRI</h1>
                </NameContainer>
                <Description>
                    and I&apos;m a <code>Front-End Developer</code>
                </Description>
                <Resume onClick={() => router.push("/alireza-zahiri")}>
                    <MenuBookIcon />
                    <span>RESUME</span>
                </Resume>
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
  padding: 50px;
  border: 1px solid var(--link-icon-color);
  box-shadow: 0 0 20px var(--link-icon-color);
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
    box-shadow: 0 0 20px var(--grey-second-dark);
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
    color: var(--grey-second);
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
    color: var(--grey-second);
  }
`;

const Resume = styled.div`
  background: var(--link-icon-color);
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  padding: 5px;
  border-radius: 14px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 40px var(--dark-blue);
  align-items: center;
  color: var(--dark-blue);
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
    background: var(--grayish-blue);
    box-shadow: 0 0 20px var(--grey-second)88;
  }
`;

export default withMotion(Home);