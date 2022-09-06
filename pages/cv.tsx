import Resume from "@/components/Resume";
import { useQuery } from "@apollo/client";
import type { NextPage } from "next";

// next deps
import Head from "next/head";

import React from "react";
import { GET_CV_DETAILS } from "../gql/queries";

const MyResume: NextPage = (props) => {
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
    <div>
      <Head>
        <title>My Resume | Alireza Zahiri</title>
        <meta name="description" content="Contact, Alireza Zahiri" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </div>
  );
};

export function getServerSideProps() {
  return {
    props: {
      resume: true,
    },
  };
}

export default MyResume;
