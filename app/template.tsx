'use client';
import { LazyMotion, domAnimation, m } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ type: 'easeInOut', duration: 0.3 }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
