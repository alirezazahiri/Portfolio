import React, { FC } from "react";
import styled from "styled-components";
import Image from "next/image";

// type
import { ProjectItem } from "@/constants/ProjectItems";

// MUI
import StarIcon from "@mui/icons-material/Star";

// types
import { RepoDetailsType } from "@/types/common";

type Props = ProjectItem & RepoDetailsType;

const ProjectCard: FC<Props> = ({
  title,
  description,
  image,
  homepage,
  repoName,
  stars,
  topics
}) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={image} alt={title} />
        <div className="overlay">
          <div className="content">
            <div className="top">
              <h3>{stars}</h3>
              <StarIcon />
            </div>
            <div className="bottom">
              <button
                onClick={() =>
                  window.open(`https://github.com/alirezazahiri/${repoName}`)
                }
              >
                View Repository
              </button>
            </div>
          </div>
        </div>
      </ImageContainer>
      <Info>
        <Title>
          <code>{title}</code>
        </Title>
        <ProjectLink onClick={() => window.open(homepage)}>
          See Project &rarr;
        </ProjectLink>
      </Info>
      <Description>{description}</Description>
      <TechBadges>
        {topics.map((badge) => (
          <div key={badge}>{badge}</div>
        ))}
      </TechBadges>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(
    to left,
    var(--background) 30%,
    var(--midnight-blue) 100%
  );
  border: 1px solid var(--link-icon-color);
  box-shadow: 0 0 20px var(--link-icon-color-dark);
  padding: 8px;
  border-radius: 12px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 225px !important;
  img {
    width: 100vw !important;
    height: 225px !important;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }

  .overlay {
    border-radius: 12px;
    position: absolute;
    top: 8px;
    left: 8px;
    bottom: 0;
    right: 8px;
    height: 225px;
    width: calc(100%-16px);
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0.9);
    cursor: pointer;
    .content {
      color: var(--background-alt);
      font-size: 20px;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
      .top {
        display: flex;
        align-items: center;
        letter-spacing: 10px;
        transition: all 0.5s;
        &:hover {
          color: var(--grayish-blue);
        }
      }
      .bottom {
        button {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1px;
          background: none;
          outline: none;
          border: 1px solid var(--midnight-blue);
          margin-top: 5px;
          padding: 5px;
          color: var(--background-alt);
          text-transform: uppercase;
          cursor: pointer; 
          transition: all 0.5s;
          &:hover {
            border: 1px solid var(--grayish-blue);
            background-color: var(--background);
            color: var(--grayish-blue);
          }
        }
      }
    }
  }

  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 5px;
  @media (min-width: 0) and (max-width: 870px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  letter-spacing: 1.5px;
  color: var(--grey-second);
  font-size: 28px;
  font-weight: 400;
  padding: 0 10px;
  @media (max-width: 870px) {
    font-size: 25px;
  }
  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const Description = styled.div`
  margin-top: 10px;
  line-break: break;
  color: var(--grey-second-medium);
  font-size: 17px;
  font-weight: 400;
  padding: 0 10px 5px;
  @media (max-width: 870px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const ProjectLink = styled.button`
  background: none;
  outline: none;
  border: none;
  color: var(--grey-second-dark);
  padding: 0 10px;
  &:hover {
    outline: none;
    cursor: pointer;
    color: var(--grey-second);
  }

  animation-name: left-right;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes left-right {
    0% {
      transform: translateX(2px);
    }
    50% {
      transform: translateX(-4px);
    }
    100% {
      transform: translateX(2px);
    }
  }
`;

const TechBadges = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 5px;
  div {
    margin-left: 2px;
    background-color: var(--tech-badge-bg);
    color: var(--tech-badge-text);
    width: fit-content;
    padding: 3px 5px;
    border-radius: 20px;
    font-size: 12px;
    &:hover {
      cursor: pointer;
      color: var(--white);
      background-color: var(--tech-badge-text);
    }
  }
`;

export default ProjectCard;
