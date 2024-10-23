import { NewWindowIcon } from "./icons/Icons";

export const TimeLine = () => {
  return (
    <>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle text-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10">
            <time className="font-mono italic text-neutral-content block md:text-end">
              2022 - currently
            </time>
            <div className="text-lg font-black p-1 bg-base-200 w-fit rounded-sm mt-1 mb-2">
              Front-end Developer, Spade scrl in Brussels (Belgium)
            </div>
            <p className="mb-3 text-neutral-content">
              Develop, write, modify, integrate and test code with accessibility
              and WCAG criteria in mind; develop and implement procedures for
              ongoing website review; monitor and maintain website
              functionality; participate in website architecture and design in
              collaboration with developers and designers colleagues or clients.
            </p>

            {spadebadges.map((badge: string, index: number) => {
              return (
                <div key={index} className="badge badge-info font-bold mr-3">
                  {badge}
                </div>
              );
            })}
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic text-neutral-content">
              Sept 2024
            </time>
            <div className="text-lg font-black p-1 bg-base-200 w-fit rounded-sm mt-1 mb-2">
              Training Anysurfer, 2-day training
            </div>
            <p className="mb-3 text-neutral-content">
              AnySurfer offers advice, auditing, and training to help you create
              accessible websites, documents and apps. Analysis of keyboard
              accessibility, semantics, text alternatives, use of colors, forms;
              study of ARIA attributes to make certain interactive modules more
              accessible.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic text-neutral-content">
              June 19th, 2024
            </time>
            <div className="text-lg font-black p-1 bg-base-200 w-fit rounded-sm mt-1 mb-2">
              Speaker at the GreenTech Forum Brussels (Belgium)
            </div>
            <p className="mb-3 text-neutral-content">
              Presentation of tools, web eco-design criteria and best practices
              applied within Spade.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic text-neutral-content">
              March 2022 - May 2022
            </time>
            <div className="text-lg font-black p-1 bg-base-200 w-fit rounded-sm mt-1 mb-2">
              Front-end Developer Intern, Space scrl in Brussels (Belgium)
            </div>
            <p className="mb-3 text-neutral-content">
              Integrate new themes for the Spade's product and resolve tickets
              for various projects.
            </p>
            {spadeInternBadges.map((badge: string, index: number) => {
              return (
                <div key={index} className="badge badge-info font-bold mr-3">
                  {badge}
                </div>
              );
            })}
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic text-neutral-content">
              March 2021 - March 2022
            </time>

            <div className="text-lg font-black p-1 bg-base-200 w-fit rounded-sm mt-1 mb-2">
              Certificate - Front-end developer, Interface3 (Belgium)
            </div>
            <p className="mb-3 text-neutral-content">
              1-year training, study of programing languages, frameworks and
              CMS, follow lectures on design web and use of graphic design
              softwares.
            </p>
            {interfaceBadges.map((badge: string, index: number) => {
              return (
                <div key={index} className="badge badge-info font-bold mr-3">
                  {badge}
                </div>
              );
            })}
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic text-neutral-content">
              Before March 2021
            </time>
            <div className="text-lg font-black p-1 bg-base-200 w-fit rounded-sm mt-1 mb-2">
              Different work experiences
            </div>
            <a
              className="inline-flex items-baseline group text-base link link-animation text-neutral-content "
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View Full Résumé (opens in a new tab)"
            >
              View full résumé
              <NewWindowIcon class="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
            </a>
          </div>
          <hr />
        </li>
      </ul>
    </>
  );
};

const spadebadges: string[] = [
  "Vue.js",
  "React",
  "TypeScript",
  "Javascript",
  "WordPress",
  "Html & CSS/SCSS",
  "PHP",
];

const spadeInternBadges: string[] = [
  "Javascript",
  "Html & CSS/SCSS",
  "WordPress",
  "Twig",
  "PHP",
  "React",
];

const interfaceBadges: string[] = [
  "Javascript",
  "Html & CSS",
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
