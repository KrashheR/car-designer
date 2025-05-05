import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Car Designer',
  description: 'Interactive Car Designer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <header className="row-start-1 flex items-start flex-col py-8 bg-white">
          <h1 className="text-4xl font-bold text-gray-700">CAR DESIGNER</h1>
        </header>
        <main className="flex flex-col gap-[0px] row-start-2 items-center sm:items-start">
          <Providers>{children}</Providers>
        </main>
        <footer className="row-start-3 flex items-center justify-center">
          <p className="text-sm text-gray-500">&copy; 2025 Car Designer.</p>
        </footer>
      </body>
    </html>
  );
}
