export interface BannerProps {
  image: {url: string; altText: string};
  buttonClass: string;
  buttonLabel: string;
  buttonPosition: string;
}

export interface HomeBannerProps {
  mobileImage: {url: string; altText: string};
  desktopImage: {url: string; altText: string};
}
