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
            alt={image?.alt}
            height={image.height}
            width={image.width}
            src={image?.src}
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
