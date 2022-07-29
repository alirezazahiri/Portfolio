import Image from "next/image";
import React, { FC } from "react";
import withMotion from "@/HOC/MotionHOC";
import styled from "styled-components";
import { useRouter } from "next/router";

// Icons
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Skeleton } from "@mui/material";

interface IHome {
  isLoading?: boolean;
  profile: {
    emojie: string;
    statusText: string;
    profileImage: {
      url: string;
    };
  };
  error: string;
}

const Home: FC<IHome> = ({ isLoading, profile, error }) => {
  const router = useRouter();

  return (
    <>
      <Container>
        <Content>
          <ImageContainer>
            {isLoading && (
              <>
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width="100%"
                  height="100%"
                  sx={{ bgcolor: "rgba(0, 30, 60, 30%)" }}
                />
              </>
            )}
            {!isLoading && !error && (
              <>
                <Image
                  src={profile.profileImage.url}
                  layout="fill"
                  alt="my photo"
                />
                <Status
                  emojie={profile.emojie}
                  statusText={profile.statusText}
                ></Status>
              </>
            )}
          </ImageContainer>
          <Welcome>Hey There!</Welcome>
          <NameContainer>
            <h3>I&apos;M</h3>
            <h1>ALIREZA ZAHIRI</h1>
          </NameContainer>
          <Description>
            and I&apos;m a <code>Front-End Developer</code>
          </Description>
          <Resume onClick={() => router.push("/cv")}>
            <MenuBookIcon />
            <span>RESUME</span>
          </Resume>
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding-left: 80px;
  padding-right: 20px;
  position: relative;
  color: var(--grayish-blue);
  z-index: 0;
  height: 100vh;
`;

const Content = styled.div`
  padding: 50px;
  border: 1px solid var(--link-icon-color);
  box-shadow: 0 0 20px var(--link-icon-color);
  border-radius: 12px;
  width: calc(100% - 100px);
  text-align: center;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  @media (min-width: 0) and (max-width: 870px) {
    border: none;
    box-shadow: none;
    display: flex;
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  box-sizing: border-box;
  margin: auto;
  position: relative;
  width: 240px;
  height: 240px;
  box-shadow: 0 0 20px var(--grey-second-dark);
  border-radius: 50%;
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  border: none;
  @media (min-width: 0) and (max-width: 480px) {
    width: 120px;
    height: 120px;
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
    margin-bottom: 5px;
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
  font-weight: 500;
  text-align: center;
  padding: 5px;
  border-radius: 14px;
  box-shadow: 0 0 40px var(--dark-blue);
  color: var(--dark-blue);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation-name: width-change-reverse;
  animation-duration: 0.3s;
  animation-timing-function: linear;
  width: fit-content;
  margin: 25px auto 0;
  cursor: pointer;
  span {
    font-size: 1rem;
  }
  &:hover {
    background: var(--grayish-blue);
    box-shadow: 0 0 20px var(--grey-second) 88;
    animation-name: width-change;
    animation-duration: 0.3s;
    animation-timing-function: linear;
    width: 100%;
    svg {
      padding-left: 5px;
    }
    span {
      padding-right: 5px;
    }
  }
`;

interface IStatus {
  emojie: string;
  statusText: string;
}

const Status = styled.div`
  position: absolute;
  left: 70%;
  bottom: 0;
  width: fit-content;
  background-color: #000;
  padding: 5px;
  border-radius: 16px;
  font-size: 0.85rem;
  border: 1px solid var(--midnight-blue);
  cursor: pointer;
  transition: all 0.3s;
  &:before {
    content: "${(props: IStatus) => props.emojie}";
  }
  &:hover {
    padding: 5px 9px 6px 5px;
    &:after {
      content: "${(props: IStatus) => " " + props.statusText}";
    }
  }
`;

export default withMotion(Home);
