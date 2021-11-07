import React, { FC } from "react";
import styled from "styled-components";
import Image from "next/image"

// type 
import { ProjectItem } from '../../constants/ProjectItems';

type Props = ProjectItem

const ProjectCard: FC<Props> = ({ title, description, image, link, tBadges }) => {
  return (
    <Container>
      <Image src={image} alt={title} onClick={() => window.open(link)} />
      <Info>
        <Title>{title}</Title>
        <ProjectLink onClick={() => window.open(link)}>
          See Project &rarr;
        </ProjectLink>
      </Info>
      <Description>{description}</Description>
      <TechBadges>
        {tBadges.map(badge => <div key={badge}>{badge}</div>)}
      </TechBadges>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    width: 100%;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
  background: linear-gradient(to left, var(--background) 30%, var(--midnight-blue) 100%);
  border: 1px solid var(--link-icon-color);
  box-shadow: 0 0 20px var(--link-icon-color-dark);
  padding: 8px;
  border-radius: 12px;
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
`

export default ProjectCard;