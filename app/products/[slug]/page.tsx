//@ts-nocheck
import { createClient } from '@/supabase/client';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 0;

export async function generateStaticParams() {
  const supabase = createClient();
  const { data: posts } = await supabase.from('easysell-products').select('id');

  if (!posts) {
    return [];
  }

  return posts?.map(({ id }) => ({
    slug: id,
  }));
}

export default async function Page({ params }: any) {
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
        <h2 className="text-3xl lg:text-4xl items-start uppercase">
          {data.name}
        </h2>
        <button className="bg-orange-900 hover:bg-orange-950 text-white px-4 py-2 rounded-md hidden lg:flex">
          Contact the Seller!
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mb-4">
        <div className="flex items-center justify-center">
          <Image
            className="rounded-lg shadow-xl border-4 border-gray-200 p-2 lg:min-w-[40rem] lg:min-h-[30rem]"
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

          {data.boost && (
            <>
              <label className="font-bold">FEATURED:</label>
              <p className="text-gray-800 font-semibold text-2xl lg:text-3xl pt-4 pb-6 text-center border-b-2 decoration-dotted border-dashed border-gray-800 border-opacity-15">
                🚀 BOOSTED
              </p>
            </>
          )}

          <Link
            href={`mailto:${data.contactEmail}`}
            className="bg-orange-900 hover:bg-orange-950 text-white px-4 py-2 rounded-md flex lg:hidden w-full items-center justify-center my-12"
          >
            Contact the Seller!
          </Link>
        </div>
      </div>
      <div className="pt-6">
        <label className="font-bold pb-2 border-b-2 decoration-dotted border-dashed border-gray-800 border-opacity-15">
          DESCRIPTION:
        </label>
        <p className="text-gray-600 text-lg my-4 pt-4 pb-6 ">
          📝 {data.description}
        </p>
      </div>
    </div>
  );
}
