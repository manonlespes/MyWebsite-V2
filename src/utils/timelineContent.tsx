import { SimpleLink } from "../components/SimpleLink";
import { interfaceBadges, spadebadges, spadeInternBadges } from "./content";

export const AccessibilityTraining = () => (
  <>
    <p className="mb-3 text-neutral-content text-sm">
      {" "}
      In my spare time, I am training to gain a deeper understanding of
      accessibility. I am supervised by{" "}
      <SimpleLink
        label="Sophie Ragas"
        src="https://be.linkedin.com/in/sophieragas"
        isExternalLink
      />
      , Web accessibility consultant within{" "}
      <SimpleLink
        label="Eleven Ways"
        src="https://elevenways.be/fr"
        isExternalLink
      />
      , and I am aiming for IAAP CPACC (Certified Professional in Accessibility
      Core Competencies) certification by the end of the year.
    </p>
  </>
);

export const SpadeWork = () => (
  <>
    <p className="mb-3 text-neutral-content text-sm">
      Develop, write, modify, integrate and test code with accessibility and
      WCAG criteria in mind; develop and implement procedures for ongoing
      website review; monitor and maintain website functionality; participate in
      website architecture and design in collaboration with developers and
      designers colleagues or clients.
    </p>
    <p className="my-2 text-neutral-content">
      <SimpleLink label="Visit Spade" src="https://spade.be" isExternalLink />
    </p>

    <ul className="flex gap-3 flex-wrap list-none mb-10">
      {spadebadges.map((badge: string, index: number) => {
        return (
          <li key={index} className="badge badge-info font-bold">
            {badge}
          </li>
        );
      })}
    </ul>
  </>
);

export const AnySurferTraining = () => (
  <>
    <p className="mb-3 text-neutral-content text-sm">
      AnySurfer offers advice, auditing, and training to help you create
      accessible websites, documents and apps. Analysis of keyboard
      accessibility, semantics, text alternatives, use of colors, forms; study
      of ARIA attributes to make certain interactive modules more accessible.
    </p>
  </>
);

export const GreenTechSpeech = () => (
  <>
    <p className="mb-3 text-neutral-content text-sm">
      Presentation of tools, web eco-design criteria and best practices applied
      within Spade.
    </p>
    <p className="my-2 text-neutral-content mb-10">
      <SimpleLink
        label="Visit Green Tech Forum Brussels"
        src="https://www.greentech-forum-brussels.com/conferences/eco-design-websites-tools-standards-best-practices-incl-accessibility-data-privacy-actors-testimonials"
        isExternalLink
      />
    </p>
  </>
);

export const SpadeIntern = () => (
  <>
    <p className="mb-3 text-neutral-content text-sm">
      Integrate new themes for the Spade&apos;s product and resolve tickets for
      various projects.
    </p>
    <ul className="flex gap-3 flex-wrap list-none">
      {spadeInternBadges.map((badge: string, index: number) => {
        return (
          <li key={index} className="badge badge-info font-bold">
            {badge}
          </li>
        );
      })}
    </ul>
  </>
);

export const Interface3Training = () => (
  <>
    <p className="mb-3 text-neutral-content text-sm">
      Professionnal retraining : 1-year training, study of programming
      languages, frameworks and CMS, follow lectures on design web and use of
      graphic design softwares.
    </p>
    <p className="my-2 text-neutral-content">
      <SimpleLink
        label="Visit Interface3"
        src="https://interface3.be/fr"
        isExternalLink
      />
    </p>
    <ul className="flex gap-3 flex-wrap list-none mb-10">
      {interfaceBadges.map((badge: string, index: number) => {
        return (
          <li key={index} className="badge badge-info font-bold">
            {badge}
          </li>
        );
      })}
    </ul>
  </>
);

export const Curriculum = () => (
  <>
    <p className="text-neutral-content">
      {" "}
      <SimpleLink label="View full résumé" src="/resume.pdf" isExternalLink />
    </p>
  </>
);
