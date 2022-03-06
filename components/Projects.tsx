import React, { useEffect, useState } from "react";
import withMotion from "@/HOC/MotionHOC";
import styled from "styled-components";

import ProjectCard from "./common/ProjectCard";

// Items
import items, { ProjectItem } from "@/constants/ProjectItems";

// services
import { getRepoDetails } from "../services/repo-request";

const Projects = () => {
  const [items_, setItems_] = useState<
    (ProjectItem & { stars: number; topics: string[]; homepage: string })[]
  >([]);

  useEffect(() => {
    const setDetails = async () => {
      const promises = items.map(async (item) => {
        const newItem: ProjectItem & {
          stars: number;
          topics: string[];
          homepage: string;
        } = {
          ...item,
          stars: 0,
          topics: [],
          homepage: "",
        };

        const getDetails = async () => {
          const { data } = await getRepoDetails(item.repoName);
          newItem.stars = data.stars;
          newItem.topics = data.topics;
          newItem.homepage = data.homepage;

          return newItem
        };

        return getDetails();
      });

      const result = await Promise.all(promises);

      setItems_(result);
    };

    setDetails();
  }, []);

  return (
    <Container>
      <Content>
        {items_
          .sort((a, b) => b.stars - a.stars)
          .map(
            ({
              id,
              title,
              description,
              image,
              homepage,
              repoName,
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
          )}
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
