/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["media.graphassets.com"],
  },
  env: {
    NEXT_APP_HYGRAPH_URI: process.env.NEXT_APP_HYGRAPH_URI,
    NEXT_APP_PROFILE_ID: process.env.NEXT_APP_PROFILE_ID,
    NEXT_APP_ABOUT_ID: process.env.NEXT_APP_ABOUT_ID,
    NEXT_APP_CV_ID: process.env.NEXT_APP_CV_ID,
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    NEXT_APP_CV_STORYBOOK_ID: process.env.NEXT_APP_CV_STORYBOOK_ID
  },
  experimental: {
    styledComponents: true,
  },
};
