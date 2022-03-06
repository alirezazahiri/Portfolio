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
  description: string;
};

const items: ProjectItem[] = [
  {
    id: "1",
    image: werewolf,
    title: "Werewolf",
    repoName: "WereWolf",
    description:
      "A React App For Managing Mafia Games Easier, supporting two languages (English & Persian), Click on See Project to jump in!",
  },
  {
    id: "2",
    image: disney,
    title: "Disney+ Clone",
    repoName: "Disney-Plus-Clone-2020",
    description:
      "A React clone for disney + (year 2020) using firebase for auth and redux for state management",
  },
  {
    id: "3",
    image: shop,
    title: "Shopping Cart",
    repoName: "Next-Shop",
    description:
      "A shopping Cart, using fakestoreapi as products API, (Redux, Redux-Thunk, NextJS)",
  },
  {
    id: "4",
    image: scoreTracker,
    title: "Score Tracker",
    repoName: "Score-Tracker",
    description:
      "A react app to manage scores easier than ever, (Material-UI & Sass)",
  },
  {
    id: "5",
    image: cryptoApp,
    title: "Crypto Price List",
    repoName: "Crypto-Next-App",
    description: "cryptocurrency price list with NextJS",
  },
  {
    id: "6",
    image: tapsi,
    title: "Tapsi Clone",
    repoName: "tap30-clone",
    description: "A clone of Tapsi made in react",
  },
  {
    id: "7",
    image: tesla,
    title: "Tesla Clone",
    repoName: "TESLA-CLONE",
    description: "A clone of Tesla made in react",
  },
  {
    id: "8",
    image: weather,
    title: "Weather React",
    repoName: "WetheaReact",
    description: "A Weather App, Using Redux, React and Styled Components",
  },
];

export default items;
