import { CardContentType } from "./types/ComponentsTypes";

export const Card = (props: CardContentType) => {
  const { text, title, img } = props;
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        {img ? (
          <figure>
            <img
              className="object-cover aspect-[4/3] "
              src={img?.source}
              alt={img?.alt}
            />
          </figure>
        ) : (
          ""
        )}

        <div className="card-body px-5 md:px-8">
          <h3 className="card-title">{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};
