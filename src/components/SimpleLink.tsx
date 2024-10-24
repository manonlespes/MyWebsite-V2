import { NewWindowIcon } from "./icons/Icons";
import { LinkType } from "./types/ComponentsTypes";

export const SimpleLink = (props: LinkType) => {
  const { label, src, ariaLabel, isExternalLink } = props;
  return (
    <>
      {isExternalLink ? (
        <a
          className="inline-flex items-baseline group text-base link link-animation text-neutral-content "
          href={src}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={ariaLabel + "(opens in a new tab)"}
        >
          {label}
          <NewWindowIcon class="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
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
