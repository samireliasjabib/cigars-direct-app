import {EnhancedMenu} from '~/lib/utils';
import HeaderSearchInput from '../../../search/input-search/InputSearch';
import CartToggle from '~/components/cart/CartToggle';
import AccountLink from '../shared/account-link/AccountLink';
import Logo from '../shared/Logo';

const DesktopHeader = ({
  openCart,
}: {
  openCart: () => void;
  menu?: EnhancedMenu;
}) => {
  return (
    <div className="bg-black w-full hidden lg:block">
      <div className="wrapper flex items-center justify-between">
        <div className="flex items-center gap-12 w-full">
          <Logo />
          <HeaderSearchInput />
        </div>
        <div className="flex items-center gap-8">
          <AccountLink variant="default" />
          <CartToggle openCart={openCart} />
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;

// Cart Icon Component

// function DesktopHeader({
//   isHome,
//   menu,
//   openCart,
//   title,
// }: {
//   isHome: boolean;
//   openCart: () => void;
//   menu?: EnhancedMenu;
//   title: string;
// }) {
//   const params = useParams();
//   const {y} = useWindowScroll();
//   return (
//     <header
//       role="banner"
//       className={`${
//         isHome
//           ? 'bg-primary/80 dark:bg-contrast/60 text-contrast dark:text-primary shadow-darkHeader'
//           : 'bg-contrast/80 text-primary'
//       } ${
//         !isHome && y > 50 && ' shadow-lightHeader'
//       } hidden h-nav lg:flex items-center sticky transition duration-300 backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-8 px-12 py-8`}
//     >
//       <div className="flex gap-12">
//         {/* <Link className="font-bold" to="/" prefetch="intent">
//           {title}
//         </Link> */}
//         <nav className="flex gap-8">
//           {/* Top level menu items */}
//           {(menu?.items || []).map((item) => (
//             <Link
//               key={item.id}
//               to={item.to}
//               target={item.target}
//               prefetch="intent"
//               className={({isActive}) =>
//                 isActive ? 'pb-1 border-b -mb-px' : 'pb-1'
//               }
//             >
//               {item.title}
//             </Link>
//           ))}
//         </nav>
//       </div>
//         <div className="flex items-center gap-1">
//           <Form
//             method="get"
//             action={params.locale ? `/${params.locale}/search` : '/search'}
//             className="flex items-center gap-2"
//           >
//             <Input
//               className={
//                 isHome
//                   ? 'focus:border-contrast/20 dark:focus:border-primary/20'
//                   : 'focus:border-primary/20'
//               }
//               type="search"
//               variant="minisearch"
//               placeholder="Search"
//               name="q"
//             />
//             <button
//               type="submit"
//               className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
//             >
//               <IconSearch />
//             </button>
//           </Form>
//           <AccountLink className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5" />
//           <CartCount isHome={isHome} openCart={openCart} />
//         </div>
//     </header>
//   );
// }

// export default DesktopHeader;
