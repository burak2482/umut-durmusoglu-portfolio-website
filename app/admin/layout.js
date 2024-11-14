import Footer from '@/components/Footer';
import '../globals.css';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="bg-slate-100 flex h-screen">
      <div className="flex w-full h-full">
        <div className="h-full flex flex-col justify-left items-center bg-slate-100">
          <div className="px-10 py-6 border-b border-r border-black">
            <span className="text-black font-medium text-3xl">Umut Durmuşoğlu</span>
          </div>
          <div className="h-full relative py-12 border-r border-black flex-grow">
            <div className="mb-10 border-b border-black">
              <Link href="/admin/addProduct">
                <span className="flex items-center gap-3 text-xl font-bold px-10 py-2 rounded-full bg-white text-nowrap">
                  Portfolyo ekle <span className="font-extrabold text-3xl text-red-400">→</span>
                </span>
              </Link>
            </div>
            <div className="mt-5 border-b border-black">
              <Link href="/admin/portfolyoList">
                <span className="flex items-center gap-3 text-xl font-bold px-10 py-2 bg-white text-nowrap rounded-full">
                  Portfolyo Listesi <span className="font-extrabold text-3xl text-red-400">→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col w-full">
          <div className="flex items-center w-full py-7 border-b border-black justify-center">
            <span className="text-white bg-slate-500 py-3 px-10 font-medium text-3xl ml-3 rounded-full">
              Admin Panel
            </span>
          </div>
          <main className="flex-grow">{children}</main>
        </div>
      </div>
    </div>
  );
}
