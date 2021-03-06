import React, { useEffect, useState } from "react";
import withMotion from "@/HOC/MotionHOC";
import styled from "styled-components";

import ProjectCard from "./common/ProjectCard";

// Items
import items from "@/constants/ProjectItems";

// services
import useProjectsEffect from "hooks/useProjectsEffect";

const Projects = () => {
  const [items_] = useProjectsEffect(items);
  return (
    <Container>
      <Content>
        {items_.length
          ? items_
              .sort((a, b) => b.stars - a.stars)
              .map(
                ({
                  id,
                  title,
                  image,
                  repoName,
                  homepage,
                  description,
                  stars,
                  topics,
                }) => (
                  <ProjectCard
                    key={id}
                    title={title}
                    description={description}
                    image={image}
                    homepage={homepage}
                    repoName={repoName}
                    stars={stars}
                    topics={topics}
                  />
                )
              )
          : items.map((item) => <ProjectCard key={item.id} skeleton={true} />)}
      </Content>
    </Container>
  );
};

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 30px;
  padding: 80px 40px 80px 80px;
  @media (min-width: 0) and (max-width: 870px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 870px) and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default withMotion(Projects);
