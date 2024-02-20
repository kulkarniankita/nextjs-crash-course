import Card from '@/components/card';
import { createClient } from '@/supabase/client';

export const revalidate = 0;

export default async function Home() {
  const supabase = createClient();
  const { data } = await supabase.from('easysell-products').select();

  console.log({ data });

  return (
    <main className="min-h-screen">
      <hr className="h-1 bg-purple-300 border-0 dark:bg-gray-700"></hr>
      <div className="px-12 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {data?.map((item, idx) => (
            <Card id={item.id} key={`${item.name}-${idx}`} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
}
