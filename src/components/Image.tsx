import { useState } from "react";
import { Grow } from "transitions-kit";
import { ImageType } from "./types/ComponentsTypes";

const Image = ({ inView, image }: { inView: boolean; image: ImageType }) => {
  const [status, setStatus] = useState("loading");

  return (
    <>
      {/* Loading */}
      <Grow appear={false} in={status === "loading"} unmountOnExit>
        <div className="bg-base-100"></div>
      </Grow>

      {inView && (
        <Grow in={status === "loaded"}>
          <img
            key={image?.key}
            alt={image?.alt ? image.alt : ""}
            height={image?.height}
            width={image?.width}
            src={image?.src}
            srcSet={`${image?.src}?w=300 300w, ${image?.src}?w=600 600w, ${image?.src}?w=1200 1200w`}
            sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px"
            className={image?.className}
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("failed")}
          />
        </Grow>
      )}

      {/* error */}
      <Grow in={status === "failed"} mountOnEnter unmountOnExit>
        <div className="bg-base-100"></div>
      </Grow>
    </>
  );
};

export default Image;
