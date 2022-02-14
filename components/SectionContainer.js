import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function SectionContainer({ children }) {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div
      className={`t mx-auto max-w-5xl px-4 sm:px-6 xl:max-w-full xl:px-0 ${
        theme === 'dark' || resolvedTheme === 'dark'
          ? 'bg-hero-dark'
          : 'bg-hero-light'
      }`}
    >
      {children}
    </div>
  );
}
