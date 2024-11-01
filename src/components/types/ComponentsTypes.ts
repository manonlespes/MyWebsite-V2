import { ScrollPosition } from "react-lazy-load-image-component";

export interface CardContentType {
  title: string;
  text: string;
  img: ImageType;
}

export interface ImageType {
  key: string;
  src: string;
  alt: string;
  height: string;
  width: string;
  caption?: string;
  className?: string;
  scrollPosition?: ScrollPosition;
}

export interface LinkType {
  id?: string;
  label: string;
  src: string;
  ariaLabel?: string;
  isExternalLink: boolean;
  className?: string;
}

export interface ButtonType {
  label: string;
  isLink?: boolean;
  linkTo?: string;
  className?: string;
}

export interface ProjectType {
  id: string;
  img?: {
    alt: string;
    src: string;
  };
  title: string;
  description: string;
  tags: string[];
  links: LinkType[];
}
