import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonIcon from "@mui/icons-material/Person";

const ICON_DICT: { [key: string]: JSX.Element } = {
  telegram: <TelegramIcon />,
  email: <EmailIcon />,
  github: <GitHubIcon />,
  twitter: <TwitterIcon />,
  linkedin: <LinkedInIcon />,
  instagram: <InstagramIcon />,
};

export const getIconFromKey = (key: string): JSX.Element => {
  return ICON_DICT[key] || <PersonIcon />;
};
