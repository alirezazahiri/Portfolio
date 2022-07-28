import React, { FC } from "react";
import withMotion from "@/HOC/MotionHOC";
import CertificateCard from "./common/CertificateCard";
import styled from "styled-components";

// items
// import items from "@/constants/CertificateItems";

interface ICertificates {
  isLoading: boolean;
  certificates: {
    id: string;
    name: string;
    companyName: string;
    companyImage: { url: string };
    certificateUrl: string;
    skillImage: { url: string };
    date: string;
  }[];
  error: string;
}

const Certificates: FC<ICertificates> = ({
  isLoading,
  certificates,
  error,
}) => {
  return (
    <Container>
      <Content>
        {isLoading &&
          [1, 2, 3].map((_) => (
            <CertificateCard
              key={_}
              language={""}
              languageImage={""}
              date={""}
              company={""}
              image={""}
              feed={""}
              isLoading={true}
            />
          ))}
        {!isLoading &&
          certificates &&
          certificates.map(
            ({
              id,
              name,
              companyName,
              companyImage,
              certificateUrl,
              skillImage,
              date,
            }) => (
              <CertificateCard
                key={id}
                language={name}
                languageImage={skillImage.url}
                date={date}
                company={companyName}
                image={companyImage.url}
                feed={certificateUrl}
              />
            )
          )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 60px 0;
`;

const Content = styled.div`
  padding: 60px 40px 0 80px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  gap: 20px;
`;

export default withMotion(Certificates);
