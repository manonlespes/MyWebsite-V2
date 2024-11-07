import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ImageType } from "./types/ComponentsTypes";

export const MyImage = ({ image }: { image: ImageType }) => (
  <LazyLoadImage
    key={image.key}
    alt={image.alt}
    height={image.height}
    width={image.width}
    src={image?.src}
    className={image?.className}
    /*    scrollPosition={image.scrollPosition}
    effect="blur"
    delayTime={1} */
  />
);
