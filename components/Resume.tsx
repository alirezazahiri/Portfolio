import React, { FC } from "react";

// mui
import { Grid, Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

// types
import { TResume } from "@/types/resume";

// components
import ResumeLayout from "@/layout/ResumeLayout";
import {
  BooksAndCourses,
  Education,
  Interests,
  RecentExperiences,
  SoftSkills,
  StoryBook,
  TechnicalSkills,
} from "./common/resume/sections";

const Resume: FC<TResume> = ({
  isLoading,
  error,
  booksAndCourses,
  softSkills,
  educations,
  technicalSkills,
  interests,
  recentExperiences,
  storyBook,
  profile,
}) => {
  if (isLoading)
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

  if (error) return <h1>{error.toString()}</h1>;

  return (
    <ResumeLayout {...profile}>
      <Grid container spacing={1} px={1} py={2}>
        <Grid item xs={6} sx={{ px: 1.5 }}>
          <StoryBook text={storyBook.text} />
          <Education items={educations} />
          <RecentExperiences items={recentExperiences} />
        </Grid>
        <Grid item xs={6} sx={{ px: 1.5 }}>
          <TechnicalSkills items={technicalSkills} />
          <SoftSkills items={softSkills} />
          <BooksAndCourses items={booksAndCourses} />
          <Interests items={interests} />
        </Grid>
      </Grid>
    </ResumeLayout>
  );
};

export default Resume;
