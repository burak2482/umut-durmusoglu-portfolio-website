import '../globals.css';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-left items-center bg-slate-100">
      <div className="px-2 py-4 border-b border-black">
        <span className="text-black font-bold text-3xl">Umut Durmuşoğlu</span>
      </div>
      <div className="h-full relative py-12 border-r border-black">
        <div className="mb-10 border-b border-black">
          <Link href="/admin/addProduct">
            <span className="flex items-center gap-3 font-medium px-3 py-2 bg-white">
              Portfolyo ekle
            </span>
          </Link>
        </div>
        <div className="mt-5">
          <Link href="/admin/portfolyoList">
            <span className="flex items-center gap-3 font-medium px-3 py-2 bg-white">
              Portfolyo Listesi
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
