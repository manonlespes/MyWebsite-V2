import {
  A11yIcon,
  DesignIcon,
  DevIcon,
  SpokenIcon,
  LaptopIcon,
  CssIcon,
  GitHubIcon,
  LinkedInIcon,
  EnvelopeIcon,
} from "../components/icons/Icons";
import {
  CardContentType,
  ImageType,
  ProjectType,
  SmallCardType,
  speakingContentType,
  TimeLineDataType,
} from "../components/types/ComponentsTypes";

import { v4 as uuid } from "uuid";

import Chatshimi from "../images/chatshimi.webp";
import Manon from "../images/manon_lespes.webp";
import ColorPicker from "../images/color_picker.webp";
import Blog from "../images/blog.webp";
import WarGame from "../images/war_game.webp";
import Amelie from "../images/amelie_website.webp";
import Tenzies from "../images/tenzies.webp";
import EndGame from "../images/endgame.webp";
import {
  AccessibilityTraining,
  AnySurferTraining,
  Curriculum,
  GreenTechSpeech,
  Interface3Training,
  SpadeIntern,
  SpadeWork,
} from "./timelineContent";

/* HOME PAGE */

export const aboutContentCards: CardContentType[] = [
  {
    title: "This is me, pretending to look pensively at the landscape",
    text: "Before the pandemic, I was organising events and then I changed my career direction and jumped into the digital and IT world. I like coding, but also traveling, dancing and reading. But most of all, I am fond of my cat. I know, I sound like a cliché.",
    img: {
      key: uuid(),
      alt: "",
      src: Manon,
      height: "fit",
      width: "fit",
    },
  },
  {
    title: "Chatshimi, the Spleeping Beauty",
    text: "Chatshimi sometimes acts as my rubber-cat-debugging. When I'm working remotly, she's constantly by my side and even when she's taking a 10-hour power nap, she helps me debugg. Rest assured that the code is in safe and capable pawls and hands.",
    img: {
      key: uuid(),
      alt: "",
      src: Chatshimi,
      height: "fit",
      width: "fit",
    },
  },
];

export const timelineData: TimeLineDataType[] = [
  {
    date: "March 2025 - currently",
    title: "Web and design accessibility deep training",
    isFirst: true,
    content: <AccessibilityTraining />,
  },
  {
    date: "June 2022 - currently",
    title: " Front-end Developer, Spade scrl in Brussels (Belgium)",
    position: "start",
    content: <SpadeWork />,
  },
  {
    date: "Sept 2024",
    title: " Training Anysurfer, 2-day training",
    content: <AnySurferTraining />,
  },
  {
    date: "  June 19th, 2024",
    title: "Speaker at the GreenTech Forum Brussels (Belgium)",
    position: "start",
    content: <GreenTechSpeech />,
  },
  {
    date: " March 2022 - May 2022",
    title: " Front-end Developer Intern, Space scrl in Brussels (Belgium)",
    content: <SpadeIntern />,
  },
  {
    date: "March 2021 - March 2022",
    title: "Certificate - Front-end developer, Interface3 (Belgium)",
    position: "start",
    content: <Interface3Training />,
  },
  {
    date: "Before March 2021",
    title: " Different work experiences",
    content: <Curriculum />,
  },
];

export const spadebadges: string[] = [
  "Vue.js",
  "React",
  "TypeScript",
  "JavaScript",
  "WordPress",
  "HTML & CSS/SCSS",
  "Node.js",
  "PHP",
];

export const spadeInternBadges: string[] = [
  "JavaScript",
  "HTML & CSS/SCSS",
  "WordPress",
  "Twig",
  "PHP",
  "React",
  "Node.js",
];

export const interfaceBadges: string[] = [
  "JavaScript",
  "HTML & CSS",
  "WordPress",
  "PHP / MySQL",
  "JQuery",
  "Bootstrap 4 & 5",
  "Node.js / NoSQL",
  "React",
  "Photoshop",
  "Illustrator",
  "XD",
  "Animate",
];

/* PROJECT PAGE */

export const projectList: ProjectType[] = [
  {
    id: uuid(),
    img: {
      alt: "",
      src: Amelie,
    },
    title: "Amelie's website",
    description:
      "I helped a friend to launch her website. I advice her on the theme, colors, content, plugins and pages structure. I am still doing the maintenance and updating plugins. It is hosted on o2switch.",
    tags: ["WordPress", "CSS"],
    links: [
      {
        id: uuid(),
        label: "Visit the site",
        isExternalLink: true,
        src: "https://amelie-parolin.com/",
      },
    ],
  },
  {
    id: uuid(),
    img: {
      alt: "",
      src: WarGame,
    },
    title: "War Game",
    description:
      "I like playing card games! Do you like it as well? If so, clone my repo and have fun!",
    tags: ["Javascript", "HTML5", "CSS", "Deck of Cards API"],
    links: [
      {
        id: uuid(),
        label: "Visit my GitHub repo",
        isExternalLink: true,
        src: "https://github.com/manonlespes/war-game",
      },
    ],
  },
  {
    id: uuid(),
    img: {
      alt: "",
      src: Tenzies,
    },
    title: "Tenzies Game",
    description: "Roll until all dice are the same!",
    tags: ["React", "TypeScript", "CSS"],
    links: [
      {
        id: uuid(),
        label: "Visit my GitHub repo",
        isExternalLink: true,
        src: "https://github.com/manonlespes/roll-dices-game",
      },
    ],
  },
  {
    id: uuid(),
    img: {
      alt: "",
      src: EndGame,
    },
    title: "End Game",
    description:
      "Guess the word in under 8 attempts to keep the programming world safe from Assembly!",
    tags: ["React", "TypeScript", "CSS"],
    links: [
      {
        id: uuid(),
        label: "Visit my GitHub repo",
        isExternalLink: true,
        src: "https://github.com/manonlespes/endgame",
      },
    ],
  },
  {
    id: uuid(),
    img: {
      alt: "",
      src: ColorPicker,
    },
    title: "Color Picker",
    description:
      "This is simple color picker with beautiful effects. Check this out!",
    tags: ["Javascript", "HTML5", "CSS", "Color API"],
    links: [
      {
        id: uuid(),
        label: "Visit my GitHub repo",
        isExternalLink: true,
        src: "https://github.com/manonlespes/color-picker",
      },
    ],
  },
  {
    id: uuid(),
    img: {
      alt: "",
      src: Blog,
    },
    title: "My blog Space",
    description:
      "A quick project to test APIs from Scrimba, a code learning platform.",
    tags: ["Javascript", "HTML5", "CSS", "Scrimba API"],
    links: [
      {
        id: uuid(),
        label: "Visit my GitHub repo",
        isExternalLink: true,
        src: "https://github.com/manonlespes/small-blog",
      },
    ],
  },
];

export const projectImageList: ImageType[] = [
  {
    key: uuid(),
    alt: "",
    height: "fit",
    width: "fit",
    className: "absolute inset-0 h-full w-full object-cover",
    src: Blog,
  },
  {
    key: uuid(),
    alt: "",
    height: "fit",
    width: "fit",
    className: "absolute inset-0 h-full w-full object-cover",
    src: ColorPicker,
  },
  {
    key: uuid(),
    alt: "",
    height: "fit",
    width: "fit",
    className: "absolute inset-0 h-full w-full object-cover",
    src: Amelie,
  },
  {
    key: uuid(),
    alt: "",
    height: "fit",
    width: "fit",
    className: "absolute inset-0 h-full w-full object-cover",
    src: Tenzies,
  },
  {
    key: uuid(),
    alt: "",
    height: "fit",
    width: "fit",
    className: "absolute inset-0 h-full w-full object-cover",
    src: WarGame,
  },
  {
    key: uuid(),
    alt: "",
    height: "fit",
    width: "fit",
    className: "absolute inset-0 h-full w-full object-cover",
    src: EndGame,
  },
];

/* USES PAGE */

export const toolList: SmallCardType[] = [
  {
    id: uuid(),
    title: "Design & Eco-design Tools",
    content: [
      { value: "Figma" },
      { value: "Adobe (animate and XD)" },
      { value: "Font Awesome" },
      {
        value: "Fonts designed by Womxn",
        link: "https://www.design-research.be/by-womxn/",
      },
      { value: "Lighthouse" },
      {
        value: "Handbook of Sustainable Design of Digital Services",
        link: "https://gr491.isit-europe.org/en/",
      },
      {
        value: "Website Carbon Calculator",
        link: "https://www.websitecarbon.com/",
      },
    ],
    svg: <DesignIcon className="w-11 lg:w-14" />,
  },
  {
    id: uuid(),
    title: "Developer Tools & Platforms",
    content: [
      { value: "Visual Studio Code" },
      { value: "GitLab / GitHub" },
      { value: "Commitizen" },
      { value: "Bruno" },
      { value: "React Developer Tools" },
      { value: "Vue DevTools" },
      { value: "DaisyUi" },
      { value: "Oruga" },
      { value: "Shadcn" },
      { value: "Material UI" },
      { value: "VeeValidate" },
      { value: "Buefy" },
      { value: "Vite" },
      { value: "Netlify" },
      { value: "Firebase" },
    ],
    svg: <LaptopIcon className="w-11 lg:w-14" />,
  },
  {
    id: uuid(),
    title: "Accessibility Tools",
    content: [
      { value: "WCAG 2.2", link: "https://www.w3.org/TR/WCAG22/" },
      { value: "Accessible Tree from the browsers' devtool" },
      { value: "Voice Over" },
      { value: "Contrast Checker" },
      {
        value: "AnySurfer Doc",
        link: "https://www.anysurfer.be/en/documentation",
      },
      { value: "Eleven Ways Doc", link: "https://elevenways.be/en/" },
      { value: "Axe Accessibility Linter" },
    ],
    svg: <A11yIcon className="w-11 lg:w-14" />,
  },
];

export const languageList: SmallCardType[] = [
  {
    id: uuid(),
    title: "Languages, Librairies & Frameworks",
    content: [
      { value: "JavaScript" },
      { value: "React" },
      { value: "Vue.js" },
      { value: "TypeScript" },
      { value: "Node.js" },
      { value: "JQuery" },
      { value: "Timber for WordPress" },
      { value: "Twig / PHP" },
      { value: "SQL" },
    ],
    svg: <DevIcon className="w-11 lg:w-14" />,
  },
  {
    id: uuid(),
    title: "CSS Frameworks",
    content: [
      { value: "CSS / SCSS" },
      { value: "Tailwind CSS" },
      { value: "Bootstrap 4 & 5" },
      { value: "Bulma" },
    ],
    svg: <CssIcon className="w-11" />,
  },
  {
    id: uuid(),
    title: "Spoken Languages",
    content: [
      { value: "French (mother tongue)" },
      { value: "English (B2)" },
      {
        value: "German (B2)",
      },
      {
        value: "Spanish (B1)",
      },
    ],
    svg: <SpokenIcon className="w-11 lg:w-14" />,
  },
];

/* SPEAKING PAGE */

export const speakingContent: speakingContentType[] = [
  {
    id: uuid(),
    title: "Speaker and Member of the Organising Committee (in French)",
    subtitle: "Digital Change with Ethics - 22 November 2024",
    desc: "As part of the organising committee for this first edition, I worked on the theme, the programme and the speakers to be invited. The theme is based on the 3Ps: People, Planet & Prosperity; the aim was to bring together IT industry professionals to share and debate on the subject of digital eco-design.",
    link: {
      src: "https://dcwe.be",
      label: "Visit Digital Change with Ethics",
      isExternalLink: true,
    },
  },
  {
    id: uuid(),
    title: "Speaker at Green Tech Forum Brussels (in English)",
    subtitle: "Green Tech Forum Brussels - 19 June 2024",
    desc: " Presentation of tools, web eco-design criteria and best practices applied within Spade.",
    link: {
      src: "https://www.greentech-forum-brussels.com/program/conferences",
      label: "Visit Green Tech Forum Programme",
      isExternalLink: true,
    },
  },
];

export const podcast: speakingContentType[] = [
  {
    id: uuid(),
    title: "What is the Navigation Bar? (in French)",
    subtitle: "Abécédaire de Spade - 17 December 2024",
    desc: "Presentation and explanation of the navigation bar from a web developer point's of view.",
    link: {
      src: "https://www.spade.be/fr/articles/abecedaire-n-navigation/",
      label: "Listen or read retranscription of the podcast",
      isExternalLink: true,
    },
  },
  {
    id: uuid(),
    title: "Presentation of GR491 (in French)",
    subtitle: "Abécédaire de Spade - 12 March 2024",
    desc: "Presentation of the Handbook of Sustainable Design of Digital Services, with a brief explanation of how it could be used in agencies wishing to apply an eco-design approach.",
    link: {
      src: "https://www.spade.be/fr/articles/abecedaire-g-le-gr491/",
      label: "Listen or read retranscription of the podcast",
      isExternalLink: true,
    },
  },
];

/* FOOTER */

export const pageList = ["about", "projects", "speaking", "uses", "contact"];

export const socialLinkFooterData = [
  {
    url: "https://github.com/manonlespes",
    text: " Visit my GitHub - Opens in a new tab",
    title: "GitHub",
    icon: (
      <GitHubIcon class="group-hover:animate-bounce group-focus:animate-bounce group-ease-in-out" />
    ),
  },
  {
    url: "https://be.linkedin.com/in/manon-lespes",
    text: "Visit my LinkedIn profile - Opens in a new tab",
    title: "LinkedIn",
    icon: (
      <LinkedInIcon class="group-hover:animate-bounce group-focus:animate-bounce group-ease-in-out" />
    ),
  },
  {
    url: "mailto:manonlespes@hotmail.fr",
    text: "Send me an email",
    title: "Email",
    icon: (
      <EnvelopeIcon class="group-hover:animate-bounce group-focus:animate-bounce group-ease-in-out" />
    ),
  },
];
