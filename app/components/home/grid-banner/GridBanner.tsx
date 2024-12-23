import SectionCard from './SectionCard';

function GridBanner() {
  const sections = [
    {
      title: 'GIFT IDEAS',
      description:
        'Stumped for a gift idea? The most straightforward option if you’re all out of time is a gift card, which you can get below. You really can’t go...',
      imageSrc:
        'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/top-cigar-brands-2-copy-5_720x_d49f847c-54ee-4313-af09-8b262002df9a.webp?v=1734666646 ',
      buttonLabel: 'KNOW MORE',
    },
    {
      title: 'ACCESSORIES',
      description:
        'Cigars are a culture, a larger experience than the simple activity of smoking a fine stogie. The equipment used to store your cigars, selecting the right stogie for...',
      imageSrc:
        'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/accessories_720x_fa41eb83-f6b9-4bf9-9488-34c10c4aca4e.webp?v=1734666646',
      buttonLabel: 'KNOW MORE',
    },
];

  return (
    <div className="wrapper pb-10 md:pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {sections.map((section, index) => (
          <SectionCard
            key={index}
            title={section.title}
            description={section.description}
            imageSrc={section.imageSrc}
            buttonLabel={section.buttonLabel}
          />
        ))}
      </div>
    </div>
  );
}

export default GridBanner;
