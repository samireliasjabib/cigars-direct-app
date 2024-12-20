import {Image} from '@shopify/hydrogen';
import Heading from '~/components/design-system/heading/Heading';
import {Link} from '~/components/shared/Link';

export default function NewsCigar() {
  return (
    <section className="container mx-auto px-4 py-12">
      <Heading title="News & Cigar" viewAllLink="/articles" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Article 1 */}
        <article className="flex flex-col space-y-4">
          <Link
            to="/article-1"
            className="relative block aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="People enjoying beach vacation"
              className="object-cover w-full h-full transition-transform hover:scale-105"
              width={600}
              height={400}
            />
          </Link>
          <div className="space-y-2">
            <h3 className="text-xl font-bold leading-tight text-red-600 hover:text-red-700">
              <Link to="/article-1">
                Top Cigar-Friendly Travel Destinations to Visit During the 2024
                Holiday Season: Where to Smoke, Relax, and Explore
              </Link>
            </h3>
            <p className="text-sm text-gray-500">DEC 02, 2024</p>
            <p className="text-gray-600 line-clamp-3">
              As 2024 comes to a close, the holiday season offers the perfect
              opportunity to take a well-deserved vacation. But if you're a
              cigar enthusiast, you're probably wondering where you can...
            </p>
          </div>
        </article>

        {/* Article 2 */}
        <article className="flex flex-col space-y-4">
          <Link
            to="/article-2"
            className="relative block aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="People enjoying cigars at outdoor party"
              className="object-cover w-full h-full transition-transform hover:scale-105"
              width={600}
              height={400}
            />
          </Link>
          <div className="space-y-2">
            <h3 className="text-xl font-bold leading-tight hover:text-gray-700">
              <Link to="/article-2">
                Cigar Rituals from Around the World: Unique Traditions You
                Should Try
              </Link>
            </h3>
            <p className="text-sm text-gray-500">
              <span className="font-medium">Bloggle</span> · DEC 02, 2024
            </p>
            <p className="text-gray-600 line-clamp-3">
              Cigars have been a part of human culture for centuries, enjoyed by
              people all over the world. But cigars aren't just about lighting
              up and puffing away—they're wrapped in deep-rooted...
            </p>
          </div>
        </article>

        {/* Article 3 */}
        <article className="flex flex-col space-y-4">
          <Link
            to="/article-3"
            className="relative block aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Concert scene with purple lighting"
              className="object-cover w-full h-full transition-transform hover:scale-105"
              width={600}
              height={400}
            />
          </Link>
          <div className="space-y-2">
            <h3 className="text-xl font-bold leading-tight hover:text-gray-700">
              <Link to="/article-3">
                Cigars as a Gift for Women: Really? It is a Thoughtful Choice
              </Link>
            </h3>
            <p className="text-sm text-gray-500">NOV 04, 2024</p>
            <p className="text-gray-600 line-clamp-3">
              When you think of cigars, you might automatically envision them as
              a "man's gift"—an accessory for a poker night or a celebration
              with the boys. But in reality, cigars are...
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
