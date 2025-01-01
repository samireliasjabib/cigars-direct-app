import * as Dialog from '@radix-ui/react-dialog';
import {cn} from '~/lib/utils';
import {SearchModalHeader} from './components/SearchModalHeader';
import {SearchModalContent} from './components/SearchModalContent';

interface SearchModalContainerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModalContainer({isOpen, onClose}: SearchModalContainerProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className={cn(
            'fixed inset-0 z-50 h-screen bg-background shadow-lg overflow-hidden',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
          )}
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <div className="relative flex flex-col h-full">
            <SearchModalHeader />
            <SearchModalContent />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
