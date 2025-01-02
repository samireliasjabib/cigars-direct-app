import {type LayoutQuery} from 'storefrontapi.generated';
import {type EnhancedMenu} from '~/lib/utils';
import {Suspense} from 'react';

import Header from './header/Header';
import NewFooter from './footer/NewFooter';
import MegaMenu from './navigation/MegaMenu';

type LayoutProps = {
  children: React.ReactNode;
  layout?: LayoutQuery & {
    headerMenu?: EnhancedMenu | null;
    footerMenu?: EnhancedMenu | null;
  };
};

export function PageLayout({children, layout}: LayoutProps) {
  const {headerMenu, footerMenu} = layout || {};
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        {headerMenu && layout?.shop.name && (
          <Header title={layout.shop.name} menu={headerMenu} />
        )}
        <MegaMenu />
        <main role="main" id="mainContent" className="flex-grow">
          <Suspense>{children}</Suspense>
        </main>
      </div>
      {footerMenu && <NewFooter />}
    </>
  );
}
