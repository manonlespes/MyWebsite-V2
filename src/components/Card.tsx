import { CardContentType } from "./types/ComponentsTypes";
import ImageLazy from "./ImageLazy";

const Card = (props: CardContentType) => {
  const { text, title, img } = props;
  return (
    <>
      {img && (
        <div
          className={`relative mx-4 -mt-6 overflow-hidden rounded-xl bg-clip-border shadow-lg aspect-[4/3]`}
        >
          <ImageLazy image={img} />
        </div>
      )}

      <div className="p-6 card-body">
        {title && (
          <h3 className="mb-2 block card-title tracking-wide">{title}</h3>
        )}

        <p className="text-sm">{text}</p>
      </div>
    </>
  );
};

export default Card;
