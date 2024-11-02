import { SmallCardType } from "./types/ComponentsTypes";

const SmallCard = ({ title, content, svg }: SmallCardType) => {
  return (
    <div className="p-6 bg-neutral text-neutral-content shadow-md flex flex-col rounded-xl justify-center gap-6">
      <div className="flex flex-col h-full w-full">
        <div className="">
          <div className="block mb-auto mx-auto w-fit">{svg}</div>
          <h3 className="my-9 card-title">{title}</h3>
        </div>

        <ul className="flex flex-col gap-2">
          {content.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default SmallCard;