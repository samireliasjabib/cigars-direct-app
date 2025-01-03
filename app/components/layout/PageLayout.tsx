import { type LayoutQuery } from 'storefrontapi.generated';
import { type EnhancedMenu } from '~/lib/utils';
import HeaderWithMegaMenu from './header/HeaderWithMegaMenu';
import NewFooter from './footer/NewFooter';
import { MegaMenuProvider } from './header/context/useMegaMenuContext';

type LayoutProps = {
  children: React.ReactNode;
  layout?: LayoutQuery & {
    headerMenu?: EnhancedMenu | null;
    footerMenu?: EnhancedMenu | null;
  };
};

export function PageLayout({ children, layout }: LayoutProps) {
  const { headerMenu, footerMenu } = layout || {};

  return (
    <MegaMenuProvider>
      <div className="flex flex-col min-h-screen">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        {headerMenu && layout?.shop.name && (
          <HeaderWithMegaMenu title={layout.shop.name} menu={headerMenu} />
        )}
        <main role="main" id="mainContent" className="flex-grow">
          {children}
        </main>
      </div>
      {footerMenu && <NewFooter />}
    </MegaMenuProvider>
  );
}
