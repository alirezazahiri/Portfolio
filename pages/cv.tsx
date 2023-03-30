import Resume from "@/components/Resume";
import type { NextPage } from "next";
import React from "react";
import { GET_CV_DETAILS } from "@/gql/queries";
import SEO from "@/components/common/SEO";
import { TPageProps } from "@/types/common";
import { VARS } from "@/constants/seoVariables";
import { client } from "@/utils/apollo.client";

const MyResume: NextPage<TPageProps> = ({ meta, data }) => {
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
        isLoading={false}
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

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_CV_DETAILS });
  return {
    props: {
      resume: true,
      meta: {
        title: "My Resume | Alireza Zahiri",
        description: data.storyBook.text,
        ...VARS,
      },
      data,
    },
  };
}

export default MyResume;
