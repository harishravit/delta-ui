import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from 'next/font/google';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel='icon' type='image/svg+xml' href='/deltaui-logo.svg'/>
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
