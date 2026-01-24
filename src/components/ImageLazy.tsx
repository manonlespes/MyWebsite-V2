import { InView } from "react-intersection-observer";
import Image from "./Image";
import { ImageType } from "./types/ComponentsTypes";

const ImageLazy = ({
  image,
  className = "",
}: {
  image: ImageType;
  className?: string;
}) => {
  return (
    <InView triggerOnce>
      {({ ref, inView }) => (
        <div ref={ref} className={className}>
          <Image image={image} inView={inView} />
        </div>
      )}
    </InView>
  );
};

export default ImageLazy;
