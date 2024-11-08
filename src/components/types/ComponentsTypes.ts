import { ReactElement } from "react";

export interface SEOtypes {
  title: string;
  description: string;
  meta: any;
  lang?: string;
  siteName?: boolean;
  ogDescription: string;
  image?: string;
}

export interface SectionContentType {
  title: string;
  text: string;
  children: any;
  sectionBackground?: string;
  titleColor?: string;
  textColor?: string;
  padding?: string;
}

export interface SmallCardType {
  id: string;
  title: string;
  content: {
    value: string;
    link?: string;
  }[];
  svg: ReactElement;
}

export interface CardContentType {
  title: string;
  text: string;
  img: ImageType;
}

export interface ImageType {
  key?: string;
  src: string;
  alt?: string;
  height: string;
  width: string;
  caption?: string;
  className?: string;
}

export interface speakingContentType {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  link: LinkType;
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
