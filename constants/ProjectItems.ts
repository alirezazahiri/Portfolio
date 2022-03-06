// Werewolf
import werewolf from "../assets/projects/werewolf/1.jpg";

// Disney
import disney from "../assets/projects/disney/1.jpg";

// Shop
import shop from "../assets/projects/shop/1.jpg";

// Score Tracker
import scoreTracker from "../assets/projects/scoreTracker/1.jpg";

// Crypto
import cryptoApp from "../assets/projects/crypto/1.jpg";

// Tapsi
import tapsi from "../assets/projects/tapsi/1.jpg";

// Tesla
import tesla from "../assets/projects/tesla/1.png";

// WetheaReact
import weather from "../assets/projects/weathereact/1.png";

export type ProjectItem = {
  id?: string;
  repoName: string;
  image: any;
  title: string;
};

const items: ProjectItem[] = [
  {
    id: "1",
    image: werewolf,
    title: "Werewolf",
    repoName: "WereWolf",
  },
  {
    id: "2",
    image: disney,
    title: "Disney+ Clone",
    repoName: "Disney-Plus-Clone-2020",
  },
  {
    id: "3",
    image: shop,
    title: "Shopping Cart",
    repoName: "Next-Shop",
  },
  {
    id: "4",
    image: scoreTracker,
    title: "Score Tracker",
    repoName: "Score-Tracker",
  },
  {
    id: "5",
    image: cryptoApp,
    title: "Crypto Price List",
    repoName: "Crypto-Next-App",
  },
  {
    id: "6",
    image: tapsi,
    title: "Tapsi Clone",
    repoName: "tap30-clone",
  },
  {
    id: "7",
    image: tesla,
    title: "Tesla Clone",
    repoName: "TESLA-CLONE",
  },
  {
    id: "8",
    image: weather,
    title: "Weather React",
    repoName: "WetheaReact",
  },
];

export default items;
