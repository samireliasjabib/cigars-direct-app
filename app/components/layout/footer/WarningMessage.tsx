import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/design-system/ui/accordion';

function WarningMessage() {
  const warningContent = (
    <p>
      CigarsDirect.com does not sell tobacco related products to anyone under
      the age of 21, nor do we sell cigarettes. Cigars and Tobacco products on
      this website are not intended to be purchased by anyone under the age of
      21. All references to "mellow", "medium", "full" are only descriptors of
      flavor and not related to health. Flavor descriptors are not intended to
      convey health risks. CigarsDirect does not sell products to anyone under
      the age of 21. If you do not meet the minimum age requirement, please do
      not enter our site.
    </p>
  );

  return (
    <>
      {/* Mobile View with Accordion */}
      <div className="md:hidden mt-8">
        <Accordion type="single" collapsible className="bg-red-600">
          <AccordionItem value="warning" className="border-none">
            <AccordionTrigger className="text-white font-light uppercase text-lg italic px-4">
              Warning
            </AccordionTrigger>
            <AccordionContent className="px-4">
              {warningContent}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block bg-red-600 p-4 text-white text-sm mt-8">
        {warningContent}
      </div>
    </>
  );
}

export default WarningMessage;
