/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["media.graphassets.com"],
  },
  env: {
    NEXT_APP_HYGRAPH_URI:
      "https://api-us-west-2.hygraph.com/v2/cl64zbv668lze01t306uq3fb9/master",
    NEXT_APP_PROFILE_ID: "cl66aj52prtna0cn7w27wma2e",
    NEXT_APP_ABOUT_ID: "cl66c2menwvy60bn72bsijbme",
    NEXT_APP_CV_ID: "cl66qtuxj69n10bn79wr8u0pj",
  },
};
