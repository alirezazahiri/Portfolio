// Icons
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

type Item = {
    id: string,
    icon: any,
    link: string,
    description: string,
    color: string,
    type?: "mail",
};

const items: Item[] = [
    {
        id: "1",
        icon: TelegramIcon,
        link: "https://t.me/i_ali_zr",
        description: "Message Me On Telegram!",
        color: "#0088cc",
    },
    {
        id: "2",
        icon: EmailIcon,
        link: "itsalireza.zr@gmail.com",
        description: "Email Me!",
        color: "#EA4335",
        type: "mail",
    },
    {
        id: "3",
        icon: GitHubIcon,
        link: "https://github.com/alirezazahiri",
        description: "See my Projects!",
        color: "#f9f9f9",
    },
    {
        id: "4",
        icon: TwitterIcon,
        link: "https://twitter.com/alirezaaa_zr",
        description: "Find Me on Twitter!",
        color: "#1da1f2",
    },
];

export default items;
