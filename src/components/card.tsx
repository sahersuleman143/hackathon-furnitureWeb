import Image from 'next/image';

interface CardProps {
  image: string; // Path to the image
  title: string; // Title of the card
}

const Card = ({ image, title }: CardProps) => {
  return (
    <div className="text-center p-4 shadow-lg rounded-lg bg-white">
      <div className="relative w-full h-80"> {/* Increase the card height */}
        {/* Use Next.js Image component for optimization */}
        <Image
          src={image}
          alt={title}
          layout="fill" // This ensures the image fills its container
          objectFit="cover" // Ensures the image covers the container
          className="rounded-md"
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3> {/* Added margin-top for spacing */}
    </div>
  );
};

export default Card;
