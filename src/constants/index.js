import {
  c,
  python,
  java,
  cpp,
  typescript,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
  swift,
  moods,
  ram_watcher,
  jsurf,
  ribit,
  liberty,
  lsfx,
  causeway
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Python", icon: python },
  { title: "TypeScript", icon: typescript },
  { title: "Swift", icon: swift },
  { title: "C++", icon: cpp },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Intern Software Engineer",
    company_name: "Liberty IT",
    icon: liberty,
    iconBg: "#161329",
    date: "June 2023 - September 2024",
    points: [
      "Helped design and implement authentication systems for an Certainly.",
      "Worked closely with cross-functional teams, facilitating seamless communication between security teams and UX designers to ensure user-friendly yet robust solutions.",
      "Leveraged agile development practices to deliver industry-grade products, conducted threat modeling, performed code analysis, and managed bug resolution.",
      "Also presented technical solutions and progress updates to key stakeholders and clientele."
    ],
  },
  {
    title: "Runner and Camera Crew",
    company_name: "LSFX Productions",
    icon: lsfx,
    iconBg: "#161329",
    date: "May 2023 - September 2023",
    points: [
      "This involved active teamwork to set up appliances and kit for important events.",
      "Thrived in high-pressure filming environments.",
      "Managed audio setups for participants whilst engaging contestants to maintain energy and enthusiasm on set.",
    ],
  },
  {
    title: "Catering Assistant",
    company_name: "Giants Causeway, National Trust Café",
    icon: causeway,
    iconBg: "#161329",
    date: "September 2022 - January 2023",
    points: [
      "Excelled in a fast-paced environment by multitasking across diverse responsibilities, including food preparation and coffee-making.",
      "Delivered great customer service while efficiently handling cashier transactions.",
    ],
  },
  
];

export const projects = [
  {
    name: "Moods on Display",
    description:
      "Mobile Application that sorts images and generates audio synced slideshows based off of users emotion using personally trained Deep Convolutional Neural Network.",
    tags: [
      { name: "Dart", color: "blue-text-gradient" },
      { name: "Flutter", color: "green-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Machine Learning", color: "pink-text-gradient" },
      { name: "Transfer Learning", color: "green-text-gradient" },
    ],
    image: moods,
    source_code_link: "https://github.com/jaysteele13/moods_on_display",
  },
  {
    name: "JSurf",
    description:
      "Barebones Surf Forecasting Application",
    tags: [
      { name: "Swift", color: "blue-text-gradient" },
      { name: "Stormglass API", color: "green-text-gradient" },
    ],
    image: jsurf,
    source_code_link: "https://github.com/jaysteele13/JsurfV1",
  },
  {
    name: "Mr Ribbits",
    description:
      "Autonomous Robot that plays tracks peoples faces.",
    tags: [
      { name: "C++", color: "blue-text-gradient" },
      { name: "Arduino", color: "green-text-gradient" },
      { name: "Robotics", color: "pink-text-gradient" },
    ],
    image: ribit,
    source_code_link:
      "https://github.com/jaysteele13/mr_ribbits",
  },
  {
    name: "RAM_Watcher",
    description:
      "Python App to monitor RAM usage leveraging Windows Task Manager",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Terminal", color: "blue-text-gradient" },
    ],
    image: ram_watcher,
    source_code_link: "https://github.com/jaysteele13/RAM_Watcher",
  },
];
