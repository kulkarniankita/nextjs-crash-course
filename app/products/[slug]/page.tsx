import { createClient } from '@/supabase/client';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const revalidate = 0;

export async function generateStaticParams() {
  const supabase = createClient();
  const { data: posts } = await supabase.from('easysell-products').select('id');

  return posts?.map(({ id }) => ({
    id,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const supabase = createClient();
  const { data } = await supabase
    .from('easysell-products')
    .select()
    .match({ id: params.slug })
    .single();

  if (!data) {
    notFound();
  }

  return (
    <div className="px-12 py-12">
      <div className="flex justify-between mb-6 lg:mb-12">
        <h2 className="text-2xl lg:text-4xl font-bold">{data.name}</h2>
        <button className="bg-purple-800 text-white px-4 py-2 rounded-md hidden lg:flex">
          Contact the Seller!
        </button>
      </div>
      <p className="text-gray-800 font-semibold text-2xl lg:text-4xl my-6">
        💰 ${data.price}
      </p>
      <div className="flex items-center justify-center">
        <Image
          className="mb-4 rounded-lg shadow-xl border-4 border-gray-900 p-2"
          width={800}
          height={900}
          alt={data.name}
          src={data.imageUrl}
        />
      </div>
      <div className="py-12">
        <p className="text-gray-600 text-lg mb-4">📝 {data.description}</p>
        <button className="bg-purple-800 text-white px-4 py-2 rounded-md flex lg:hidden w-full items-center justify-center my-12">
          Contact the Seller!
        </button>
      </div>
    </div>
  );
}
