import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {Plus, Minus} from 'lucide-react';

import {cn} from '~/lib/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({className, ...props}, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({className, children, ...props}, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center text-red-500 justify-between py-4 font-medium transition-all hover:underline group',
        '[&[data-state=open]_svg.minus]:opacity-100 [&[data-state=open]_svg.plus]:opacity-0',
        '[&[data-state=closed]_svg.minus]:opacity-0 [&[data-state=closed]_svg.plus]:opacity-100',
        className,
      )}
      {...props}
    >
      {children}
      <div className="relative h-4 w-4 shrink-0">
        <Minus className="minus absolute h-4 w-4 transition-all duration-200" />
        <Plus className="plus absolute h-4 w-4 transition-all duration-200" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({className, children, ...props}, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {Accordion, AccordionItem, AccordionTrigger, AccordionContent};
