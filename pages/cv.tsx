import Resume from "@/components/Resume";
import { useQuery } from "@apollo/client";
import type { NextPage } from "next";

// next deps
import Head from "next/head";

import React from "react";
import { GET_CV_DETAILS } from "@/gql/queries";
import SEO from "@/components/common/SEO";
import { TPageProps } from "@/types/common";
import { VARS } from "@/constants/seoVariables";

const MyResume: NextPage<TPageProps> = ({ meta }) => {
  const { loading, data, error } = useQuery(GET_CV_DETAILS);
  const {
    booksAndCourses = [],
    softSkills = [],
    educations = [],
    technicalSkills = [],
    interests = [],
    recentExperiences = [],
    storyBook = {},
    profile = {},
  } = { ...data };

  return (
    <>
      <SEO meta={meta} />
      <Resume
        isLoading={loading}
        error={error}
        booksAndCourses={booksAndCourses}
        softSkills={softSkills}
        educations={educations}
        technicalSkills={technicalSkills}
        interests={interests}
        recentExperiences={recentExperiences}
        storyBook={storyBook}
        profile={profile}
      />
    </>
  );
};

export function getStaticProps() {
  return {
    props: {
      resume: true,
      meta: {
        title: "My Resume | Alireza Zahiri",
        description: "Innovative, hard-working, and ready to tackle any challenge - introducing Alireza, the Junior JavaScript Developer with a passion for coding and a drive to succeed.",
        ...VARS,
      },
    },
    revalidate: 60 * 60,
  };
}

export default MyResume;
