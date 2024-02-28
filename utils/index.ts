export const getCanonicalUrl = () => {
  return process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000'
    : 'https://nextjs-crash-course-theta.vercel.app';
};

export const getImageUrl = (imageUrl: string) => {
  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/storage/${imageUrl}`;
};
