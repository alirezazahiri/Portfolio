import React, { FC } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Skeleton } from "@mui/material";

// type

import { dateToString } from "@/utils/dateToString";
import { CertificateItem } from "@/types/common";

type Props = CertificateItem;

const CertificateCard: FC<Props> = ({
  language,
  languageImage,
  date,
  company,
  image,
  feed,
  isLoading,
}) => {
  return isLoading ? (
    <Container>
      <ImageContainer>
        <Skeleton
          animation="wave"
          variant="circular"
          width="100%"
          height="90px"
          sx={{ bgcolor: "rgba(0, 30, 60, 50%)" }}
        />
      </ImageContainer>
      <Info>
        <Language>
          <Skeleton
            animation="wave"
            height={30}
            width="80px"
            sx={{ bgcolor: "rgba(0, 30, 60, 50%)" }}
          />
        </Language>
        <div>
          <Date>
            <Skeleton
              animation="wave"
              height={30}
              width="80px"
              sx={{ bgcolor: "rgba(0, 30, 60, 50%)" }}
            />
          </Date>
          <Button>
            <Skeleton
              animation="wave"
              height={30}
              width="80px"
              sx={{ bgcolor: "rgba(0, 30, 60, 50%)" }}
            />
          </Button>
        </div>
      </Info>
      <ImageContainer>
        <Skeleton
          animation="wave"
          variant="circular"
          width="100%"
          height="90px"
          sx={{ bgcolor: "rgba(0, 30, 60, 50%)" }}
        />
      </ImageContainer>
    </Container>
  ) : (
    <Container onClick={() => window.open(feed)}>
      <ImageContainer>
        <Image src={languageImage} alt={language} width="100%" height="100%" />
      </ImageContainer>
      <Info>
        <Language>
          <code>{language}</code>
        </Language>
        <div>
          <Date>{dateToString(date)}</Date>
          <Button>
            <Company>{company}</Company>
          </Button>
        </div>
      </Info>
      <ImageContainer>
        <Image src={image} alt={company} width="100%" height="100%" />
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  border-radius: 14px;
  background: linear-gradient(
    to left,
    var(--background) 30%,
    var(--midnight-blue) 100%
  );
  border: 1px solid var(--link-icon-color);
  box-shadow: 0 0 12px var(--link-icon-color);
  cursor: pointer;
  @media (min-width: 0) and (max-width: 480px) {
    flex-direction: column;
    padding: 15px 20px;
  }
`;

const ImageContainer = styled.div`
  width: 100px;
  background: none;
  padding: 10px;
  border-radius: 14px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 40px;
  div {
    text-align: center;
    margin-top: 8px;
  }
  @media (min-width: 0) and (max-width: 480px) {
    margin: 0 20px;
  }
`;

const Language = styled.h4`
  font-size: 20px;
  color: var(--grey-second);
  code {
    font-size: 25px;
    font-weight: 300;
  }
`;

const Date = styled.p`
  font-size: 16px;
  color: var(--link-icon-color);
  margin: 8px 0;
`;

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  color: var(--grey-second-dark);
  &:hover {
    outline: none;
    color: var(--grey-second);
  }
`;

const Company = styled.h3`
  color: var(--company-color);
  font-size: 24px;
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
`;

export default CertificateCard;
