// Icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"; // Home
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"; // About
import CodeIcon from "@mui/icons-material/Code"; // Skills
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined"; // Certifications
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined"; // Projects
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined"; // Contact
import MessageRoundedIcon from '@mui/icons-material/MessageRounded'; // Message Me 

type Item = {
  id?: string,
  icon: any,
  title: string,
  path: string
}

const items: Item[] = [
  {
    id: "1",
    icon: <HomeOutlinedIcon/>,
    title: "HOME",
    path: "/",
  },
  {
    id: "2",
    icon: <PersonOutlineIcon/>,
    title: "ABOUT",
    path: "/about",
  },
  {
    id: "3",
    icon: <CodeIcon/>,
    title: "SKILLS",
    path: "/skills",
  },
  {
    id: "4",
    icon: <VerifiedOutlinedIcon/>,
    title: "CERTIFICATES",
    path: "/certificates",
  },
  {
    id: "5",
    icon: <WorkOutlineOutlinedIcon/>,
    title: "PROJECTS",
    path: "/projects",
  },
  {
    id: "6",
    icon: <LocalPhoneOutlinedIcon/>,
    title: "CONTACT",
    path: "/contact",
  },
  {
    id: "7",
    icon: <MessageRoundedIcon/>,
    title: "MESSAGE",
    path: "/message",
  },
];

export default items;
