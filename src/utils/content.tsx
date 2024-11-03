import {
  A11yIcon,
  DesignIcon,
  DevIcon,
  SpokenIcon,
  LaptopIcon,
  CssIcon,
} from "../components/icons/Icons";
import {
  CardContentType,
  ImageType,
  ProjectType,
  SmallCardType,
} from "../components/types/ComponentsTypes";

import { v4 as uuid } from "uuid";

export const aboutContentCards: CardContentType[] = [
  {
    title: "This is me, pretending to look pensively at the landscape",
    text: "Before the pandemic, I was organising events and then I changed my career direction and jumped into the digital and IT world. I like coding, but also traveling, dancing and reading. But most of all, I am fond of my cat. I know, I sound like a cliché.",
    img: {
      key: uuid(),
      alt: "Manon Lespes - in a train looking trhough the window.",
      src: "/images/manon_lespes.webp",
      height: "fit",
      width: "fit",
      scrollPosition: { x: 0, y: 0 },
    },
  },
  {
    title: "Chatshimi, the Spleeping Beauty",
    text: " Chatshimi sometimes acts as my rubber-cat-debugging. When I'm working remotly, she's constantly by my side and even when she's taking a 10-hour power nap, she helps me debugg. Rest assured that the code is in safe and capable pawls and hands.",
    img: {
      key: uuid(),
      alt: "Chatshimi, my lovely spleeping cat.",
      src: "/images/chatshimi.webp",
      height: "fit",
      width: "fit",
      scrollPosition: { x: 0, y: 0 },
    },
  },
];

export const projectList: ProjectType[] = [
  {
    id: uuid(),
    img: {
      alt: "",
      src: "/images/color_picker.png",
    },
    title: "Color Picker",
    description: "This is a color picker",
    tags: ["Javascript", "HTML5", "CSS", "Color API"],
    links: [
      {
        id: uuid(),
        label: "GitHub",
        isExternalLink: true,
        src: "https://github.com/manonlespes/color-picker",
        ariaLabel: "Go to repo",
      },
    ],
  },
  {
    id: uuid(),
    img: {
      alt: "",
      src: "/images/blog.png",
    },
    title: "My blog Space",
    description: "A quick fun project to test APIs",
    tags: ["Javascript", "HTML5", "CSS", "Scrimba API"],
    links: [
      {
        id: uuid(),
        label: "GitHub",
        isExternalLink: true,
        src: "https://github.com/manonlespes/small-blog",
        ariaLabel: "Go to repo",
      },
    ],
  },
  {
    id: uuid(),
    img: {
      alt: "",
      src: "/images/friend_web.png",
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
        ariaLabel: "Visite Amelie's website",
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
    src: "/images/front_end_img.webp",
  },
  {
    key: uuid(),
    alt: "",
    height: "fit",
    width: "fit",
    className: "absolute inset-0 h-full w-full object-cover",
    src: "/images/blog.png",
  },
  {
    key: uuid(),
    alt: "",
    height: "fit",
    width: "fit",
    className: "absolute inset-0 h-full w-full object-cover",
    src: "/images/color_picker.png",
  },
  {
    key: uuid(),
    alt: "",
    height: "fit",
    width: "fit",
    className: "absolute inset-0 h-full w-full object-cover",
    src: "/images/friend_web.png",
  },
  {
    key: uuid(),
    alt: "",
    height: "fit",
    width: "fit",
    className: "absolute inset-0 h-full w-full object-cover",
    src: "/images/background_img.webp",
  },
];

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
    title: "Developer Tools",
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
    ],
    svg: <LaptopIcon className="w-11 lg:w-14" />,
  },
  {
    id: uuid(),
    title: "Accessibility Tools",
    content: [
      { value: "WCAG 2.2", link: "https://www.w3.org/TR/WCAG22/" },
      { value: "Accessible Tree from the console" },
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
    title: "Languages and Frameworks",
    content: [
      { value: "JavaScript" },
      { value: "React" },
      { value: "Vue.js" },
      { value: "TypeScript" },
      { value: "Node.js" },
      { value: "JQuery" },
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
