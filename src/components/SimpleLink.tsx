import { NewWindowIcon } from "./icons/Icons";
import { LinkType } from "./types/ComponentsTypes";

export const SimpleLink = (props: LinkType) => {
  const { label, src, isExternalLink, className = "", id } = props;
  return (
    <>
      {isExternalLink ? (
        <a
          key={id}
          className={`group text-sm link link-animation text-inherit font-bold ${className}`}
          href={src}
          target="_blank"
          rel="noreferrer noopener"
        >
          {label}
          <span className="sr-only">- Opens in a new tab</span>
          <span title="Opens in a new tab" aria-hidden="true">
            <NewWindowIcon className="h-4 w-4" />
          </span>
        </a>
      ) : (
        <a
          key={id}
          className="inline-flex items-baseline group text-base link link-animation text-neutral-content font-bold"
          href={src}
        >
          {label}
        </a>
      )}
    </>
  );
};
