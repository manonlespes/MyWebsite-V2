import { EnvelopeIncon, GitHubIcon, LinkedInIcon } from "./icons/Icons";

export const Footer = () => {
  return (
    <>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-animation">About me</a>
          <a className="link link-animation">Contact</a>
          <a className="link link-animation">Site map</a>
        </nav>
        <nav>
          <div className="flex gap-5">
            <a
              className="w-8 group hover:text-secondary transition-all self-center ease-in-out focus:text-secondary"
              href="https://github.com/manonlespes"
              target="_blank"
            >
              <GitHubIcon class="group-hover:animate-bounce group-ease-in-out" />
            </a>

            <a
              className="w-7 group hover:text-secondary transition-all ease-in-out focus:text-secondary"
              href="https://be.linkedin.com/in/manon-lespes"
              target="_blank"
            >
              <LinkedInIcon class="group-hover:animate-bounce group-ease-in-out" />
            </a>
            <a
              className="w-7 group hover:text-secondary transition-all ease-in-out self-center focus:text-secondary"
              href="mailto:manonlespes@hotmail.fr"
            >
              <EnvelopeIncon class="group-hover:animate-bounce group-ease-in-out" />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Manon
            Lespes
          </p>
        </aside>
      </footer>
    </>
  );
};
