import Card from '@/components/card';
import { createClient } from '@/supabase/client';
import { notFound } from 'next/navigation';

export const revalidate = 0;

export default async function Home() {
  const supabase = createClient();
  const { data: products } = await supabase.from('easysell-products').select();

  console.log({ products });

  if (!products) {
    return notFound();
  }

  return (
    <main className="min-h-screen">
      <hr className="h-1 bg-purple-300 border-0 dark:bg-gray-700"></hr>
      <div className="px-12 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((item, idx) => (
            <Card id={item.id} key={`${item.name}-${idx}`} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
}
