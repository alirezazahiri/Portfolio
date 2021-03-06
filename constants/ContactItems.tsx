// Icons
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export type ContactItem = {
    id?: string,
    icon: any,
    link: string,
    description: string,
    color: string,
    type?: "mail",
};

const items: ContactItem[] = [
    {
        id: "1",
        icon: <TelegramIcon />,
        link: "https://t.me/alirezza_zr",
        description: "Message Me On Telegram!",
        color: "#0088cc",
    },
    {
        id: "2",
        icon: <EmailIcon />,
        link: "itsalireza.zr@gmail.com",
        description: "Email Me!",
        color: "#EA4335",
        type: "mail",
    },
    {
        id: "3",
        icon: <GitHubIcon />,
        link: "https://github.com/alirezazahiri",
        description: "See my Projects!",
        color: "#f9f9f9",
    },
    {
        id: "4",
        icon: <TwitterIcon />,
        link: "https://twitter.com/alirezaaa_zr",
        description: "Find Me on Twitter!",
        color: "#1da1f2",
    },
    {
        id: "5",
        icon: <InstagramIcon />,
        link: "https://www.instagram.com/alirezza_zr",
        description: "Follow me on Instagram!",
        color: "#bc2a8d",
    },
    {
        id: "6",
        icon: <LinkedInIcon />,
        link: "https://www.linkedin.com/in/alireza-zahiri-a2956020a",
        description: "Connect to my Linked-In!",
        color: "#0a66c2",
    },
];

export default items;
