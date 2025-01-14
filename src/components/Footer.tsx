import { NavLink } from "react-router-dom";
import {
  DeloreanIcon,
  EnvelopeIcon,
  GitHubIcon,
  LinkedInIcon,
} from "./icons/Icons";

export const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid sm:grid-flow-col gap-4">
        <NavLink
          to="about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending text-sm"
              : isActive
              ? "active link text-sm"
              : "link link-animation text-sm"
          }
        >
          About
        </NavLink>
        <NavLink
          to="projects"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending text-sm"
              : isActive
              ? "active link text-sm"
              : "link link-animation text-sm"
          }
        >
          Project
        </NavLink>
        <NavLink
          to="speaking"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending text-sm"
              : isActive
              ? "active link text-sm"
              : "link link-animation text-sm"
          }
        >
          Speaking
        </NavLink>
        <NavLink
          to="uses"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending text-sm"
              : isActive
              ? "active link text-sm"
              : "link link-animation text-sm"
          }
        >
          Uses
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending text-sm"
              : isActive
              ? "active link text-sm"
              : "link link-animation text-sm"
          }
        >
          Contact
        </NavLink>
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
          href="https://v1.manonlespes.com"
          rel="noreferrer"
          className="overflow-hidden w-32 group"
          aria-label="Visit my past not accessible portfolio (opens in new tabs)"
        >
          <DeloreanIcon className="relative inline-block group-hover:animate-[drive_3s_linear_infinite] " />
        </a>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Manon
          Lespes
        </p>
      </aside>
    </footer>
  );
};
