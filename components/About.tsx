import React, { FC } from "react";
import withMotion from "@/HOC/MotionHOC";
import styled from "styled-components";
import sanitize from "sanitize-html";
import { Skeleton } from "@mui/material";

interface IAbout {
  isLoading?: boolean;
  content: {
    text: string;
  };
  error: string;
}

const About: FC<IAbout> = ({ isLoading, content, error }) => {
  return (
    <Container>
      <Content>
        {isLoading &&
          [30, 50, 60, 80, 40, 20, 70, 55, 65, 75].map((_) => (
            <Skeleton
              key={_}
              variant="rectangular"
              width={`${_}%`}
              height={16}
              sx={{
                margin: "10px auto",
                borderRadius: 4,
                bgcolor: "rgba(0, 30, 60, 50%)",
              }}
            />
          ))}
        {!isLoading && !error && (
          <p
            dangerouslySetInnerHTML={{
              __html: sanitize(content.text.replaceAll("\\n", "")),
            }}
          ></p>
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding-left: 80px;
  padding-right: 20px;
  position: relative;
  color: var(--grayish-blue);
  z-index: -1;
  height: 100vh;
`;

const Content = styled.div`
  width: calc(100% - 100px);
  text-align: center;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  border: 1px solid var(--link-icon-color);
  box-shadow: 0 0 20px var(--link-icon-color);
  border-radius: 12px;
  padding: 60px 50px;
  p {
    font-size: 24px;
    font-weight: 300;
    code {
      color: var(--grey-second);
    }
  }
  @media (min-width: 0) and (max-width: 480px) {
    p {
      font-size: 16px;
      font-weight: 300;
    }
  }
`;

export default withMotion(About);
