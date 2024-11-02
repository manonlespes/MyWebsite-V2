import { Fragment } from "react/jsx-runtime";
import { SimpleLink } from "./SimpleLink";
import { SmallCardType } from "./types/ComponentsTypes";

const SmallCard = ({ title, content, svg, id }: SmallCardType) => {
  return (
    <div
      id={id}
      className="p-6 bg-secondary text-neutral-content shadow-md flex flex-col rounded-xl justify-center gap-6"
    >
      <div className="flex flex-col h-full w-full">
        <div className="">
          <div className="block mb-auto mx-auto w-fit">{svg}</div>
          <h3 className="my-9 card-title">{title}</h3>
        </div>

        <ul className="flex flex-col gap-2">
          {content.map((item, index) => {
            return (
              <Fragment key={index}>
                {item.link ? (
                  <li>
                    <SimpleLink
                      id={item.value}
                      src={item.link}
                      label={item.value}
                      ariaLabel={item.value}
                      isExternalLink
                    />
                  </li>
                ) : (
                  <li>{item.value}</li>
                )}
              </Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SmallCard;
