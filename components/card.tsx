import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string; // Add imageUrl prop
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  description,
  price,
  imageUrl,
}) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="max-w-lg bg-gray-952 rounded-sm overflow-hidden h-full flex flex-col justify-between">
        <div>
          <div className="relative h-96 w-[500px] bg-center">
            <Image
              src={`https://qgkywonebrmytdyqmaxb.supabase.co/storage/v1/object/public/storage/${imageUrl}`}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="rounded-t"
            />
          </div>
          <div className="px-6 py-4">
            <div className="text-2xl mb-2 uppercase">{name}</div>
            <p className="text-gray-700 text-base truncate uppercase">
              {description}
            </p>
          </div>
        </div>
        <div className="px-6 py-2">
          <span className="inline-block text-2xl text-gray-951 mr-2">
            ${price}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
