import { GET_CV } from "@/gql/queries";
import { useQuery } from "@apollo/client";
import { Box, CircularProgress } from "@mui/material";

import React from "react";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

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

  const { resume } = data;

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
      <div
        style={{
          margin: "0 auto",
          objectFit: "cover",
          zoom: "75%"
        }}
      >
        <Viewer
          theme={{
            theme: "dark",
          }}
          fileUrl={resume.cv.url}
        />
        ;
      </div>
    </Worker>
  );
};

export default MyResume;
