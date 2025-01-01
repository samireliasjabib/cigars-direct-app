import * as Dialog from '@radix-ui/react-dialog';
import {cn} from '~/lib/utils';
import {SearchModalHeader} from './features/search-modal/components/SearchModalHeader';
import {SearchModalContent} from './features/search-modal/components/SearchModalContent';
import {InputSearchMobile} from './InputSearchMobile';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({isOpen, onClose}: SearchModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className={cn(
            'fixed inset-0 z-50 h-screen bg-background shadow-lg overflow-hidden',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
          )}
          aria-describedby="search-modal-description"
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <Dialog.Title id="search-modal-title" className="sr-only">
            Search Products
          </Dialog.Title>
          <Dialog.Description id="search-modal-description" className="sr-only">
            Search for products, collections, and pages
          </Dialog.Description>
          <div className="relative flex flex-col h-full">
            <SearchModalHeader />
            <InputSearchMobile />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
