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
    <div className="px-12 py-12 max-w-7xl mx-auto min-h-screen">
      <div className="flex justify-between mb-6 lg:mb-12">
        <h2 className="text-2xl lg:text-4xl font-bold items-start">
          {data.name}
        </h2>
        <button className="bg-orange-900 hover:bg-orange-950 text-white px-4 py-2 rounded-md hidden lg:flex">
          Contact the Seller!
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        <div className="flex items-center justify-center">
          <Image
            className="mb-4 rounded-lg shadow-xl border-4 border-gray-200 p-2 min-w-72 max-w-[500px]"
            width={600}
            height={600}
            alt={data.name}
            src={`https://qgkywonebrmytdyqmaxb.supabase.co/storage/v1/object/public/storage/${data.imageUrl}`}
          />
        </div>
        <div className="bg-gray-952 p-6 w-full">
          <label className="font-bold">PRICE:</label>
          <p className="text-gray-800 font-semibold text-2xl lg:text-3xl pt-4 pb-6 text-center border-b-2 decoration-dotted border-dashed border-gray-800 border-opacity-15">
            💰 ${data.price}
          </p>

          <div className="pt-6">
            <label className="font-bold">DESCRIPTION:</label>
            <p className="text-gray-600 text-lg mb-4 pt-4 pb-6">
              📝 {data.description}
            </p>
          </div>
          <button className="bg-orange-900 hover:bg-orange-950 text-white px-4 py-2  rounded-md flex lg:hidden w-full items-center justify-center my-12">
            Contact the Seller!
          </button>
        </div>
      </div>
    </div>
  );
}
