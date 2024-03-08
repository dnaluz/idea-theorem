import Image from 'next/image';

import './globals.css';
import { Lato } from 'next/font/google';
import logo from '@/../public/logo.svg';

const latoFont = Lato({
  weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={latoFont.className}>
      <body>
        <header className="bg-252F3D py-4 desktop:py-3 pl-17 desktop:pl-header-left">
          <Image
            src={logo}
            width="294"
            height="32"
            alt="Idea Theorem Logo"
            className="w-logoMobile desktop:w-logoDesktop h-logoMobile desktop:h-logoDesktop"
          />
        </header>
        {children}
      </body>
    </html>
  );
}
