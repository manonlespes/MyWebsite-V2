import { CardContentType } from "./types/ComponentsTypes";

export const Card = (props: CardContentType) => {
  const { text, title, img, key } = props;
  return (
    <div
      key={key}
      className="relative flex flex-col rounded-xl bg-neutral bg-clip-border text-neutral-content shadow-md"
    >
      {img ? (
        <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-clip-border shadow-lg aspect-[4/3]">
          <img
            className="object-contain h-fit"
            src={img?.source}
            alt={img?.alt}
          />
        </div>
      ) : (
        ""
      )}

      <div className="p-6 card-body">
        <h3 className="mb-2 block card-title">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
