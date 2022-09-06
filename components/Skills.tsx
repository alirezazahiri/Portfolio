import React, { FC, useEffect, useState } from "react";
import withMotion from "@/HOC/MotionHOC";
import styled from "styled-components";

// Common
import SkillCard from "./common/SkillCard";
import UpdateIcon from "@mui/icons-material/Update";
import { SKILLS_SLICE } from "@/constants/common.constants";

interface ISkills {
  isLoading: boolean;
  skills: {
    id: string;
    name: string;
    progress: number;
    gotBadge: boolean;
  }[];
  error: string;
  fetchMore: any;
}

const Skills: FC<ISkills> = ({ isLoading, skills, error, fetchMore }) => {
  const [hasNext, setHasNext] = useState(true);
  const [loading, setLoading] = useState(isLoading);

  const clickHandler = async () => {
    if (skills.length % SKILLS_SLICE === 0) {
      setLoading(true);
      const { data } = await fetchMore({
        variables: {
          after: skills.length ? skills[skills.length - 1].id : null,
        },
      });
      if (data.skills.length == 0) {
        setHasNext(false);
        setLoading(false);
      }
    } else setHasNext(false);
  };

  useEffect(() => {
    setLoading(isLoading);
    if (skills.length % SKILLS_SLICE) setHasNext(false);
  }, [skills.length, isLoading]);

  return (
    <Container>
      <SkillsContainer>
        {skills &&
          [...skills]
            .sort((a, b) => b.progress - a.progress)
            .map((item) => <SkillCard key={item.id} item={item} />)}
        {loading &&
          "1 2 3 4 5 6 7 8 9"
            .split(" ")
            .map((_) => (
              <SkillCard
                key={_}
                item={{ id: "", name: "", progress: 0, gotBadge: false }}
                isLoading={true}
              />
            ))}
      </SkillsContainer>
      {hasNext && !loading && (
        <LoadMoreButton onClick={clickHandler}>
          <p>Load More...</p>
          <UpdateIcon />
        </LoadMoreButton>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 65px 40px 0 80px;
  color: var(--grayish-blue);
  z-index: -1;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  margin-top: 40px;
  gap: 15px;
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

export default withMotion(Skills);
