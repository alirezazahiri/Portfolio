// companies 
import hackerrank from '../assets/skills/companies/hackerrank.png';
import quera from "../assets/skills/companies/quera.svg";

// skills 
import git from "../assets/skills/topics/git.png";
import django from "../assets/skills/topics/django.svg";
import react from "../assets/skills/topics/react.png"

export type CertificateItem = {
  id?: string,
  language: string,
  date: string,
  company: string,
  image: string,
  languageImage: string,
  feed: string
}

const items: CertificateItem[] = [
  {
    id: "1",
    language: "Django",
    date: "July 2021",
    company: "Quera",
    image: quera,
    languageImage: django,
    feed: "https://quera.ir/media/public/quera_certificate/9deded3674de42ed8c24d17b17f32c9b.jpg",
  },
  {
    id: "2",
    language: "Git",
    date: "May 2021",
    company: "Quera",
    image: quera,
    languageImage: git,
    feed: "https://quera.ir/media/public/quera_certificate/93e4343b42374ee08e5262d5563ce230.jpg",
  },
  {
    id: "3",
    language: "React",
    date: "October 2021",
    company: "HackerRank",
    image: hackerrank,
    languageImage: react,
    feed: "https://www.hackerrank.com/certificates/897efeab9e9c",
  },
];

export default items;
