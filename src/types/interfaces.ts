export interface ClassInfo {
  title: string;
  subtitle: string;
  details: string[];
  image: string;
}

export interface MasterInfo {
  title: string;
  subtitle: string;
  details: string[];
  image: string;
}

export interface HomeCardInfo {
  title: string;
  src: string;
  description: string;
  type: string;
}

export interface HomePageSections {
  sectionTitle: string;
  media: HomeCardInfo[];
}

export interface OpeningHour {
  days: string;
  hours: string;
}

export interface ContactInfo {
  icon: string;
  href: string;
  text: string;
  ariaLabel?: string;
}

export interface SocialLink {
  href: string;
  icon: JSX.Element;
  ariaLabel: string;
}
