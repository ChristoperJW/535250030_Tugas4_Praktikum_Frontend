import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <h1>Selamat Datang di Kopi Senja</h1>
      <p>
        Kopi Senja adalah usaha kopi lokal yang berdiri sejak 2020. Kami
        menyajikan kopi pilihan dari petani lokal dengan suasana yang hangat.
      </p>
      <br />
      <Link href="/about">Kenali kami lebih jauh →</Link>
    </main>
  );
}