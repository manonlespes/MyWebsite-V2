import { A11yIcon, DesignIcon, DevIcon } from "../components/icons/Icons";
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
    title: "Design & Eco-design Tools",
    content: [
      "Figma",
      "Adobe",
      "Font Awesome",
      "Lighthouse",
      "Handbook of Sustainable Design of Digital Services",
    ],
    svg: <DesignIcon className="w-11" />,
  },
  {
    title: "Developer Tools",
    content: [
      "VsCode",
      "GitLab / GitHub",
      "Bruno",
      "React Developer Tools",
      "Vue DevTools",
      "Tailwind CSS",
      "DaisyUi",
      "Bootstrap",
      "Bulma",
      "Oruga",
      "Shadcn",
      "Material UI",
      "VeeValidate",
      "Buefy",
    ],
    svg: <DevIcon className="w-11" />,
  },
  {
    title: "Accessibility Tools",
    content: ["AnySurfer Doc", "Eleven Ways Doc", "axe Accessibility Linter"],
    svg: <A11yIcon className="w-11" />,
  },
];
