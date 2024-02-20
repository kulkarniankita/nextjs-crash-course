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
    <div>
      My Post: {params.slug}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
