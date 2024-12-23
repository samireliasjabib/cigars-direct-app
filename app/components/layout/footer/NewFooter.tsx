import {FooterDesktopMenu} from './footer-menu/FooterDesktopMenu';
import {FooterMobileMenu} from './footer-menu/FooterMobileMenu';
import {JoinForm} from './join-form/JoinForm';
import WarningMessage from './WarningMessage';

function NewFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="wrapper py-12 md:py-16 px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:flex-1">
            <FooterMobileMenu />
            <FooterDesktopMenu />
          </div>

          <div className="w-full lg:w-[380px] mx-auto lg:mx-0">
            <JoinForm />
          </div>
        </div>

        <WarningMessage />
      </div>
    </footer>
  );
}

export default NewFooter;
