import { createClient } from '@/supabase/client';

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

  return (
    <div>
      My Post: {params.slug}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
