import Image from 'next/image';

interface CardProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string; // Add imageUrl prop
}

const Card: React.FC<CardProps> = ({ name, description, price, imageUrl }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
      <div className="relative h-56">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base truncate">{description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          ${price}
        </span>
      </div>
    </div>
  );
};

export default Card;
