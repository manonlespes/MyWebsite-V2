import { TimeLineIcon } from "./icons/Icons";
import clsx from "clsx";
import { TimeLineElementType } from "./types/ComponentsTypes";

export const TimeLineElement = ({
  date,
  title,
  children,
  position = "end",
  isFirst = false,
}: TimeLineElementType) => {
  const style = clsx(
    "mb-10",
    position === "end" ? "timeline-end" : "timeline-start"
  );
  return (
    <>
      <li>
        {!isFirst && (
          <>
            <hr />
          </>
        )}

        <div className="timeline-middle text-info">
          <TimeLineIcon />
        </div>

        <div className={style}>
          <time className="tracking-wider italic text-neutral-content">
            {date}
          </time>
          <div className="text-sm md:text-base font-black p-2 bg-base-200 w-fit rounded-md mt-1 mb-2">
            {title}
          </div>
          {children}
        </div>
        <hr />
      </li>
    </>
  );
};
