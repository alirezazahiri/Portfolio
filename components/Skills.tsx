import React from "react";
import withMotion from "@/HOC/MotionHOC";
import styled from "styled-components";
import items from "@/constants/SkillItems";

// Common
import SkillCard from "./common/SkillCard";

const Skills = () => {
  return (
    <Container>
      <SkillsContainer>
        {items.sort((a, b) => b.value - a.value).map(item => <SkillCard key={item.id} item={item} />)}
      </SkillsContainer>
    </Container>
  );
};

const Container = styled.div`
    padding: 65px 40px 0 80px;
    color: var(--grayish-blue);
    z-index: -1;
`

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

export default withMotion(Skills);