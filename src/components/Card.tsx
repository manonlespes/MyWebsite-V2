import { LazyLoadComponent } from "react-lazy-load-image-component";
import { MyImage } from "./ImgLazy";
import { CardContentType } from "./types/ComponentsTypes";

const Card = (props: CardContentType) => {
  const { text, title, img } = props;
  return (
    <LazyLoadComponent>
      {img && (
        <div
          className={`relative mx-4 -mt-6 overflow-hidden rounded-xl bg-clip-border shadow-lg aspect-[4/3]`}
        >
          <MyImage image={img} />
        </div>
      )}

      <div className="p-6 card-body">
        {title && (
          <h3 className="mb-2 block card-title tracking-wide">{title}</h3>
        )}

        <p className="text-sm">{text}</p>
      </div>
    </LazyLoadComponent>
  );
};

export default Card;
