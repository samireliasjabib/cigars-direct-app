import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/design-system/ui/accordion';
import FooterLink from '../NewFooterLink';

export const FooterMobileMenu = () => {
  return (
    <div className="lg:hidden">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="customer-service">
          <AccordionTrigger className="text-lg font-bold">
            CUSTOMER SERVICE
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              <FooterLink href="/accessibility">
                Accessibility Statement
              </FooterLink>
              <FooterLink href="/returns">Returns</FooterLink>
              <FooterLink href="/shipping">Shipping</FooterLink>
              <FooterLink href="/tracking">Tracking</FooterLink>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cigar-deals">
          <AccordionTrigger className="text-lg font-bold">
            CIGAR DEALS
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              <FooterLink href="/5-packs">5 Packs</FooterLink>
              <FooterLink href="/gift-guide">Gift Guide</FooterLink>
              <FooterLink href="/gift-cards">Gift Cards</FooterLink>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="company">
          <AccordionTrigger className="text-lg font-bold">
            COMPANY
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/blog">Cigar Blog</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/terms">Terms of Use</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="contact">
          <AccordionTrigger className="text-lg font-bold">
            CONTACT US
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              <p>
                Phone:{' '}
                <a href="tel:1-888-762-8786" className="text-red-500">
                  1-888-762-8786
                </a>
              </p>
              <p>
                Text:{' '}
                <a href="sms:1-855-903-4957" className="text-red-500">
                  1-855-903-4957
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  href="mailto:support@cigarsdirect.com"
                  className="text-red-500"
                >
                  support@cigarsdirect.com
                </a>
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
