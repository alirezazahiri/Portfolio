// icons
import YouTubeIcon from "@mui/icons-material/YouTube";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import TerminalIcon from "@mui/icons-material/Terminal";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

type IDict = {
    [name in "youtube" | "music" | "games" | "coding" | "default"]: JSX.Element;
};

const interests: IDict = {
  youtube: <YouTubeIcon fontSize="large" sx={{ pr: 1 }} />,
  music: <MusicNoteIcon fontSize="large" sx={{ pr: 1 }} />,
  games: <SportsEsportsIcon fontSize="large" sx={{ pr: 1 }} />,
  coding: <TerminalIcon fontSize="large" sx={{ pr: 1 }} />,
  default: <EmojiEmotionsIcon fontSize="large" sx={{ pr: 1 }} />,
};

export default interests;
