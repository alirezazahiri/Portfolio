import React, { FC } from "react";

// constants
import interests from "@/constants/Interests";

// utils
import { capitalize } from "@/utils/capitalize";

// components
import { Badges, Caption, Title, UnorderedList } from "./Resume.common";

// mui
import { Grid } from "@mui/material";

// types
import {
  TRecentExperiences,
  TBooksAndCourses,
  TEducation,
  TInterests,
  TSoftSkills,
  TStoryBook,
  TTechnicalSkills,
} from "@/types/resume";

export const RecentExperiences: FC<TRecentExperiences> = ({ items }) => (
  <>
    <Title size="lg" text="Recent Experiences" />
    {items.map((item) => (
      <React.Fragment key={item.jobCompany}>
        <Title size="md" pt={2} text={item.jobTitle} />
        <Caption
          pt={2 / 8}
          pb={0}
          color="var(--dark-grey-caption)"
          text={item.jobCompany}
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
  </>
);

export const StoryBook: FC<TStoryBook> = ({ text }) => (
  <>
    <Title size="lg" text="Story Book" />
    <Caption color="var(--dark-grey-caption)" text={text} />
  </>
);

export const Education: FC<TEducation> = ({ items }) => (
  <>
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
  </>
);

export const TechnicalSkills: FC<TTechnicalSkills> = ({ items }) => (
  <>
    <Title size="lg" text="Technical Skills" mention="(in order)" />
    {items.map((item) => (
      <React.Fragment key={item.topic}>
        <Title
          size="md"
          pt={2}
          text={capitalize(item.topic)}
          mention={item?.mention}
        />
        <Caption
          pt={1}
          color="var(--dark-grey-caption)"
          text={item.description}
        />
      </React.Fragment>
    ))}
  </>
);

export const BooksAndCourses: FC<TBooksAndCourses> = ({ items }) => (
  <>
    <Title size="lg" text="Books and Courses" />
    <UnorderedList items={items} />
  </>
);

export const SoftSkills: FC<TSoftSkills> = ({ items }) => (
  <>
    <Title size="lg" text="Soft Skills" />
    <Badges badges={items} />
  </>
);

export const Interests: FC<TInterests> = ({ items }) => (
  <>
    <Title size="lg" text="Interests" />
    <Grid container spacing={2} px={0} py={0}>
      {items.map((item) => (
        <Grid key={item.id} item display="flex" alignItems="center" xs={6}>
          {interests[item.name]}
          <Caption
            text={capitalize(item.name)}
            color="var(--dark-grey-caption)"
          />
        </Grid>
      ))}
    </Grid>
  </>
);
