import { GET_CV } from "@/gql/queries";
import { useQuery } from "@apollo/client";
import { Box, CircularProgress } from "@mui/material";
import styled from "styled-components";
import React from "react";

const MyResume = () => {
  const { loading, data, error } = useQuery(GET_CV);

  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <CircularProgress size={100} />
      </Box>
    );

  if (error) return <h1>404 - NOT FOUND</h1>;

  const {
    resume: {
      cv: { url },
    },
  } = data;

  return <Embed src={url} type="application/pdf" />;
};

const Embed = styled.embed`
  width: 100%;
  height: calc(100vh - 4px);
`;

export default MyResume;
