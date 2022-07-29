import React, { useEffect, useState } from "react";
import withMotion from "@/HOC/MotionHOC";
import styled from "styled-components";

import ProjectCard from "./common/ProjectCard";

// services
import useProjectsEffect from "hooks/useProjectsEffect";
import { ProjectItem } from "@/types/common";
import { FC } from "react";
import UpdateIcon from "@mui/icons-material/Update";

interface IProjects {
  projects: ProjectItem[];
  isLoading: boolean;
  error: string;
  fetchMore: any;
}

const Projects: FC<IProjects> = ({ fetchMore, isLoading, projects, error }) => {
  const { items, loading, hasNext, clickHandler } = useProjectsEffect(
    projects,
    isLoading,
    fetchMore,
    error
  );
  return (
    <Container>
      <Content>
        {items &&
          items
            .sort((a, b) => b.stars - a.stars)
            .map((item) => <ProjectCard key={item.id} {...item} skeleton={false} />)}
        {loading &&
          "1 2 3"
            .split(" ")
            .map((_) => (
              <ProjectCard
                key={_}
                title=""
                description=""
                image={{ url: "" }}
                homepage=""
                repoName=""
                stars={0}
                topics={[]}
                skeleton={true}
              />
            ))}
        {hasNext && (
          <LoadMoreButton onClick={clickHandler}>
            <p>Load More...</p>
            <UpdateIcon />
          </LoadMoreButton>
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

const LoadMoreButton = styled.div`
  border: 1px solid var(--link-icon-color);
  padding: 10px;
  display: flex;
  color: var(--grayish-blue);
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 12px var(--link-icon-color);
  background: linear-gradient(
    to right,
    var(--background) 30%,
    var(--midnight-blue) 100%
  );
  border-radius: 12px;
  transition: background 0.3s !important;
  &:hover {
    background: linear-gradient(
      to right,
      var(--badged-hover-bg-color) 30%,
      var(--badged-hover-bg-color-2) 100%
    );
    cursor: pointer;
  }
`;

export default withMotion(Projects);
