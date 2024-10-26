import { NewWindowIcon } from "./icons/Icons";
import { LinkType } from "./types/ComponentsTypes";

export const SimpleLink = (props: LinkType) => {
  const { label, src, ariaLabel = "", isExternalLink, className = "" } = props;
  return (
    <>
      {isExternalLink ? (
        <a
          className={`inline-flex items-baseline group text-base link link-animation text-inherit ${className}`}
          href={src}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={ariaLabel + "(opens in a new tab)"}
        >
          {label}
          <NewWindowIcon className="h-4 w-4 " />
        </a>
      ) : (
        <a
          className="inline-flex items-baseline group text-base link link-animation text-neutral-content "
          href={src}
          aria-label={ariaLabel}
        >
          {label}
        </a>
      )}
    </>
  );
};
