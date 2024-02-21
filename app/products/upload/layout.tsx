// layout.tsx - Stays as Server Component

import { getCanonicalUrl } from '@/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Easy Sell - Upload',
  description: 'Upload your files easily using Easy Sell',
  alternates: {
    canonical: `${getCanonicalUrl()}/products/upload`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // Do what you need to do
    <>{children}</>
  );
}
