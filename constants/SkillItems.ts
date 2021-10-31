type Item = {
  id: string, 
  title: string,
  value: number,
  gotBadge: boolean
}

const items: Item[] = [
  {
    id: "1",
    title: "HTML5",
    value: 90,
    gotBadge: false
  },
  {
    id: "2",
    title: "CSS3",
    value: 80,
    gotBadge: true
  },
  {
    id: "3",
    title: "Bootstrap",
    value: 80,
    gotBadge: false
  },
  {
    id: "4",
    title: "JavaScript",
    value: 80,
    gotBadge: true
  },
  {
    id: "5",
    title: "ReactJS",
    value: 70,
    gotBadge: true
  },
  {
    id: "6",
    title: "Redux",
    value: 60,
    gotBadge: false
  },
  {
    id: "7",
    title: "Git",
    value: 60,
    gotBadge: true
  },
  {
    id: "8",
    title: "Python",
    value: 40,
    gotBadge: true
  },
  {
    id: "9",
    title: "Django",
    value: 40,
    gotBadge: false
  },
  {
    id: "10",
    title: "Java",
    value: 40,
    gotBadge: false
  },
  {
    id: "11",
    title: "C++",
    value: 40,
    gotBadge: false
  },
  {
    id: "12",
    title: "NextJS",
    value: 30,
    gotBadge: false
  },
  {
    id: "13",
    title: "TypeScript",
    value: 20,
    gotBadge: false
  },
];

export default items;
