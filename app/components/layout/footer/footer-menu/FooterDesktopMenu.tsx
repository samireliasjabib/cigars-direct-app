import React from 'react';
import {FooterSection} from '../FooterSection';
import FooterLink from '../NewFooterLink';

export const FooterDesktopMenu = () => {
  return (
    <div className="hidden lg:grid grid-cols-4 gap-8">
      <FooterSection title="CUSTOMER SERVICE">
        <div className="flex flex-col gap-2">
          <FooterLink href="/accessibility">Accessibility Statement</FooterLink>
          <FooterLink href="/returns">Returns</FooterLink>
          <FooterLink href="/shipping">Shipping</FooterLink>
          <FooterLink href="/tracking">Tracking</FooterLink>
        </div>
      </FooterSection>

      <FooterSection title="CIGAR DEALS">
        <div className="flex flex-col gap-2">
          <FooterLink href="/5-packs">5 Packs</FooterLink>
          <FooterLink href="/gift-guide">Gift Guide</FooterLink>
          <FooterLink href="/gift-cards">Gift Cards</FooterLink>
        </div>
      </FooterSection>

      <FooterSection title="COMPANY">
        <div className="flex flex-col gap-2">
          <FooterLink href="/about">About Us</FooterLink>
          <FooterLink href="/blog">Cigar Blog</FooterLink>
          <FooterLink href="/faq">FAQ</FooterLink>
          <FooterLink href="/terms">Terms of Use</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
        </div>
      </FooterSection>

      <FooterSection title="CONTACT US">
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
            <a href="mailto:support@cigarsdirect.com" className="text-red-500">
              support@cigarsdirect.com
            </a>
          </p>
        </div>
      </FooterSection>
    </div>
  );
};
