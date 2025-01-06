import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NetGuru Fiber - Coming Soon to Your Neighborhood',
  description: 'Experience the future of internet connectivity with our upcoming fiber service. Register now to be notified when we launch in your area.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}