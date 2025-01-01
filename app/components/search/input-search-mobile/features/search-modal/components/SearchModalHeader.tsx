import * as Dialog from '@radix-ui/react-dialog';
import {X} from 'lucide-react';

export function SearchModalHeader() {
  return (
    <header className="sr-only">
      <Dialog.Title className="text-lg font-semibold">
        Search Products
      </Dialog.Title>
    </header>
  );
}
