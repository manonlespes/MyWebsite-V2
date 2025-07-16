import { DeloreanIcon } from "./icons/Icons";
import { WebsiteCarbonBadge } from "react-websitecarbon-badge";
import { useChangeTheme } from "../hooks/useChangeTheme";
import { pageList, socialLinkFooterData } from "../utils/content";
import { SocialLinkFooterType } from "./types/ComponentsTypes";

import { NavElement } from "./NavElement";

export const Footer: React.FC = () => {
  const { theme } = useChangeTheme();
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid sm:grid-flow-col gap-5">
        {pageList.map((page, index) => (
          <NavElement key={index} page={page} isFooter />
        ))}
      </nav>

      <ul className="flex gap-5 items-baseline">
        {socialLinkFooterData.map((item, index) => (
          <li key={index} className="w-12 p-1">
            <SocialLink {...item} />
          </li>
        ))}
      </ul>

      <div title="Go back in time">
        <a
          href="https://v1.manonlespes.com"
          rel="noreferrer"
          className="overflow-hidden w-32 group"
        >
          <span className="sr-only">
            Visit my previous portfolio - not accessible at all - Opens in a new
            tab
          </span>
          <span title="Visit my previous portfolio" aria-hidden="true">
            <DeloreanIcon className="relative inline-block group-hover:motion-reduce:animate-[drive_3s_linear_infinite]" />
          </span>
        </a>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Manon
          Lespes
        </p>
      </div>
      <WebsiteCarbonBadge
        co2="0.15"
        percentage="85"
        url="https://manonlespes.com/"
        lang="en"
        dark={theme?.isLight ? false : true}
      />
    </footer>
  );
};

const SocialLink = ({ url, text, title, icon }: SocialLinkFooterType) => {
  return (
    <a
      className="group hover:text-accent transition-all ease-in-out focus:text-accent self-baseline"
      href={url}
      target="_blank"
      rel="noreferrer noopener"
    >
      <span className="sr-only">{text}</span>
      <span title={title} aria-hidden="true">
        {icon}
      </span>
    </a>
  );
};
