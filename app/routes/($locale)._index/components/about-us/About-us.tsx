import {Image} from '@shopify/hydrogen';

const mockData = {
  title: 'About Us',
  description:
    "Cigars Direct is the cigar shop online to purchase your favorite cigars. Shop for cigars, samplers, cigarillos, flavored cigars, smoking accessories, and anything else you could possibly need to enjoy your stogies. Whether you're looking for Dominican, Honduran, or Nicaraguan blends, you can count on US to be your one stop shop for variety and convenience. Find the best selection of top brands including Drew Estate,  Arturo Fuente, Padron and much more. We also provide a wide selection of humidors and accessories. Shop the best cigars online at Cigars Direct.",
  backgroundImage:
    'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/About_Us_optimized_2400x_d7894a7e-74a9-4ad9-8995-15a1b0b1b851.webp?v=1734642136',
};

function AboutUs() {
  return (
    <section
      className="relative w-full min-h-[400px] h-[60vh] md:h-[550px] lg:h-[650px]"
      role="region"
      aria-labelledby="about-us-title"
    >
      <Image
        data={{
          url: mockData.backgroundImage,
          altText: mockData.title,
        }}
        sizes="100vw"
        height="100%"
        width="100%"
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      {/* Additional overlay for better text readability */}
      <div className="absolute bg-black inset-0 opacity-30" />

      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8 lg:p-12">
        <div className="text-center w-full max-w-xl mx-auto ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 lg:mb-8 tracking-widest uppercase">
            {mockData.title}
          </h2>
          <p className="text-sm md:text-base lg:text-lg tracking-wide font-normal text-white/90 leading-relaxed md:leading-relaxed lg:leading-relaxed">
            {mockData.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
