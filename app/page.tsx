import Card from '@/components/card';
import { createClient } from '@/supabase/client';
import { notFound } from 'next/navigation';

export const revalidate = 0;

export default async function Home() {
  const supabase = createClient();
  const { data: products } = await supabase.from('easysell-products').select();

  console.log({ products });

  const { data: topProducts } = await supabase
    .from('easysell-products')
    .select()
    .is('boost', true);

  if (!products) {
    return notFound();
  }

  return (
    <main className="min-h-screen max-w-[100rem] mx-auto">
      <div className="px-12 pt-12 pb-20">
        <div className="flex flex-col xl:flex-row gap-2 xl:gap-40">
          <div className="pt-12">
            <h2 className="text-4xl mb-16">OUR TOP PRODUCTS</h2>
            <p className="text-xl">You can pay to boost your products here.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-12">
            {topProducts &&
              topProducts.map((item, idx) => (
                <Card id={item.id} key={`${item.name}-${idx}`} {...item} />
              ))}
          </div>
        </div>

        <h2 className="text-4xl mt-20 mb-16">ALL PRODUCTS</h2>
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((item, idx) => (
              <Card id={item.id} key={`${item.name}-${idx}`} {...item} />
            ))}
          </div>
        ) : (
          <p className="text-xl text-gray-800">All our products are gone...</p>
        )}
      </div>
    </main>
  );
}
