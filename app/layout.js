"use client"
import './globals.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from 'next/navigation';

export default function Layout({ children }) {
  const pathname = usePathname();
  
  const shouldDisplayHeaderAndFooter = !pathname.startsWith('/admin');

  return (
    <html lang="en">
      <body className="bg-slate-400 flex flex-col min-h-screen">
        {shouldDisplayHeaderAndFooter && <Header />}
        <main className="flex-grow">{children}</main>
        {shouldDisplayHeaderAndFooter && <Footer />}
      </body>
    </html>
  );
}
