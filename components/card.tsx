import { createClient } from '@/supabase/client';
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
      <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
        <div className="relative h-56">
          <Image
            src={`https://qgkywonebrmytdyqmaxb.supabase.co/storage/v1/object/public/storage/${imageUrl}`}
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
    </Link>
  );
};

export default Card;
