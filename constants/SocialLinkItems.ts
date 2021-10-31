// icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

type Item = {
    id: string;
    feed: string;
    className: string;
    icon: any;
};

const social_items = [
    {
        id: "1",
        feed: "https://www.linkedin.com/in/alireza-zahiri-a2956020a/",
        className: "linked-in",
        icon: LinkedInIcon,
    },
    {
        id: "2",
        feed: "https://github.com/alirezazahiri",
        className: "github",
        icon: GitHubIcon,
    },
    {
        id: "3",
        feed: "https://twitter.com/alirezaaa_zr",
        className: "twitter",
        icon: TwitterIcon,
    },
];

export default social_items;
