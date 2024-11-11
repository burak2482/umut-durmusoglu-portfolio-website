import Footer from '@/components/Footer';
import '../globals.css';
import Sidebar from './sidebar';

export default function Layout({ children }) {
  return (
    <div className="bg-slate-400 flex min-h-screen">
      <div className="flex w-full">
        <div className="w-1/6">
          <Sidebar />
        </div>
        <div className="relative flex flex-col w-full">
          <div className="flex items-center w-full py-5 border-b border-black">
            <span className="text-white font-bold text-3xl pl-12 pr-12">Admin Panel</span>
          </div>
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
