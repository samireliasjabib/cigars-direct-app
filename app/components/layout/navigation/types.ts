export interface SubMenuItem {
  title: string;
  links: string[];
}

export interface NavigationItem {
  label: string;
  href: string;
  subMenu?: SubMenuItem[];
  isHighlighted?: boolean;
}
