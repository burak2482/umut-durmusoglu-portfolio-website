import Link from 'next/link';
import Image from 'next/image';
import '../app/globals.css';

export default function Footer() {
  return (
    <div>
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
