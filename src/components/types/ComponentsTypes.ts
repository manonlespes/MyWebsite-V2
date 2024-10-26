export interface CardContentType {
  title?: string;
  text?: string;
  img?: {
    alt: string;
    source: string;
  };
}
export interface LinkType {
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
