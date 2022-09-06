import React, { FC } from "react";
import { Grid, Box } from "@mui/material";
import { Badges, Caption, Title, UnorderedList } from "./common/Resume.Common";
import interests from "@/constants/Interests";
import CircularProgress from "@mui/material/CircularProgress";
import { ApolloError } from "@apollo/client";
import ResumeLayout, { IFooterProps, IHeaderProps } from "@/layout/ResumeLayout";

const StoryBook = (text: string) => (
  <Grid item xs={6}>
    <Title size="lg" text="Story Book" />
    <Caption color="var(--dark-grey-caption)" text={text} />
  </Grid>
);

const RecentExperiences = (
  items: {
    id: string;
    jobTitle: string;
    jobCompany: string;
    time: string;
    location: string;
    description: string;
  }[]
) => (
  <Grid item xs={6}>
    <Title size="lg" text="Recent Experiences" />
    {items.map((item) => (
      <React.Fragment key={item.jobCompany}>
        <Title size="md" pt={2} text={item.jobTitle} />
        <Caption
          pt={2 / 8}
          pb={0}
          color="var(--dark-grey-caption)"
          text={item.jobTitle}
        />
        <Caption
          pt={2 / 8}
          pb={0}
          color="var(--prog-bar-light-blue)"
          text={item.time}
        />
        <Caption
          pt={2 / 8}
          pb={0}
          color="var(--grayish-blue)"
          text={item.location}
        />
        <Caption
          pt={6 / 8}
          color="var(--dark-grey-caption)"
          text={item.description}
        />
      </React.Fragment>
    ))}
  </Grid>
);

const TechnicalSkills = (
  items: { id: string; topic: string; description: string; mention: string }[]
) => (
  <Grid item xs={6} height="fit-content">
    <Title size="lg" text="Technical Skills" mention="(in order)" />
    {items.map((item) => (
      <React.Fragment key={item.topic}>
        <Title size="md" pt={2} text={item.topic} mention={item?.mention} />
        <Caption
          pt={1}
          color="var(--dark-grey-caption)"
          text={item.description}
        />
      </React.Fragment>
    ))}
  </Grid>
);

const Education = (
  items: {
    id: string;
    collegeName: string;
    level: string;
    time: string;
    location: string;
    description: string;
  }[]
) => (
  <Grid item xs={6}>
    <Title size="lg" text="Education" />
    {items.map((item) => (
      <React.Fragment key={item.collegeName}>
        <Title size="md" pt={2} text={item.collegeName} />
        <Caption
          pt={2 / 8}
          pb={0}
          color="var(--dark-grey-caption)"
          text={item.level}
        />
        <Caption
          pt={2 / 8}
          pb={0}
          color="var(--prog-bar-light-blue)"
          text={item.time}
        />
        <Caption
          pt={2 / 8}
          pb={0}
          color="var(--grayish-blue)"
          text={item.location}
        />
        <Caption
          pt={6 / 8}
          color="var(--dark-grey-caption)"
          text={item.description}
        />
      </React.Fragment>
    ))}
  </Grid>
);

const BooksAndCourses = (items: { id: string; title: string }[]) => (
  <Grid item xs={6}>
    <Title size="lg" text="Books and Courses" />
    <UnorderedList items={items} />
  </Grid>
);

const SoftSkills = (items: { id: string; title: string }[]) => {
  <Grid item xs={6}>
    <Title size="lg" text="Soft Skills" />
    <Badges badges={items} />
  </Grid>;
};

const Interests = (items: { id: string; name: keyof typeof interests }[]) => (
  <Grid item xs={6}>
    <Title size="lg" text="Interests" />
    <Grid container spacing={2} px={0} py={0}>
      {items.map((item) => (
        <Grid key={item.id} item display="flex" alignItems="center" xs={6}>
          {interests[item.name]}
          <Caption
            text={
              item.name[0].toUpperCase() +
              item.name
                .split("")
                .map((char, index) => {
                  if (index === 0) return "";
                  return char.toLowerCase();
                })
                .join("")
            }
            color="var(--dark-grey-caption)"
          />
        </Grid>
      ))}
    </Grid>
  </Grid>
);

interface IResume {
  isLoading: boolean;
  error?: ApolloError;
  booksAndCourses: { id: string; title: string }[];
  softSkills: { id: string; title: string }[];
  educations: {
    id: string;
    level: string;
    location: string;
    time: string;
    collegeName: string;
    description: string;
  }[];
  technicalSkills: {
    id: string;
    topic: string;
    description: string;
    mention: string;
  }[];
  interests: {
    id: string;
    name: "youtube" | "music" | "games" | "coding" | "default";
  }[];
  recentExperiences: {
    id: string;
    jobTitle: string;
    jobCompany: string;
    time: string;
    location: string;
    description: string;
  }[];
  storyBook: { id: string; text: string };
  profile: IHeaderProps & IFooterProps;
}

const Resume: FC<IResume> = ({
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
      <Grid container spacing={2} px={1} py={2}>
        {StoryBook(storyBook.text)}
        {RecentExperiences(recentExperiences)}
        {Education(educations)}
        {TechnicalSkills(technicalSkills)}
        {SoftSkills(softSkills)}
        {BooksAndCourses(booksAndCourses)}
        {Interests(interests)}
      </Grid>
    </ResumeLayout>
  );
};

export default Resume;
