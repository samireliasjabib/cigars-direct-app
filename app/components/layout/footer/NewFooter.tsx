import {FooterDesktopMenu} from './footer-menu/FooterDesktopMenu';
import {FooterMobileMenu} from './footer-menu/FooterMobileMenu';
import {JoinForm} from './join-form/JoinForm';
import WarningMessage from './WarningMessage';

function NewFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="wrapper py-12 md:py-16 px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 flex-wrap justify-between">
          <div className="w-full md:w-[60%] lg:w-[65%]">
            <FooterMobileMenu />
            <FooterDesktopMenu />
          </div>

          <div className="w-full md:w-[35%] lg:w-[30%] lg:max-w-[370px] mx-auto md:mx-0">
            <JoinForm />
          </div>
        </div>

        <WarningMessage />
      </div>
    </footer>
  );
}

export default NewFooter;
