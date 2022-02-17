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
      className={`mx-auto max-w-full px-4 sm:px-6 lg:px-8 ${
        theme === 'dark' || resolvedTheme === 'dark'
          ? 'bg-hero-dark'
          : 'bg-hero-light'
      }`}
    >
      {children}
    </div>
  );
}
