import React, { FC } from "react";
import withMotion from "@/HOC/MotionHOC";
import styled from "styled-components";

import ContactCard from "./common/ContactCard";

interface IContacts {
  isLoading: boolean;
  contacts: {
    id: string;
    color: string;
    description: string;
    link: string;
    iconKey: string;
    type: "mail" | null;
  }[];
  error: string;
}

const Contact: FC<IContacts> = ({ isLoading, contacts, error }) => {
  return (
    <Container>
      <Cards>
        {isLoading &&
          [1, 2, 3, 4, 5, 6].map((_) => (
            <ContactCard
              key={_}
              color="#fff"
              description=""
              link=""
              iconKey=""
              type={null}
              isLoading={true}
            />
          ))
         } 
        {!isLoading &&
          contacts.map(({ id, color, description, link, iconKey, type }) => (
            <ContactCard
              key={id}
              {...{ color, description, link, iconKey, type }}
            />
          ))}
      </Cards>
    </Container>
  );
};

const Container = styled.div`
  padding: 10% 40px 40px 80px;
`;

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
