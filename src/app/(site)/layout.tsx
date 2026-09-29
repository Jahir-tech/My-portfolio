import '@/styles/tailwind.css';
import '@/styles/portfolio.css';
import PortfolioFooter from '@/components/Portfolio/Footer';
import PortfolioHeader from '@/components/Portfolio/Header';
import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500', '600'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
      <body>
        <PortfolioHeader />
        {children}
        <PortfolioFooter />
      </body>
    </html>
  );
}
