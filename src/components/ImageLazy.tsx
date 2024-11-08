import { InView } from "react-intersection-observer";
import Image from "./Image";
import { ImageType } from "./types/ComponentsTypes";

const ImageLazy = ({ image }: { image: ImageType }) => {
  return (
    <InView triggerOnce>
      {({ ref, inView }) => (
        <div ref={ref}>
          <Image image={image} inView={inView} />
        </div>
      )}
    </InView>
  );
};

export default ImageLazy;
