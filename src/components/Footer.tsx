import { Link } from "react-router-dom";
import {
  DeloreanIcon,
  EnvelopeIcon,
  GitHubIcon,
  LinkedInIcon,
} from "./icons/Icons";

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <Link to="about" className="link link-animation">
            About me
          </Link>
          <Link to="contact" className="link link-animation">
            Contact
          </Link>
          <a className="link link-animation">Site map</a>
        </nav>
        <nav>
          <div className="flex gap-5">
            <a
              className="w-8 group hover:text-accent transition-all self-center ease-in-out focus:text-accent"
              href="https://github.com/manonlespes"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Visit my GitHub (opens in a new tab)"
            >
              <GitHubIcon class="group-hover:animate-bounce group-focus:animate-bounce group-ease-in-out" />
            </a>

            <a
              className="w-7 group hover:text-accent transition-all ease-in-out focus:text-accent"
              href="https://be.linkedin.com/in/manon-lespes"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Visit my LinkedIn profile (opens in a new tab)"
            >
              <LinkedInIcon class="group-hover:animate-bounce group-focus:animate-bounce group-ease-in-out" />
            </a>
            <a
              className="w-7 group hover:text-accent transition-all ease-in-out self-center focus:text-accent"
              href="mailto:manonlespes@hotmail.fr"
              aria-label="Send me an email"
            >
              <EnvelopeIcon class="group-hover:animate-bounce group-focus:animate-bounce group-ease-in-out" />
            </a>
          </div>
        </nav>
        <aside title="Go back in time">
          <a
            href="https://manon-lespes-portfolio.be"
            target="_blank"
            className="overflow-hidden w-32 group"
          >
            <DeloreanIcon className="relative inline-block group-hover:animate-[drive_3s_linear_infinite] " />
          </a>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Manon
            Lespes
          </p>
        </aside>
      </footer>
    </>
  );
};
