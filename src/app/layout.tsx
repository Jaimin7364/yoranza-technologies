// src/app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Yoranza Technologies',
  description:
    'Yoranza Technologies empowers businesses with cutting-edge IT solutions, cloud computing services, and dynamic web & app development. Experience innovation, scalability, and interactive digital transformation tailored for your success.',
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  metadataBase: new URL('https://www.yoranzatechnologies.in'), // ✅ update to www
  alternates: {
    canonical: '/', // this becomes https://www.yoranzatechnologies.in/
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
