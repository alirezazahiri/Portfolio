import React from "react";
import withMotion from "../HOC/MotionHOC";
import CertificateCard from "./common/CertificateCard";
import styled from "styled-components";

// items
import items from "../constants/CertificateItems";

const Certificates = () => {
  return (
    <Container>
      <Content>
        {items.map((item) => <CertificateCard key={item.id} {...item} />)}
      </Content>
    </Container>
  );
};

const Container = styled.div`
    padding: 60px 0;
`

const Content = styled.div`
  padding: 60px 40px 0 80px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  gap: 20px;
`;

export default withMotion(Certificates);