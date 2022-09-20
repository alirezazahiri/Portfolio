import Resume from "@/components/Resume";
import { useQuery } from "@apollo/client";
import type { NextPage } from "next";

// next deps
import Head from "next/head";

import React from "react";
import { GET_CV_DETAILS } from "@/gql/queries";
import SEO from "@/components/common/SEO";
import { TPageProps } from "@/types/common";

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

export function getServerSideProps() {
  return {
    props: {
      resume: true,
      meta: {
        title: "My Resume | Alireza Zahiri",
        desc: "alireza zahiri, cv, resume, alireza zahiri portfolio, vercel, nextjs, next, alireza, zahiri",
      },
    },
  };
}

export default MyResume;
