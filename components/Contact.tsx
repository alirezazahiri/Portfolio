import React from "react";
import withMotion from "../HOC/MotionHOC";
import styled from "styled-components";

import ContactCard from "./common/ContactCard";

// Common
import items from "../constants/ContactItems";

const Contact = () => {
    return (
        <Container>
            <Cards>
                {items.map(item => (
                    <ContactCard key={item.id} {...item} />
                ))}
            </Cards>
        </Container>
    );
};

const Container = styled.div`
    padding: 10% 40px 40px 80px;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 30px;
  @media (min-width: 0) and (max-width: 870px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 870px) and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default withMotion(Contact);