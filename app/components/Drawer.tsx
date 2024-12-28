import {useState} from 'react';
import * as React from 'react';
import {Heading} from '~/components/Text';
import {IconClose} from '~/components/layout/ui/Icon';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from './design-system/ui/sheet';

/**
 * Drawer component that opens on user click.
 * @param heading - string. Shown at the top of the drawer.
 * @param open - boolean state. if true opens the drawer.
 * @param onClose - function should set the open state.
 * @param openFrom - right, left
 * @param children - react children node.
 */
interface DrawerProps {
  heading?: string;
  open: boolean;
  onClose: () => void;
  openFrom: 'right' | 'left';
  children: React.ReactNode;
  disabledClose?: boolean;
}

export function Drawer({
  heading,
  open,
  onClose,
  openFrom = 'right',
  children,
  disabledClose = false,
}: DrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side={openFrom}
        className="w-full sm:max-w-xl p-0 bg-white"
        disabledClose={disabledClose}
      >
        <SheetHeader className="sticky sr-only top-0 flex items-center px-6 h-nav sm:px-8 md:px-12 justify-between">
          {heading && (
            <SheetTitle>
              <Heading as="span" size="lead" id="cart-contents">
                {heading}
              </Heading>
            </SheetTitle>
          )}
        </SheetHeader>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </SheetContent>
    </Sheet>
  );
}

/* Use for associating arialabelledby with the title*/
Drawer.Title = SheetTitle;

export function useDrawer(openDefault = false) {
  const [isOpen, setIsOpen] = useState(openDefault);

  function openDrawer() {
    setIsOpen(true);
  }

  function closeDrawer() {
    setIsOpen(false);
  }

  return {
    isOpen,
    openDrawer,
    closeDrawer,
  };
}
