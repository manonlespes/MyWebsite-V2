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
}

export interface ButtonType {
  label: string;
  isLink?: boolean;
  linkTo?: string;
}
