import Link from 'next/link';
import Image from 'next/image';
import '../app/globals.css';

export default function Footer() {
  return (
    <div className="flex justify-around flex-col gap-2 bg-black py-5 items-center">
      <p className="flex items-center gap-2 font-medium py-1 px-3 border border-solid shadow-[-7px_7px_0px_#00000] ">Umut Durmuşoğlu</p>
      <section>
        <h1>@2024 . Made by Burak Durmuşoğlu</h1>
      </section>
      <section>
        <Link href="">
          <Image src="/path-to-linkedin-icon.svg" width={24} height={24} alt="LinkedIn" />
        </Link>
        <Link href="">
          <Image src="/path-to-twitter-icon.svg" width={24} height={24} alt="Twitter" />
        </Link>
        <Link href="">
          <Image src="/path-to-instagram-icon.svg" width={24} height={24} alt="Instagram" />
        </Link>
      </section>
    </div>
  );
}
