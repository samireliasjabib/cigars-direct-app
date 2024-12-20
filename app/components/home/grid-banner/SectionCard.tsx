import {Image} from '@shopify/hydrogen';
import {Button} from '~/components/design-system/ui/button';

interface SectionCardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonLabel: string;
  onButtonClick?: () => void;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  description,
  imageSrc,
  buttonLabel,
  onButtonClick,
}) => (
  <div className="relative overflow-hidden group cursor-pointer">
    {/* Background Image */}
    <div className="h-[420px] w-full">
      <Image
        data={{
          url: imageSrc,
          width: 1920,
          height: 420,
        }}
        alt={`${title} background`}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30" />
    </div>

    {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
      <h2 className="text-2xl font-bold mb-2 sm:mb-4 text-shadow-md">
        {title}
      </h2>
      <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-300 line-clamp-3">
        {description}
      </p>
      <Button
        variant="default"
        onClick={onButtonClick}
        className="w-fit px-6 py-4"
      >
        {buttonLabel}
      </Button>
    </div>
  </div>
);

export default SectionCard;
