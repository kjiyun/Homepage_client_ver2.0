'use client'
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { GoogleAnalytics } from '@next/third-parties/google';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isMainPage = pathname === "/";
  const isCompletePage = pathname === "/ticket/complete";
  const isFreshmanTicketPage = pathname === "/ticket/freshman_ticket";
  const isGeneralTicketPage = pathname === "/ticket/general_ticket";
  const isCancelPage = pathname === "/ticket/cancel";
  const isReservationPage = pathname === "/ticket/reservation";
  const isSearchPage = pathname === "/ticket/search";


  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="font-pretendard w-full h-auto min-h-full">
          <Header />
          {children}
        </div>
        {!isMainPage && !isCompletePage && !isFreshmanTicketPage && !isGeneralTicketPage && !isCancelPage && !isReservationPage && !isSearchPage &&(
        <Footer />
      )}
      </body>
      {/* gaId 추후 발급 후 작성 필요 -> 배포 이후*/}
      <GoogleAnalytics gaId="" />
    </html>
  );
}
