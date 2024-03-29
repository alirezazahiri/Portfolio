import Resume from "@/components/Resume";
import type { NextPage } from "next";
import React from "react";
import { GET_CV_DETAILS } from "@/gql/queries";
import SEO from "@/components/common/SEO";
import { TPageProps } from "@/types/common";
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

// const getData = async () => {
//   return await client.query({ query: GET_CV_DETAILS, fetchPolicy: "no-cache" });
// };

// export async function getStaticProps() {
export async function getServerSideProps() {
  // const { data } = await getData();

  // return {
  //   props: {
  //     resume: true,
  //     meta: {
  //       title: "My Resume | Alireza Zahiri",
  //       description: data.storyBook.text,
  //       pagename: "رزومه",
  //     },
  //     data,
  //   },
  //   revalidate: 1, // each second
  // };
  return {
    redirect: {
      destination: "/",
      permanent: true,
    },
  };
}

export default MyResume;
