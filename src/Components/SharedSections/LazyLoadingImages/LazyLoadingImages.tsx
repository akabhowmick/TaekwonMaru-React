import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";

export const LazyLoadingImage = ({
  src,
  id,
  alt,
  height,
}: {
  src: string;
  id: string;
  alt: string;
  height: number;
}) => {
  return (
    <AsyncImage
      id={id}
      src={src}
      Transition={Blur}
      alt={alt}
      loader={<div style={{ background: "var(--light-red)" }} />}
      style={{ height: height }}
    />
  );
};
