import React from "react";
import { Grid, Typography } from "@mui/material";
import { Badges, Caption, Title, UnorderedList } from "./common/Resume.Common";
import interests from "@/constants/Interests";

const StoryBook = (text: string) => (
  <Grid item xs={6}>
    <Title size="lg" text="Story Book" />
    <Caption color="var(--dark-grey-caption)" text={text} />
  </Grid>
);

const RecentExperiences = (
  items: {
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

const TechnicalSkills = (items: { topic: string; description: string }[]) => (
  <Grid item xs={6} height="fit-content">
    <Title size="lg" text="Technical Skills" mention="(in order)" />
    {items.map((item) => (
      <React.Fragment key={item.topic}>
        <Title size="md" pt={2} text={item.topic} />
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

const BooksAndCourses = (items: string[]) => (
  <Grid item xs={6}>
    <Title size="lg" text="Books and Courses" />
    <UnorderedList items={items} />
  </Grid>
);

const SoftSkills = (items: string[]) => {
  <Grid item xs={6}>
    <Title size="lg" text="Soft Skills" />
    <Badges badges={items} />
  </Grid>;
};

const Interests = (items: { name: keyof typeof interests }[]) => (
  <Grid item xs={6}>
    <Title size="lg" text="Interests" />
    <Grid container spacing={2} px={0} py={0}>
      {items.map((item) => (
        <Grid item display="flex" alignItems="center" xs={6}>
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

const Resume = () => {
  return (
    <Grid container spacing={2} px={1} py={2}>
      {/* {StoryBook()}
      {RecentExperiences()}
      {Education()}
      {TechnicalSkills()}
      {SoftSkills()}
      {BooksAndCourses()}
      {Interests()} */}
    </Grid>
  );
};

export default Resume;
