import { ReactElement, ReactNode } from "react";

export interface MetaTag {
  name?: string;
  content?: string;
  property?: string; // facultatif pour les propriétés OpenGraph par exemple
}

export interface SEOtypes {
  title: string;
  description: string;
  meta:
    | (
        | MetaTag
        | { name: string; content: string }
        | { property: string; content: string }
      )[]
    | any;
  lang?: string;
  siteName?: boolean;
  ogDescription: string;
  image?: string;
}

export interface SectionContentType {
  title: string;
  text: string;
  children: ReactNode;
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
